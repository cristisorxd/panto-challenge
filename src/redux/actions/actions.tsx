export const REQUEST_API_DATA_SAGA = "REQUEST_API_DATA_SAGA";
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";
export const REGISTER_SAGA = "REGISTER_SAGA";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SAGA = "LOGIN_SAGA";
export const LOGOUT_SAGA = "LOGOUT_SAGA";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const RESET_PASS_SAGA = "RESET_PASS_SAGA";
export const RESET_PASS_SUCCESS = "RESET_PASS_SUCCESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export const addToCart = () => ({
  type: ADD_TO_CART,
});
export const deleteFromCart = () => ({
  type: DELETE_FROM_CART,
});
export const requestApiData = () => ({ type: REQUEST_API_DATA_SAGA });

export const receiveApiData = (data: any) => ({
  type: REQUEST_API_DATA,
  data,
});

export function signUp(
  name: string,
  email: string,
  pass: string,
  passConfirm: string
) {
  return {
    type: REGISTER_SAGA,
    payload: { name, email, pass, passConfirm },
  };
}
export function signupSuccess(email: string, pass: string) {
  return {
    type: SIGN_UP_SUCCESS,
    result: { email, pass },
  };
}

export function signupFailed(error: any) {
  return {
    type: SIGN_UP_FAILED,
    error,
  };
}

export function login(email: string, pass: string) {
  return {
    type: LOGIN_SAGA,
    payload: { email, pass },
  };
}

export function loginSuccess(payload: any) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailed(error: any) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}

export function logOut() {
  return {
    type: LOGOUT_SAGA,
  };
}

export function logOutSuccess(state: any) {
  return {
    type: LOGOUT_SUCCESS,
    payload: null,
  };
}

export function logOutFailed(state: any) {
  return {
    type: LOGOUT_FAILED,
    payload: null,
  };
}

export function resetPass(email: string) {
  return {
    type: RESET_PASS_SAGA,
    payload: { email },
  };
}
export function forgotPassSuccess(email: string) {
  return {
    type: RESET_PASS_SUCCESS,
    payload: { email },
  };
}