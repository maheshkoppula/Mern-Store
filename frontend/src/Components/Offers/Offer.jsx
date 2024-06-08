import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/2-suit-png-image.png'
const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERPRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
                <img src={exclusive_img} alt=""  className='offers-img'/>

        </div>
        

    </div>
  )
}

export default Offer