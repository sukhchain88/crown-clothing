import { useContext } from 'react';

import ProductCart from '../../product-cart/product-cart.component';


import { ProductsContext } from '../../../context/product.context';
import './shop.style.scss'


const Shop = () => {
    const { products } = useContext(ProductsContext)

    return (
        <div className='shop-container'>
            {products.map(product => {
                return (
                    <ProductCart key={product.id} product={product} />
                )
            })}

        </div>
    )
}

export default Shop