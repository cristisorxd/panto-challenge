import React from "react";

import classes from "./WhySection.module.scss";
import strings from "../../theme/strings";
import WhySectionText from "./WhySectionText";

const WhySection = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.headingText}>{strings.whySection.title}</h2>
      <WhySectionText />
    </div>
  );
};

export default WhySection;
