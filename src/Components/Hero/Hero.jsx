import React from 'react'
import './Hero.css'
import handicon from '../Assets/logo1.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
            <div className='hand-icon'>
                <p>new</p>
                <img src={handicon} alt="" />
            </div>
        </div>


      </div>
      <div className="hero-right">

      </div>  

    </div>
  )
}

export default Hero
