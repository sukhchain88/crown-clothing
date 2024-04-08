import React, { useContext, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import FormInput from "../form-input/froms-input.component";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";

import SHOP_DATA from '../../shop-data'

const SearchBox = () => {
  // Accessing categories context
  const { setCategoryMap } = useContext(CategoriesContext);

  // State for search field input
  const [searchField, setSearchField] = useState("");

  // Function to handle search input change
  const searchChange = async (event) => {
    const { value } = event.target;
    setSearchField(value);

    if (value === " ") {
      // Fetch all categories when search field is empty   
      const categoryMapData = getCategoriesAndDocument();
      setCategoryMap(categoryMapData);
      return;
    }

    // Filter categories based on the search field
    const filteredCategories = SHOP_DATA.filter((cat) =>
      cat.title.toLowerCase().includes(value.toLowerCase())
    );

    const FilterCategoriesPrice =

    // Create a new object to store filtered categories
    const categorySearchArray = {
      hats: [],
      jackets: [],
      sneakers: [],
      womens: [],
    };

    // Categorize filtered categories
    filteredCategories.forEach((cat) => {
      switch (cat.title.toLocaleLowerCase()) {
        case "hats".toLocaleLowerCase():
          categorySearchArray.hats.push(...cat.items);
          break;
        case "jackets".toLocaleLowerCase():
          categorySearchArray.jackets.push(...cat.items);
          break;
        case "sneakers".toLocaleLowerCase():
          categorySearchArray.sneakers.push(...cat.items);
          break;
        case "womens".toLocaleLowerCase():
          categorySearchArray.womens.push(...cat.items);
          break;
        default:
          break;
      }
    });

    // Update the category map with filtered categories
    setCategoryMap(categorySearchArray);
  };

  return (
    <div>
      {/* Input for search */}
      <FormInput
        type="search"
        placeholder="Search-box"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
