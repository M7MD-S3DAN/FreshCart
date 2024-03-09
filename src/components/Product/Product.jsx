

import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { storeContext } from '../Context/storeContext'
import { toast } from 'react-toastify';

export default function Product({item}) {

  let [heart, setHeart] = useState(false)
  let {counter,setCounter,addToCart}=useContext(storeContext)
  let[btnLoading, setBtnLoading] = useState(true);
async  function addCartProduct(productId){
  setBtnLoading(false)
let data=await addToCart(productId);
// console.log(data)
if(data.status=='success'){
toast.success(`Product added successfully to your cart`)
setCounter(data.numOfCartItems+1)
setBtnLoading(true)
}
}
  return (
    <>


<div className="col-md-2">
  <div className="product cursor-pointer p-3 rounded">
    <i className="fa-regular fa-heart fs-4 " style={heart? {color:'green'}:{color:'unset'}} onClick={()=>setHeart(!heart)}></i>





    <Link to={'/Product-Details/'+item._id}>

    <img src={item.imageCover} className='w-100' alt="" srcset="" />
    <h5 className='text-main'>{item.category.name}</h5>
    <p>{item.title.split(' ').slice(0,7).join(' ')}</p>

<div className='d-flex justify-content-between my-3'>

<div>{item.price}EGP</div>
<div>
  <i className='fa-solid fa-star rating-color'></i>
  {item.ratingsAverage}
    
</div>
</div>
    </Link>


<button disabled={!btnLoading} onClick={()=>(addCartProduct(item._id))} type="button" className='btn bg-main text-white text-center w-100'>

{btnLoading?'Add To Cart':'Please Wait...'}
</button>
  </div>



          
</div>


    </>
  )
}
