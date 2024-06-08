import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
const CartItems = () => {

    const {all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Tittle</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div> 
            <hr /> 
            {all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    return <div>
                    <div className="cartitems-format">
                        <img src="" alt="" />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartItems-quantity'> {cartItems[e.id]} </button>
                        <p>{e.new_price*cartItems[e.id]}</p>
                        <p onClick={()=>{removeFromCart(e.id)}}>X</p>
                    </div>
                    <hr/>
                    </div>
                }
            })}
            

    </div>

 
  )
}

export default CartItems