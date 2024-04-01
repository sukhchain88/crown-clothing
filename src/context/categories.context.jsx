import { createContext, useState, useEffect } from 'react';

// import SHOP_DATA from '../shop-data.js';

import { getCategoriesAndDocument } from '../utils/firebase/firebase.utils.js';


export const CategoriesContext = createContext({
    categoryMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoryMap, setCategoryMap] = useState({});

    useEffect(() => {
        const getcategories = async () => {
            const categoryMap = await getCategoriesAndDocument();
            console.log(categoryMap)
            setCategoryMap(categoryMap)
        }
        getcategories()
    }, [])

    const value = { categoryMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};