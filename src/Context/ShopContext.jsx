import React, { createContext, useState } from 'react'
import all_products from '../Components/Assets/all_products'
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
        let cart={};
        for (let index = 0; index < all_products.length+1; index++) {
            cart[index]=0

        }
        return cart;
    }

const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart())
    const [username, setUsername] = useState('');
    const [size, setSize] = useState('');

    const getTotalCartAmount=()=>{
        let totalAmount=0

        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=all_products.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItems[item]

            }            
        }    
        return totalAmount
    }

    const getTotalCartItems=()=>{
        let totalitem=0
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                   totalitem+=cartItems[item]
    
            }    

        }    
        return totalitem
    }

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        
    }

    const removefromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const ContextValue={getTotalCartItems,getTotalCartAmount,all_products,cartItems,addToCart,removefromCart, username, setUsername,size, setSize}

    return( 

        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>        
                    
    )

}

export default ShopContextProvider





