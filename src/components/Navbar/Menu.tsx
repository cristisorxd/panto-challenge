import React from "react";

import classes from "./Menu.module.scss";
import images from "../../theme/images";
import strings from "../../theme/strings";
interface Props {
  clicked: boolean;
}

const Menu = ({ clicked }: Props) => {
  return (
    <ul
      className={clicked ? `${classes.menu} ${classes.active}` : classes.menu}
    >
      <li>
        <div className={classes.dropdown}>
          <button className={classes.dropbtn}>
            {strings.navbar.furniture}
          </button>
          <img src={images.dropdownIcon} alt="Dropdown" />
          <div className={classes.dropdownContent}>
            <a href="/">{strings.navbar.chairs}</a>
            <a href="/">{strings.navbar.beds}</a>
            <a href="/">{strings.navbar.lamps}</a>
            <a href="/">{strings.navbar.sofas}</a>
          </div>
        </div>
      </li>
      <li>
        <a href="/">{strings.navbar.shop}</a>
      </li>
      <li>
        <a href="/">{strings.navbar.about}</a>
      </li>
      <li>
        <a href="/">{strings.navbar.contact}</a>
      </li>
    </ul>
  );
};

export default Menu;
