import React, { useState } from "react";

import classes from "./Carousel.module.scss";
import strings from "../../theme/strings";
import CarouselCart from "./CarouselCart";
import CarouselBtn from "./CarouselBtn";

interface IProps {
  testimonialsPage: boolean;
  items?: any;
  productIndex: number;
  setProductIndex: (prevState: number) => void;
  itemsToShow: number;
  itemsLength: number;
}

const Carousel = (props: IProps) => {
  const goLeft = () => {
    {
      return props.productIndex >= 1
        ? props.setProductIndex(props.productIndex - 1)
        : null;
    }
  };

  const goRight = () => {
    {
      return props.productIndex < props.itemsLength - props.itemsToShow
        ? props.setProductIndex(props.productIndex + 1)
        : null;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftBtn} onClick={goLeft}>
        <CarouselBtn right={false} />
      </div>
      {props.testimonialsPage
        ? strings.testimonials.reviews.map((content, index) => {
            if (index >= props.productIndex && index < props.productIndex + 3)
              return (
                <div key={index} className={classes.carouselCart}>
                  <CarouselCart
                    bgPhoto={content.bgImage}
                    icon={content.icon}
                    name={content.name}
                    otherName={content.otherName}
                    reviewText={content.reviewText}
                    numberOfStars={content.numberOfStars}
                  />
                </div>
              );
          })
        : props.items}
      <div className={classes.rightBtn} onClick={goRight}>
        <CarouselBtn right={true} />
      </div>
    </div>
  );
};

export default Carousel;
