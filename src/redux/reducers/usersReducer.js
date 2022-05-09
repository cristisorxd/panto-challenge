import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  RESET_PASS_SUCCESS,
} from "../actions/actions";

const initialState = {
  name: "",
  user: "",
  email: "",
  login: "",
  error: "",
  isSignedUp: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return { ...state };
    case SIGN_UP_FAILED:
      return { ...state, error: action.error.message };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.uid,
        name: action.payload.name,
        email: action.payload.email,
      };
    case LOGIN_FAILED:
      return { ...state, error: action.error.message };
    case LOGOUT_SUCCESS:
      return initialState;
    case RESET_PASS_SUCCESS:
      return { ...state, email: action.payload.email };

    default:
      return state;
  }
};

export default usersReducer;
