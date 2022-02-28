import React from "react";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import classes from "./LoginCart.module.scss";

const LoginCart = () => {
  return (
    <div className={classes.display}>
      <Login />
      <Cart />
    </div>
  );
};

export default LoginCart;
