

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { storeContext } from '../Context/storeContext';
export default function ProductDetails() {
  let{counter,setCounter}=useContext(storeContext)
let[heart, setHeart]=useState(false);
  let  params = useParams();
  // console.log(params);
  let[Product, setProduct] = useState([])
  async function  getProductDetails() {
  let{data}=await axios.get('https://ecommerce.routemisr.com/api/v1/products' + '/' + params.id)
  setProduct(data.data)





  }

  useEffect(() => {
    getProductDetails()
  }, [])
  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-3">
        <button   className="btn ms-auto">
        <i className="fa-regular fa-heart fs-4 " style={heart? {color:'green'}:{color:'unset'}} onClick={()=>setHeart(!heart)}></i>

</button>
          <img src={Product.imageCover} className='w-100' alt="" srcset="" />
        </div>
        <div className="col-md-9">
<h4>{Product.title}</h4>
<p className='my-3'>{Product.description}</p>
<div className='d-flex justify-content-between my-3'>

<div>{Product.price}EGP</div>
<div>
  <i className='fa-solid fa-star rating-color'></i>
  {Product.ratingsAverage}
    
</div>
</div>
<button onClick={()=>setCounter(counter+1)} type="button" className='btn bg-main text-white text-center w-100'>Add To Cart</button>

</div>
        </div>
<div>
  {/* <span>{Product.category.name}</span> */}


      </div>
    </div>
    
    </>
  )
}
