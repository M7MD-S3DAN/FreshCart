

import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from'../../../assets/images/freshcart-logo.svg'
import LayOut from './LayOut'

export default function OtherLayOut() {
  return (
    <>



  



    <nav className="navbar navbar-expand-lg navbar-light my-1">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
<div className='me-3'>
<img src={logo} alt="E-Commerece" srcset="" />

  </div>    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    
        <li className="nav-item">

          <NavLink className="nav-link" aria-current="page" to="/signin">Sign In</NavLink>

        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/signup">Sign Up</NavLink>

        </li>
        
              
<li className="nav-item dropdown">
  <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Language
          <i className="fa-solid fa-language mx-1"></i>

  </NavLink>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><NavLink   className="dropdown-item" to="/Arabic">Arabic</NavLink></li>
    <li><NavLink  className="dropdown-item" to="/English"> English</NavLink></li>
    <li><hr className="dropdown-divider" /></li>
  </ul>
</li>


</ul>
</div>
</div>
</nav>

    <Outlet/>
    </>
  )
}
