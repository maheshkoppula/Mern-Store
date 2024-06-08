import React from 'react'
import instagram_icon from '../Assets/instagram_717392.png'
import twitter_icon from '../Assets/letter-x_12452524.png'
import whatsapp_icon from '../Assets/whatsapp_2111774.png'
import logo from '../Assets/shopping-cart.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
     
     <div className="footer-logo">
        <img src={logo} alt="" className='logo' />
            <p>SHOPPER</p>
    </div>
    <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icons">
        <div className="footer-icon-container">
            <img src={instagram_icon} alt=""  className='img'/>
        </div>
        <div className="footer-icon-container">
            <img src={twitter_icon} alt="" className='img' />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" className='img' />
        </div>
    </div>

    <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
    </div>


    </div>
  )
}

export default Footer