import React from "react";

import images from "../../theme/images";
import classes from "./CarouselBtn.module.scss";

interface Props {
  right: boolean;
}

const CarouselBtn = ({ right }: Props) => {
  return (
    <span className={classes.wrapper}>
      <img
        className={right ? classes.rightArrowImg : classes.leftArrowImg}
        src={images.carouselArrow}
      />
    </span>
  );
};

export default CarouselBtn;
