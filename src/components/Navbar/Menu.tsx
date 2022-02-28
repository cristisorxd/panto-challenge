import React from "react";
import classes from "./Menu.module.scss";
import images from "../../theme/images";

const Menu = () => {
  return (
    <ul className={classes.menu}>
      <li>
        <div className={classes.dropdown}>
          <button className={classes.dropbtn}>Furniture</button>
          <img src={images.dropdownIcon} alt="Dropdown" />
          <div className={classes.dropdownContent}>
            <a href="/">Chairs</a>
            <a href="/">Beds</a>
            <a href="/">Sofas</a>
            <a href="/">Lamps</a>
          </div>
        </div>
      </li>
      <li>
        <a href="/">Shop</a>
      </li>
      <li>
        <a href="/">About Us</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
};

export default Menu;
