import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/arrow_14611516.png'

const Breadcrums = (props) => {

    const {product} =props;


  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" className='logo' /> SHOP <img src={arrow_icon} alt="" className='logo' /> {product.category} <img src={arrow_icon} alt="" className='logo' /> {product.name}
    </div>
  )
}

export default Breadcrums