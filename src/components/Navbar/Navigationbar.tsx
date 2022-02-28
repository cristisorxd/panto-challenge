import React from "react";
import classes from "./Navigationbar.module.scss";
import Logo from "../Logo/Logo";
import Menu from "./Menu";
import LoginCart from "./LoginCart/LoginCart";

const Navigationbar = () => {
  return (
    <div className={classes.positioning}>
      <Logo isNavbar={true} />
      <Menu />
      <LoginCart />
    </div>
  );
};

export default Navigationbar;
