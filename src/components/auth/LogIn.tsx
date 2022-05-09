import React, { SyntheticEvent, useCallback, useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

import { login } from "../../redux/actions/actions";
import classes from "./LogIn.module.scss";
import strings from "../../theme/strings";

interface IProps {
  logIn: (email: string, pass: string) => void;
  error: string;
  login: string;
  user: string;
}

const LogIn = (props: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      try {
        props.logIn(email, password);
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log(error);
      }
    },
    [email, password]
  );

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };

  if (props.user) return <Navigate to="/" />;
  else
    return (
      <div className={classes.loginBox}>
        {props.error && <Alert variant="danger">{props.error}</Alert>}
        <form onSubmit={handleSubmit}>
          <h5>{strings.auth.signIn}</h5>
          <label htmlFor={strings.auth.email}>Email</label>
          <input
            required
            type={strings.auth.email}
            id={strings.auth.email}
            onChange={emailHandler}
          />
          <label htmlFor={strings.auth.password}>Password</label>
          <input
            required
            type={strings.auth.password}
            id={strings.auth.password}
            onChange={passwordHandler}
          />
          <button>{strings.auth.signIn}</button>
        </form>
      </div>
    );
};

const mapStateToProps = (state: any) => {
  console.log(state.users);
  const { error, login, user } = state.users;
  return { error, login, user };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logIn: (email: string, password: string) =>
      dispatch(login(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
