import React, { SyntheticEvent, useCallback, useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

import { signUp } from "../../redux/actions/actions";
import classes from "./SignUp.module.scss";
import strings from "../../theme/strings";

interface IProps {
  signUp: (
    name: string,
    pass: string,
    passConfirm: string,
    email: string
  ) => void;
  error: string;
  login: string;
  user: string;
}

const SignUp = (props: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      if (password !== passConfirm) {
        return setError("Passwords do not match");
      }

      try {
        setError("");
        setLoading(true);
        props.signUp(name, email, password, passConfirm);
      } catch {
        setError("Failed to create an account");
      }
      console.log("submitted");
      setLoading(false);
      setEmail("");
    },
    [name, email, password, passConfirm]
  );

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const confirmPasswordHandler = (e: any) => {
    setPassConfirm(e.target.value);
  };

  const nameHandler = (e: any) => {
    setName(e.target.value);
  };

  if (props.user && !props.error) return <Navigate to="/login" />;
  return (
    <div className={classes.loginBox}>
      {props.error ? <Alert variant="danger">{props.error}</Alert> : null}
      <form onSubmit={handleSubmit}>
        <h5>{strings.auth.signUp}</h5>
        <label htmlFor={strings.auth.email}>Email</label>
        <input
          type={strings.auth.email}
          id={strings.auth.email}
          onChange={emailHandler}
        />

        <label htmlFor={strings.auth.password}>Password</label>
        <input
          type={strings.auth.password}
          id={strings.auth.password}
          onChange={passwordHandler}
        />

        <label htmlFor={strings.auth.passwordConfirm}>Confirm Password</label>
        <input
          required
          type={strings.auth.password}
          id={strings.auth.passwordConfirm}
          onChange={confirmPasswordHandler}
        />

        <label htmlFor={strings.auth.name}>Name</label>
        <input type="text" id={strings.auth.name} onChange={nameHandler} />

        <button>{strings.auth.signUp}</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { error, login, user } = state.users;
  return { error, login, user };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signUp: (name: string, email: string, pass: string, passConfirm: string) =>
      dispatch(signUp(name, email, pass, passConfirm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
