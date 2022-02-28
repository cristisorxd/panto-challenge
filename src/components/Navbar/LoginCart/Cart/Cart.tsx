import React from "react";
import images from "../../../../theme/images";
import classes from "./Cart.module.scss";

const Cart = () => {
  return (
    <button className={classes.cartButton}>
      <img src={images.cartIcon} alt="Cart icon" />
    </button>
  );
};

export default Cart;
