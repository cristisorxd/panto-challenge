import React from "react";
import classes from "./FirstSection.module.scss";
import Searchbar from "./Searchbar/Searchbar";
import strings from "../../theme/strings";

const FirstSection = () => {
  return (
    <div className={classes.firstSection}>
      <div className={classes.sectionContainer}>
        <h1 className={classes.title}>{strings.firstSection.title}</h1>
        <h6 className={classes.subtitle}>{strings.firstSection.subtitle}</h6>
        <Searchbar />
      </div>
    </div>
  );
};

export default FirstSection;
