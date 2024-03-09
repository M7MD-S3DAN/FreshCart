


import React, { useContext, useEffect } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { storeContext } from '../Context/storeContext'
import { useTranslation } from 'react-i18next'
export default function Navbar() {
const[t,i18n]=useTranslation();

let {counter,getCart,setCounter}=  useContext(storeContext)

useEffect(()=>{
  (async () =>{
  let data= await  getCart();
  console.log(data);
  setCounter(data.numOfCartItems)
})()
},[])
  return (
  <>
    
    <nav className="navbar navbar-expand-lg navbar-light my-1">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
<div className='me-3'>
<img src={logo}  alt="E-Commerece" srcset="" />
  </div>    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>  <li className="nav-item">
          <NavLink className="nav-link" to="/categories">Categories</NavLink>
        </li> <li className="nav-item">
          <NavLink className="nav-link" to="/brands">Brands</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link position-relative mx-1" aria-current="page" to="/cart">Cart
          <i className="fa-solid fa-cart-plus m-1 fs-5"></i>


        {counter?  <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
  {counter}
  </span>:''}
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link position-relative mx-1" aria-current="page" to="/wishlist">Wishlist
          <i className="fa-solid fa-heart m-1 fs-5"></i>


          <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
    2
  </span>
          </NavLink>
        </li> */}
      
{/* <li className="nav-item dropdown">
  <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Language
          <i className="fa-solid fa-language mx-1"></i>

  </NavLink>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><NavLink  onClick={()=>{i18n.changeLanguage('ar')}} className="dropdown-item" to="/Arabic">Arabic</NavLink></li>
    <li><NavLink  onClick={()=>{i18n.changeLanguage('en')}} className="dropdown-item" to="/English"> English</NavLink></li>
    <li><hr className="dropdown-divider" /></li>
  </ul>
</li> */}





        <li className="nav-item">
          <NavLink className="nav-link position-relative mx-1" aria-current="page" to="/signin">SignOut
          <i class="fa-solid fa-house-lock mx-1"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
    
    
    
    </>
  )
}
