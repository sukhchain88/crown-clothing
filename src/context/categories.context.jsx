import React from "react";
import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoryMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => {
    const getcategories = async () => {
      const categoryMap = await getCategoriesAndDocument();
      setCategoryMap(categoryMap);
    };
    getcategories();
  }, []);

  const value = { categoryMap, setCategoryMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
