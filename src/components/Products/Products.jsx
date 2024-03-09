

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'

export default function Products() {
 let[products, setProducts] =useState([])
 let[loading,setLoading]=useState(true)

   async function getProduct(){
     let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/products')
     console.log(data.data)
     setProducts(data.data);
     
     setLoading(false);
   }
useEffect(()=>{
    getProduct();
},[])
if(loading){
  return <div class="loader d-flex"></div>
}

return (
    <>
    <div className="container-fluid">
      <div className="row">
      {products.map(item=>{

return  <Product item={item} key={item._id}/>;})}


      </div>
    </div>
    
    </>
  )
}
