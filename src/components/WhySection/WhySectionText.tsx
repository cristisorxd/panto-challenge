import React from "react";
import classes from "./WhySectionText.module.scss";
import { Link } from "react-router-dom";
import strings from "../../theme/strings";
import images from "../../theme/images";

const WhySectionText = () => {
  return (
    <div className={classes.container}>
      {strings.whySection.text.map((text) => {
        return (
          <div key={text.id.toString()}>
            <h1 className={classes.titleText}>{text.title}</h1>
            <p className={classes.contentText}>{text.content}</p>
            <Link to="/empty" className={classes.moreInfoText}>
              {text.moreInfo}
            </Link>
            <img
              src={images.arrowIcon}
              className={classes.arrowImage}
              alt="Arrow Icon"
            />
          </div>
        );
      })}
    </div>
  );
};

export default WhySectionText;
