import React from "react";
import images from "../../../../theme/images";
import classes from "./Login.module.scss";

const Login = () => {
  return (
    <button className={classes.loginBtn}>
      <img src={images.loginIcon} alt="Login icon" />
    </button>
  );
};

export default Login;
