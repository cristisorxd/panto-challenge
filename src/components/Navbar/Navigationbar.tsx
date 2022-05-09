import React, { useState } from "react";

import classes from "./Navigationbar.module.scss";
import Logo from "../Logo/Logo";
import Menu from "./Menu";
import LoginCart from "./LoginCart/LoginCart";

interface IProps {
  darkNavbar: boolean;
}

const Navigationbar = (props: IProps) => {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80 || props.darkNavbar == true) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        navbar
          ? `${classes.positioning} ${classes.active}`
          : classes.positioning
      }
    >
      <Logo isNavbar={true} />
      <div className={classes.menuIcon} onClick={handleClick}>
        <i className={`${clicked ? "fas fa-times" : "fas fa-bars"}`}></i>
      </div>
      <Menu clicked={clicked} />
      <LoginCart />
    </div>
  );
};

export default Navigationbar;
