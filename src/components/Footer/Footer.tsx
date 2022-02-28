import React from "react";
import Logo from "../Logo/Logo";
import classes from "./Footer.module.scss";
import FooterSections from "./FooterSections";
import strings from "../../theme/strings";

const Footer = () => {
  return (
    <div className={classes.background}>
      <div className={classes.sections}>
        <div>
          <Logo isNavbar={false} />
          <p className={classes.subtitleText}>
            {strings.footerExtraText.subtitle}
          </p>
        </div>
        <FooterSections />
      </div>
      <div className={classes.downFooter}>
        <p className={classes.copyrightText}>Copyright © 2021</p>
        <span className={classes.privacyPolicyText}>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
