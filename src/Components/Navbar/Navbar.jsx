import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo1 from '../Assets/logo1.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {

    const { username } = useContext(ShopContext);
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo1} alt="logo"/>
            <p>Dobicon</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/Shop' style={{textDecoration:'none'}}> Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}> Mens</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}> Womens</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}> Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>    
        <div className='nav-login-cart'>
            <p className='welname'>{username}</p>      
            <Link to='/cart'><img src={cart} alt="cart"/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
            <Link to='/'><button>Logout</button></Link>
        </div>


    </div>
  )
}

export default Navbar
