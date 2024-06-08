import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1> Get Offers On Your Email</h1>
        <p>SUbscribe to our channel and stay updated</p>
        <div>
            <input type="email" placeholder='Your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter