import React from 'react'
import DirectoryItems from "../directory-item/directory-item.cmponent";
import "./directory.style.scss";

import { category } from "../../shop-data/shop-data";

const Driectory = () => {
  return (
    <div className="directory-container">
      {category.map((category) => (
        <DirectoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Driectory;
