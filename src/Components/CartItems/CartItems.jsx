import React, {useState, useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/deleteicon.png'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const CartItems = () => {
  const [open, setOpen] = useState(false);
  
  const { getTotalCartAmount, all_products, cartItems, removefromCart ,size} = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-forget-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Size</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_products.map((e) => {
        const itemCount = cartItems[e.id] || 0; 

        if (itemCount > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format cartitems-forget-main'>
                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitem-quantity'>{itemCount}</button>
                <p>{size}</p>
                <p>${e.new_price * itemCount}</p>
                <img className='carticon-remove-icon' src={remove_icon} alt="Remove item" onClick={() => removefromCart(e.id)} />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          
        <button >PROCEED TO CHECKOUT</button>                   
                


        </div>
        <div className="cartitems-promocode">
          <p>If You Have a Promo Code, Enter It Here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems;
