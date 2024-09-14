import React, { useState, useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star-icon.png";
import star_dull_icon from "../Assets/star-dull-icon.png";
import { ShopContext } from "../../Context/ShopContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, setSize } = useContext(ShopContext);

  const [isOpen, setIsOpen] = useState(false);

  const Hanldesize = (e) => {
    setSize(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedSize = document.querySelector('input[name="size"]:checked');
    if (selectedSize) {
      addToCart(product.id);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } else {
      alert("Please select a size.");
    }
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" className="side-img" />
          <img src={product.image} alt="" className="side-img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-main-star">
          <img src={star_icon} alt="" className="star-img" />
          <img src={star_icon} alt="" className="star-img" />
          <img src={star_icon} alt="" className="star-img" />
          <img src={star_icon} alt="" className="star-img" />
          <img src={star_dull_icon} alt="" className="star-img" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisply-right-description">
          Discover our diverse range of shirts designed for men, women, and
          kids. Crafted from high-quality fabrics, these shirts combine comfort
          with style, making them perfect for any occasion. Whether you're
          dressing up for a special event or keeping it casual, our shirts offer
          a blend of timeless design and everyday practicality.
        </div>
        <form onSubmit={handleSubmit}>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <label htmlFor="S">S</label>
              <input
                type="radio"
                name="size"
                id="S"
                value="S"
                onChange={Hanldesize}
                required
              />

              <label htmlFor="L">L</label>
              <input
                type="radio"
                name="size"
                id="L"
                value="L"
                onChange={Hanldesize}
                required
              />

              <label htmlFor="X">X</label>
              <input
                type="radio"
                name="size"
                id="X"
                value="X"
                onChange={Hanldesize}
                required
              />

              <label htmlFor="XL">XL</label>
              <input
                type="radio"
                name="size"
                id="XL"
                value="XL"
                onChange={Hanldesize}
                required
              />

              <label htmlFor="XXL">XXL</label>
              <input
                type="radio"
                name="size"
                id="XXL"
                value="XXL"
                onChange={Hanldesize}
                required
              />
            </div>
          </div>

          <Popup
            position="right center"
            open={isOpen}
            closeOnDocumentClick={false}
            className="custom-popup"
          >
            <div className="popup-content">
              <h2>ADDED!!</h2>
              <p>Product Successfully Added To Cart</p>
            </div>
          </Popup>
          <button type="submit">ADD TO CART</button>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
