import React, { useContext } from 'react'
import './ProductDisplay.css' 
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image } alt=""  className='small_img'/>
            <img src={product.image } alt="" className='small_img' />
            <img src={product.image } alt="" className='small_img'/>
            <img src={product.image } alt="" className='small_img' />
        </div>
        <div className="productdisplay-img">
            <img src={product.image} alt=""  className='productdisplay-main-img'/>
        </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                ${product.new_price}
                </div>

            </div>
            <div className="productdisplay-right-description">
             A light weight dress looks good suits for every one and especially for celebrations
                </div>
                <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                </div>
                <button className='btn' onClick={()=>{addToCart(product.Id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category : </span> Women,T-shirts</p>
                <p className='productdisplay-right-category'><span>Tags : </span> Modern, latest</p>
            
        </div>

    </div>
  )
}

export default ProductDisplay