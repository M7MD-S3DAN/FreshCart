import axios from "axios";
import { createContext, useState } from "react";
import { date } from "yup";


export let storeContext=createContext(0);







export default function StoreContextProvider({children}){
  let [CattId,setCatId]=useState("");

  let[counter,setCounter]=useState(0)
return <storeContext.Provider value={{counter,
 setCounter
 ,addToCart,
 getCart,
 deleteItem,
 updateProduct,
 pay,
 }}>
  {children}
</storeContext.Provider>

}

async function addToCart(productId){
return axios.post('https://ecommerce.routemisr.com/api/v1/cart',{productId},{
  headers:{
    token:localStorage.getItem('token')
  }
}).then(({data})=>data).catch(err=>err)
}


async function getCart(){
  return axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
    headers:{
      token:localStorage.getItem('token')
    }
  }).then(({data})=>data).catch(err=>err)


  }


  async function deleteItem(productId){
    return axios.delete('https://ecommerce.routemisr.com/api/v1/cart/'+productId,{
      headers:{
        token:localStorage.getItem('token')
      }
    }).then(({data})=>data).catch(err=>err)

  }



    async function updateProduct(productId,count){
      return axios.put('https://ecommerce.routemisr.com/api/v1/cart/'+productId,{count},{
        headers:{
          token:localStorage.getItem('token')
        }
      }).then(({data})=>data).catch(err=>err)
      }


    


      async function pay(cartId,shippingAddress){
        return axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/'+cartId,{shippingAddress},{
          headers:{
            token:localStorage.getItem('token')
          }
        }).then(({data})=>data).catch(err=>err)
        }




