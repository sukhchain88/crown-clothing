import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCart from '../../product-cart/product-cart.component';

import { CategoriesContext } from '../../../context/categories.context'

import './category.style.scss'

const Category = () => {
    const { category } = useParams();
    const { categoryMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoryMap[category]);

    useEffect(() => {
        setProducts(categoryMap[category]);
    }, [category, categoryMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products &&
                    products.map((product) => (
                        <ProductCart key={product.id} product={product} />
                    ))}
            </div>
        </Fragment>
    );
};

export default Category;