import React from "react";
import { connect } from "react-redux";

import images from "../../../../theme/images";
import classes from "./Cart.module.scss";

interface IProps {
  cartItems: number;
}

const Cart = (props: IProps) => {
  return (
    <button className={classes.cartButton}>
      <img src={images.cartIcon} alt="Cart icon" />
      <div className={classes.cartCounter}>{props.cartItems}</div>
    </button>
  );
};

const mapStateToProps = (state: any) => {
  const { cartItems } = state.cart;
  return { cartItems };
};

export default connect(mapStateToProps)(Cart);
