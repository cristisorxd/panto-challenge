import React from "react";

import classes from "./CarouselCart.module.scss";
import Star from "./Star";

interface Props {
  bgPhoto: string;
  icon: string;
  name: string;
  otherName: string;
  reviewText: string;
  numberOfStars: number;
}

const CarouselCart = ({
  bgPhoto,
  icon,
  name,
  otherName,
  reviewText,
  numberOfStars,
}: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgPhoto})` }}
      className={classes.cart}
    >
      <div className={`${classes.reviewSection}`}>
        <div className={classes.circle}>
          <img src={icon} />
          <img className={classes.imgBlur} src={icon} />
        </div>
        <h1>{name}</h1>
        <h6>{otherName}</h6>
        <p>{reviewText}</p>
        <Star count={numberOfStars} />
      </div>
    </div>
  );
};

export default CarouselCart;
