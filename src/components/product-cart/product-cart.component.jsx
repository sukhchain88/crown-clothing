import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';


import Button from '../button/button.component';
import './product-cart.style.scss';


const ProductCart = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)



    const addItemToCartHendler = () => addItemToCart(product)

    return (
        <div className='product-cart-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addItemToCartHendler}>Add to card</Button>
        </div>
    )
}

export default ProductCart