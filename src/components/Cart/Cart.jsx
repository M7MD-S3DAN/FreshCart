

import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../Context/storeContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


export default function Cart() {
  let {getCart,deleteItem,setCounter,updateProduct}=  useContext(storeContext)
  let[data, setData] = useState(null)
  let[loading,setLoading]=useState(true);

  useEffect(()=>{
    (async () =>{
    let data= await getCart();
    if(data?.response?.data.statusMsg=='fail'){
    return setData('null')}
    else{

      setData(data)
    }
    console.log(data);
    setLoading(false)
  })()
  },[])


async function deleteProduct(id){
let data=await deleteItem(id)
console.log("deleted",data)
if(data.status==='success'){

  toast.error('Product Deleted...')
  setCounter(data.numOfCartItems)
  console.log(data.numOfCartItems)

  setData(data)
    
}

}


async function deleteProductQuntry(id,count){
  let data=await updateProduct(id,count)
  console.log("deleted",data)
  if(data.status==='success'){
    toast.success('Update Product...')
    setCounter(data.numOfCartItems)
    console.log(data.numOfCartItems)
  
    setData(data)
      
  }
  
  }
  


if(loading)  return <div class="loader d-flex"></div>

if(data==null||data.numOfCartItems==0)
return (<h1 className="text-center text-main my-5">No Data Found</h1>)
else {
  const product = data.product;
  //const imageUrl = require(`../assets/img/products/${product._id
  //}.jpg`);
}
  return (
    <div className='container bg-main-light'>
      <h2>Your Shopping Cart</h2>
      <p className='text-main'>Total Price:{data?.data.totalCartPrice}EGP</p>

<Link to={`/pay/${data.data._id}`} className='text-end my-4'><button className='btn bg-main text-light' type="button">OnlinePayment</button>
</Link>
{data?.data.products.map(item=>{
  return <div className='row py-2 border-bottom'>
    <div className="col-md-1">
      <img src={item.product.imageCover} className='w-100' alt="" srcset="" />
    </div>
<div className="col-md-11 d-flex justify-content-between">
  <div><p className='m-1'>{item.product.title}</p>
  <p className='text-main m-1 p-0'>Price: {item.price}</p>
  <button onClick={()=>deleteProduct(item.product._id)} className='btn m-0 p-0' type="button"> <i className='fa-solid text-main fa-trash-can'></i> Remove</button>
</div>
<div>
<button  onClick={()=>deleteProductQuntry(item.product._id,item.count+1)} className='btn brdr' type="button">+</button>
<span className='px-2'>{item.count}</span>
<button disabled={item.count<=1}  onClick={()=>deleteProductQuntry(item.product._id,item.count-1)} className='btn brdr' type="button">-</button>

</div>
</div>

  </div>
})}


    </div>
  )
}
