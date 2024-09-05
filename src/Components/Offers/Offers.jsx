import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/g1.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>ONLY ON BEST SELLER PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
          <img src={exclusive_image} alt="" className='g1'/>
      </div>
    </div>
  )
}

export default Offers
