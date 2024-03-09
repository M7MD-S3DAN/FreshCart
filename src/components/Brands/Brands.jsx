

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Brand from '../Brand/Brand';

export default function Brands() {
let[brands, setBrands] =useState([]);

async  function getBrands(){
  
  let{data}=await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  console.log(data.data);
  setBrands(data.data)




  }
useEffect(()=>{
    getBrands();
},[])



  return (
    <>
    <div className="container-fluid">
      <div className="row">
      {brands.map(item=>{

return  <Brand item={item} key={item._id}/>;})}


      </div>
    </div>
    
    
    </>
  )
}
