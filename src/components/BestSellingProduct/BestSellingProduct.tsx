import React from "react";
import classes from "./BestSellingProduct.module.scss";
import strings from "../../theme/strings";

const BestSellingProduct = () => {
  return (
    <div className={classes.alignCenter}>
      <h1>{strings.bestSellingProduct}</h1>
    </div>
  );
};

export default BestSellingProduct;
