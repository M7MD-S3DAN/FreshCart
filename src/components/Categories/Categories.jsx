

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
export default function Categories() {

  const [categories,setCategories]=useState([]) 
async function getCategories(){
  let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  setCategories(data.data);
  console.log(data.data)
}

useEffect(()=>{
  getCategories();
},[])




  
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:900,
      cssEase: 'linear',
      variableWidth: true,
      rtl: true


      
      };
    return (
      <>
      <div className="container-fluid m-2 my-4">
      <h3 className='fs-bolder'>Show Popular Categories</h3>
        <Slider {...settings}>
        {/* map through the categories array and create a card for each category */}
        {categories.map((item)=>(
<div className=' p-2'>
<img height={200} className='w-100' src={item.image} alt="" srcset="" />
<h4 className='fs-6'>{item.name}</h4>
<p>{item.description}</p>
</div>



        ))}
        
      
      </Slider>
      
        
      </div>
      













      
      </>
  )
}
