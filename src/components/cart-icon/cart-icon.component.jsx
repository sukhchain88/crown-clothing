import { useContext } from 'react'

import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'

import { CartContext } from '../../context/cart.context'

import './cart-icon.style.scss'
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext)

    const toggleCartIcon = () => setIsCartOpen(!isCartOpen)

    return (
        <div className='cart-icon-container' onClick={toggleCartIcon}>
            <ShopingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemCount}</span>
        </div>
    )
}

export default CartIcon