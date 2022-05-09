import React from "react";

import classes from "./SearchIcon.module.scss";
import images from "../../../theme/images";

const SearchIcon = () => {
  return (
    <div className={classes.circle}>
      <img className={classes.img} src={images.searchIcon} alt="Search Icon" />
    </div>
  );
};

export default SearchIcon;
