/* eslint-disable react/prop-types */
// import React from 'react'
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import style from "./product.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../utility/action.type";
// import style from "./product.module.css";

function ProductCard({ item, renderDesc, renderAdd, flex }) {
  const { title, price, rating, image, description, id } = item;

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        title,
        price,
        image,
        rating,
        id,
        description,
      },
    });
  };

  return (
    <div
      className={`${style.card__container} ${flex && style.product__flexed}`}
    >
      <Link to={`/product/${id}`}>
        {/* localhost/product/3 */}
        <img src={image} alt="" />
      </Link>
      <div>
        {/* title */}
        <h3>{title}</h3>
        {renderDesc && <p style={{ maxWidth: "750px" }}>{description}</p>}
        {/* rating */}
        <div className={style.rating}>
          <Rating
            value={rating?.rate}
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
          />
          <small>{rating?.count}</small>
        </div>
        {/* pricing */}
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button onClick={addToCart} className={style.button}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
