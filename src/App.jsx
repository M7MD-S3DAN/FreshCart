


import {Suspense} from 'react'
import Navbar from './components/Navbar/Navbar'
import HomeSlider from './components/HomeSlider/HomeSlider'
import {useTranslation} from "react-i18next";
import Categories from './components/Categories/Categories';

import {RouterProvider,createBrowserRouter, createHashRouter } from 'react-router-dom';
import LayOut from './components/Categories/LayOut/LayOut';
import Home from './components/Home/Home';
import Wishlist from './components/Wishlist/Wishlist';
import Notfound from './components/Notfound/Notfound';
import Brands from './components/Brands/Brands';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import OtherLayOut from './components/Categories/LayOut/OtherLayOut';

import { Offline, Online } from "react-detect-offline";
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import ProductDetails from './components/ProductDetails/ProductDetails';
import StoreContextProvider from './components/Context/storeContext';
import { ToastContainer, toast } from 'react-toastify';
import Pay from './components/Pay/Pay';



export default function App() {

const HomePage=(props)=>{
  const[t,i18n]= useTranslation();
}


  let routes=createHashRouter([
    {
      path:"/" , element:<LayOut/>, children:[
      {index:true,element:<ProtectedRoutes><HomeSlider/>

      <Categories/>
      <Products/>
      </ProtectedRoutes> },
      {path:"/home",element:<ProtectedRoutes><Home/></ProtectedRoutes> },
      {path:"/categories",element:<ProtectedRoutes><Categories/></ProtectedRoutes>},
      {path:"/brands" ,element: <ProtectedRoutes><Brands /></ProtectedRoutes>},
      {path:"/Wishlist",element:<ProtectedRoutes><Wishlist/></ProtectedRoutes>},
      {path:"/products" ,element:<ProtectedRoutes><Products/></ProtectedRoutes>},
      {path:"/cart" ,element:<ProtectedRoutes><Cart/></ProtectedRoutes>},
      {path:"/pay/:id" ,element:<ProtectedRoutes><Pay/></ProtectedRoutes>},
      {path:"/Product-Details/:id" ,element:<ProtectedRoutes><ProductDetails/></ProtectedRoutes>},
      {path:'*',element: <ProtectedRoutes><Notfound/></ProtectedRoutes>}

      

    ]
  },
  {
  path:"/" , element:<OtherLayOut/>, children:[
    {path:"/signup",element:<SignUp/> },
    {path:"/signin",element:<SignIn/>},

  ]}
  ])

  return (
    <>
     <div>
    <Suspense  fallback={null}>

    <StoreContextProvider>

<RouterProvider router={routes}/>

</StoreContextProvider>
<ToastContainer theme='colored'  />
  {/* <ToastContainer theme='colored' /> */}
<Offline>
  <div className="offline">
  You are Offline Now(surprise!)
  </div>
</Offline>

    </Suspense>
    
  </div>
    </>
  )
}
