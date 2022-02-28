import React from "react";
import classes from "./Searchbar.module.scss";
import SearchbarCard from "./SearchbarCard";
import SearchIcon from "./SearchIcon";

const Searchbar = () => {
  return (
    <div className={classes.wrapper}>
      <SearchbarCard />
      <SearchIcon />
    </div>
  );
};

export default Searchbar;
