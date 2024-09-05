import React from 'react'
import './Hero.css'
import heroImg from '../Assets/hero.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
            <div className='hand-icon'>
                <p>New</p>
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
        </div>

      </div>
      <div className="hero-right">
        <img src={heroImg} alt="" />
      </div>  

    </div>
  )
}

export default Hero
