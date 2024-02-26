import React, { createContext, useEffect, useState } from "react";
// import all_product from '../Components/Assets/all_product'
import axios from 'axios';


export const ShopContext = createContext(null)
const getDefaultCart = ()=>{
    let cart={}
    for(let index=0; index < 300+1; index++){
        cart[index]=0
    }
    return cart;
}


const ShopContextProvider = (props) =>{
    const [all_product,setAll_Product] = useState([])
const [cartItems,setcartItem]= useState(getDefaultCart())

useEffect(() => {
    axios.get('http://localhost:4000/allproduct')
      .then(response => {
        setAll_Product(response.data);
      })
      if(localStorage.getItem('auth-token')) {
        axios.post('http://localhost:4000/getcart', {}, {
          headers: {
            Accept: 'application/json',
            'auth-token': localStorage.getItem('auth-token'),
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          setcartItem(response.data);
        })
        .catch(error => {
          console.error('Error getting cart:', error);
        });
      }
      
  }, []);

const addToCart = (itemId) =>{
    setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    if(localStorage.getItem('auth-token')) {
        axios.post('http://localhost:4000/addtocart', {
          itemId: itemId
        }, {
          headers: {
            Accept: 'application/json',
            'auth-token': localStorage.getItem('auth-token'),
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error adding to cart:', error);
        });
      }
}
const removeFromCart = (itemId) =>{
    setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if(localStorage.getItem('auth-token')){
        axios.post('http://localhost:4000/removefromcart', {
          itemId: itemId
        }, {
          headers: {
            Accept: 'application/json',
            'auth-token': localStorage.getItem('auth-token'),
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error adding to cart:', error);
        });
    }

}

// const getTotalCartAmount = ()=>{
//     let totalAmount = 0
//     for(const item in cartItems){
//         if(cartItems[item]>0){
//             let itemInfo= all_product.find((product)=>product.id === Number(item))
//             totalAmount += itemInfo.new_price * cartItems[item]
            
//         }
//     }
//     return totalAmount

// }

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
      if (cartItems.hasOwnProperty(item) && cartItems[item] > 0) {
          let itemInfo = all_product.find((product) => product.id === Number(item));
          if (itemInfo) {
              totalAmount += itemInfo.new_price * cartItems[item];
          } else {
              console.error(`Product with ID ${item} not found in all_product array.`);
          }
      }
  }
  return totalAmount;
};

const getTotalCartItems =()=>{
    let totalItem=0
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem+=cartItems[item]
        }
    }
    return totalItem
}
const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}

return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
}
export default ShopContextProvider;