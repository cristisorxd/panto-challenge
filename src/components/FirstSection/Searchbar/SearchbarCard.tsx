import React from "react";
import classes from "./SearchbarCard.module.scss";

const SearchbarCard = () => {
  return (
    <div>
      <input
        className={classes.inputStyle}
        placeholder="Search furniture"
        type="text"
      />
    </div>
  );
};

export default SearchbarCard;
