/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from "react-router-dom";
import classes from "./category.module.css";

const CategoryCard = ({ item }) => {
  // https://fakestoreapi.com/products/category/men'sClothen
  return (
    <div className={classes.category}>
      <Link to={`/category/${item.name}`}>
        <span>
          <h2>{item.name}</h2>
        </span>
        <img src={item.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
