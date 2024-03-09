
import './HomeSlider.modules.css'
import React from 'react'
import Slider from "react-slick";
import slider1 from '../../assets/images/pexels-andrea-piacquadio-1050244.jpg'
import slider2 from '../../assets/images/pexels-andrea-piacquadio-920382.jpg'
import slider3 from '../../assets/images/pexels-cottonbro-studio-3944405.jpg'
import slider4 from '../../assets/images/pexels-photomix-company-230544.jpg'
export default function HomeSlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    
    };
  return (
    <>
    <div className="container-fluid mb-2">
    
      <Slider {...settings}>
      
      <img className='w-100' src={slider1} alt="" srcset="" />
      <img className='w-100' src={slider4} alt="" srcset="" />
      <img className='w-100' src={slider3} alt="" srcset="" />
      <img className='w-100' src={slider2} alt="" srcset="" />
      
    
    </Slider>
    
      
    </div>
    
    </>
  )
}
