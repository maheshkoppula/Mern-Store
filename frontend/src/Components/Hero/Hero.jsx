import React from 'react'
import "./Hero.css"
import hero_img from '../Assets/2-suit-png-image.png'
import hand_icon from '../Assets/shopping-cart.png'
import arrow_icon from '../Assets/shopping-cart.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
          </div>
          <p>Collection</p>
          <p>For everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
        </div>
       </div>
       <div className="hero-right">
          <img src={hero_img} alt=""  className='hero-img'/>
       </div>

    </div>
  )
}

export default Hero