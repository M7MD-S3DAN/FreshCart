


import React from 'react'

export default function Brand({item}) {
  return (
    <>
    <div className="col-md-2  m-2">
      <img src={item.image} alt="" srcset="" />
      <p className='text-main text-center'>{item.name}</p>
    </div>
    
    
    </>
  )
}
