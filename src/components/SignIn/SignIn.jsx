import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
export default function Signin() {

  let navigate=useNavigate();
const[errMsg, setErrMsg] = useState("")
const[loading, setLoading] = useState(true)
 function sendDataToApi(values){
  setLoading(false);
axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
.then(({data}) => {
console.log(data);
if(data.message === "success"){
  localStorage.setItem("token", data.token)

navigate('/home')

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
email:yup.string().email("Invalid email").required("Email is required (test@gmail.com)").matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
password :yup.string().min(6,"Too short password")
 .max(12, "Too long password").required("Password is required (Testing193!)"),
 

})
return  schema;


}
  let Login=useFormik({
    initialValues: {
    
      email:'',
      password:"",
    
    
    },
validationSchema
,


// validate,
onSubmit:(values)=>{
   sendDataToApi(values);
}

})
// console.log(Login.errors)

  return (
    <>


    <div className="container-fluid w-75 my-4">
      <h2>Login Now :</h2>
      <form className='border border-1 p-3 shadow-lg' onSubmit={Login.handleSubmit}>


<label htmlFor="email">Email Address : </label>
<input onBlur={Login.handleBlur} onChange={Login.handleChange} className='form-control  w-100 m-2' type='email' id='email' name='email' />
{Login.errors.email&&Login.touched.email? <div className='alert alert-danger'>{Login.errors.email}</div> : ""}

<label  htmlFor="password">Password : </label>
<input onBlur={Login.handleBlur} onChange={Login.handleChange} className='form-control  w-100 m-2'  type='password' id='password' name='password' />
{Login.errors.password&&Login.touched.password?<div className='alert alert-danger'>{Login.errors.password}</div> : ""}

{errMsg?<div className="alert alert-danger">{errMsg}</div>:''}
<div className='d-flex justify-content-center'>
<button disabled={!(Login.dirty&&Login.isValid)} className='btn bg-main text-white my-3 ms-auto' type="submit">
  {loading?'signin':"Loading..."}

</button>
  </div>
      </form>
    </div>

    
    
    
    </>
  )
}
