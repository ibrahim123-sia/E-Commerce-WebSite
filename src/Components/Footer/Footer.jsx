import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo1.png'
import whatsapp from '../Assets/whatsapp.png'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={whatsapp} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={facebook} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={instagram} alt="" />
        </div>
      </div>
      <div className="footer-copy-right">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
