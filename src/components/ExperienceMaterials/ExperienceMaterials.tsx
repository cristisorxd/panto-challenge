import React from "react";
import { Link } from "react-router-dom";

import classes from "./ExperienceMaterials.module.scss";
import images from "../../theme/images";

interface Props {
  mainPhoto?: string;
  photo1?: string;
  photo2?: string;
  photo3?: string;
  title: string;
  subtitle: string;
  contentText: string;
  moreInfo: string;
  experience: boolean;
}

const ExperienceMaterials = ({
  mainPhoto,
  photo1,
  photo2,
  photo3,
  title,
  subtitle,
  contentText,
  moreInfo,
  experience,
}: Props) => {
  return (
    <div
      className={
        experience ? classes.alignContent : classes.alignContentReverse
      }
    >
      <div>
        {experience ? (
          <>
            <img className={classes.img1} src={mainPhoto} />
            <img className={classes.blurredImg} src={mainPhoto} />
          </>
        ) : (
          <div className={classes.materials}>
            <span className={classes.secondaryPhotos}>
              <img src={photo1} />
              <img src={photo2} />
            </span>
            <img src={photo3} />
          </div>
        )}
      </div>
      <div
        className={
          experience
            ? classes.textSection
            : `${classes.textSection} ${classes.alignSelf}`
        }
      >
        <h1 className={classes.title}>{title}</h1>
        <h2 className={classes.subtitle}>{subtitle}</h2>
        <p className={classes.contentText}>{contentText}</p>
        <Link to="/empty" className={classes.moreInfoText}>
          {moreInfo}
        </Link>
        <img src={images.arrowIcon} />
      </div>
    </div>
  );
};

export default ExperienceMaterials;
