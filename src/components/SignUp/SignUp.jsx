import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SignUp() {
  const [t,i18n]=useTranslation();
  let navigate=useNavigate();
const[errMsg, setErrMsg] = useState("")
const[loading, setLoading] = useState(true)
 function sendDataToApi(values){
  setLoading(false);
axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
.then(({data}) => {
console.log(data);
if(data.message === "success"){
navigate('/signin')
}

}).catch((err)=>{
  setErrMsg(err.response.data.message);
  setLoading(true);
})
}


// function validate(values) {

//   const errors = {}
//   if (!values.name) {
//     errors.name = "Username is required"
//   } 
//   if(!values.email){
//       errors.email="Email field cannot be empty.";
//   }


//   if (!values.password) { 
//     errors.password = "Password is required" 
//   } 


//   if(values.rePassword!==values.password)
//   {
// errors.rePassword="password is not match"  }

// }

function validationSchema(){
let schema=new yup.object({
name:yup.string().required("Name is required").min(3, "Must be at least 3 characters"),
email:yup.string().email("Invalid email").required("Email is required (test@gmail.com)").matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
password :yup.string().min(6,"Too short password")
 .max(12, "Too long password").required("Password is required (Testing193!)").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
 rePassword:yup.string().oneOf([yup.ref('password')], "Passwords must match"),
 phone:yup.number().positive("Phone number should be positive").integer("Must be an integer value").required("Field is required")


})
return  schema;


}
  let register=useFormik({
    initialValues: {
      name:'',
      email:'',
      password:"",
      rePassword:"",
      phone:"",
    
    },
validationSchema
,


// validate,
onSubmit:(values)=>{
   sendDataToApi(values);
}

})




// console.log(register.errors)
  return (
    <>
    <div className="container-fluid w-75 my-4">
      <h2>Register Now :</h2>
      <form className='border border-1 p-3 shadow-lg' onSubmit={register.handleSubmit}>
<label htmlFor="fname">Name</label>
<input onBlur={register.handleBlur} onChange={register.handleChange} className='form-control w-100 m-2 ' placeholder="Your Name.." type='text' id='fname' name='name'/>
{register.errors.name&&register.touched.name ? <div className='alert alert-danger'>{register.errors.name}</div> : ""}


<label htmlFor="email">Email Address : </label>
<input placeholder="Your Email.." onBlur={register.handleBlur} onChange={register.handleChange} className='form-control  w-100 m-2' type='email' id='email' name='email' />
{register.errors.email&&register.touched.email? <div className='alert alert-danger'>{register.errors.email}</div> : ""}

<label  htmlFor="password">Password : </label>
<input placeholder='Enter Your Password' onBlur={register.handleBlur} onChange={register.handleChange} className='form-control  w-100 m-2'  type='password' id='password' name='password' />
{register.errors.password&&register.touched.password?<div className='alert alert-danger'>{register.errors.password}</div> : ""}
<label htmlFor="rePassword">re-Password :</label>
<input  placeholder='Enter Your re-Password' onBlur={register.handleBlur} onChange={register.handleChange} className='form-control   w-100 m-2' name='rePassword' type='password' id='rePassword'/>
{register.errors.rePassword&&register.touched.rePassword?<div className='alert alert-danger'>{register.errors.rePassword}</div> : ""}
<label htmlFor="phone">phone :</label>
<input  placeholder='Enter Your Phone' onBlur={register.handleBlur} onChange={register.handleChange} className='form-control  w-100 m-2 ' type='tel' id='phone' />
{register.errors.phone&&register.touched.phone?<div className='alert alert-danger'>{register.errors.phone}</div> : ""}
{errMsg?<div className="alert alert-danger">{errMsg}</div>:''}
<div className='d-flex justify-content-center'>
<button disabled={!(register.dirty&&register.isValid)} className='btn bg-main text-white my-3 ms-auto' type="submit">
  {loading?'SignUp':"Loading..."}

</button>
  </div>
      </form>
    </div>

    
    
    
    </>
  )
}
