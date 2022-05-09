import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./ProductItem.module.scss";
import { addToCart } from "../../../redux/actions/actions";

interface IProductItemData {
  id?: any | null;
  name: string;
  price: number;
  imageUrl: string;
  manufacturer: number;
}
const ProductItem = (props: IProductItemData) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img className={classes.cardImg} src={props.imageUrl} />
        <div className={classes.cardDetails}>
          <h6>{props.manufacturer}</h6>
          <h2>{props.name}</h2>
          <div className={classes.priceBtn}>
            <p>
              <span>$</span>
              {props.price}
            </p>
            <button
              onClick={() => {
                dispatch(addToCart());
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
