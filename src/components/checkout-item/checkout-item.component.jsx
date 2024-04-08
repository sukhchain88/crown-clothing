import React from 'react'
import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import './checkout-item.style.scss'


const CheckoutItem = ({ cartItem }) => {
    const { name, price, imageUrl, quantity } = cartItem

    const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext)

    const addItemToCartHendler = () => addItemToCart(cartItem)
    const removeItemToCartHendler = () => removeItemToCart(cartItem)
    const clearItemFromCartHendler = () => clearItemFromCart(cartItem)

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={`${imageUrl}`} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={removeItemToCartHendler}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={addItemToCartHendler}>&#10095;</span>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemFromCartHendler}> &#10005;</div>
        </div>
    )
}

export default CheckoutItem