// import React from 'react'
import { categoryInfos } from "./categoryData";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

const Category = () => {
  return (
    <div className={classes.category_container}>
      {categoryInfos.map((card, index) => (
        <CategoryCard item={card} key={index} />
      ))}
    </div>
  );
};

export default Category;
