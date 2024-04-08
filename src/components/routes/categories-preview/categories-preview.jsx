import React from "react";

import { useContext, Fragment } from "react";

import CategoryPreview from "../../category-preview/category-preview.component";

import { CategoriesContext } from "../../../context/categories.context";
import SearchBox from "../../searchBox/search-box.component";

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      <SearchBox />
      {Object.keys(categoryMap).map((title) => {

        let products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
