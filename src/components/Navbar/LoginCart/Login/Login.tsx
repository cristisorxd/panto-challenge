import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import images from "../../../../theme/images";
import classes from "./Login.module.scss";
import { logOut } from "../../../../redux/actions/actions";

interface Props {
  logOut: () => void;
  user: string;
}

const Login = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const showLogin = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button className={classes.loginBtn} onClick={showLogin}>
        <img src={images.loginIcon} alt="Login icon" />
      </button>
      {showModal ? (
        <div className={classes.dropdown}>
          <ul>
            {!props.user || props.user === "" ? (
              <>
                <li>
                  <NavLink className={classes.link} to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className={classes.link} to="/signup">
                    Sign Up
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink className={classes.link} to="/login">
                    Username
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => {
                      props.logOut();
                    }}
                  >
                    Sign Out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state.users);
  const { email, user } = state.users;
  return { email, user };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
