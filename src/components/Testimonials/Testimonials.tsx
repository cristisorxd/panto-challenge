import React, { useState } from "react";

import Carousel from "./Carousel";
import strings from "../../theme/strings";
import classes from "./Testimonials.module.scss";

const Testimonials = () => {
  const [cartIndex, setCartIndex] = useState<number>(0);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{strings.testimonials.title}</h1>
      <h6 className={classes.subtitle}>{strings.testimonials.subtitle}</h6>
      <Carousel
        itemsLength={strings.testimonials.reviews.length}
        itemsToShow={3}
        testimonialsPage={true}
        productIndex={cartIndex}
        setProductIndex={setCartIndex}
      />
    </div>
  );
};

export default Testimonials;
