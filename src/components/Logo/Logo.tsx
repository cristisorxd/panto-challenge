import React from "react";
import strings from "../../theme/strings";
import classes from "./Logo.module.scss";

interface Props {
  isNavbar: boolean;
}
const Logo = ({ isNavbar }: Props) => {
  const textColor = isNavbar ? classes.whiteColor : classes.blackColor;
  return (
    <>
      <a href="/" className={`${classes.logoText} ${textColor}`}>
        {strings.logoTitle}
      </a>
    </>
  );
};

export default Logo;
