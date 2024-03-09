


import axios from 'axios'
import React, { useContext, useState } from 'react'
import { storeContext } from '../Context/storeContext'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'

export default function Pay() {
const[city, setCity] =useState('')
const[phone,setPhone]=useState('')
const[Details,setDetails]=useState('')
const[loading,setLoading]=useState(true)
const {pay}=useContext(storeContext)
let {id}=useParams()

async function sendDataToAPI(value){
setLoading(false)
let data=await pay(id,value)
console.log(data)
if(data.status=='success')
{
  window.location.href=data.session.url
}

}
let address=useFormik({

  initialValues:{
    details:'',
    phone:'',
    city:''

  },
  onSubmit:(values)=>{
    sendDataToAPI(values)
  }
})






  return (
    <>
    
    <div className='w-50 m-auto'>
<form action="" onSubmit={address.handleSubmit}>
<label htmlFor="city">City :</label>
<input onChange={(e)=>{setCity(e.target.value)}} className='form-control my-3' type="text" id="city" placeholder='Enter your city'/>


<label htmlFor="tel">Phone :</label>
<input onChange={(e)=>{setPhone(e.target.value)}} className='form-control my-3' type="tel" id="tel" placeholder='Enter your phone'/>



<label htmlFor="Details">Details :</label>
<textarea onChange={(e)=>{setDetails(e.target.value)}} id='Details' className='form-control my-3' placeholder='Enter your Details'></textarea>

<button  className='btn bg-main text-white my-3 ms-auto' type="submit">
  Pay
  </button>
</form>



    </div>
    
    
    </>
  )
  
  }