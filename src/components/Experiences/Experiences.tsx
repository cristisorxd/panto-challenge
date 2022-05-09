import React from "react";

import ExperienceMaterials from "../ExperienceMaterials/ExperienceMaterials";
import strings from "../../theme/strings";
import images from "../../theme/images";
import classes from "./Experiences.module.scss";

const Experiences = () => {
  return (
    <div className={classes.container}>
      <ExperienceMaterials
        experience={true}
        mainPhoto={images.experiencesImage}
        title={strings.experiences.heading}
        subtitle={strings.experiences.title}
        contentText={strings.experiences.content}
        moreInfo={strings.experiences.moreInfo}
      />
    </div>
  );
};

export default Experiences;
