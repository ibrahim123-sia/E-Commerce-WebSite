import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star-icon.png'
import star_dull_icon from '../Assets/star-dull-icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {

  const {product}=props
  const {addToCart}=useContext(ShopContext)


  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" className='side-img'/>
            <img src={product.image} alt="" className='side-img'/>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-main-star">
            <img src={star_icon} alt="" className='star-img'/>
            <img src={star_icon} alt="" className='star-img'/>
            <img src={star_icon} alt="" className='star-img'/>
            <img src={star_icon} alt="" className='star-img'/>
            <img src={star_dull_icon} alt="" className='star-img'/>
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">${product.old_price}</div>
            <div className="productdisplay-right-prices-new">${product.new_price}</div>
        </div>
        <div className="productdisply-right-description">Discover our diverse range of shirts designed for men, women,
           and kids. Crafted from high-quality fabrics, these shirts combine comfort with style, making them perfect for
            any occasion. Whether you're dressing up for a special event or keeping it casual, our shirts offer a blend
             of timeless design and everyday practicality.
           </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      </div> 
    </div>
  )
}

export default ProductDisplay
