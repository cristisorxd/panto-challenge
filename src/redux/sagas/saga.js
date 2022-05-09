import { call, put, takeLatest } from "redux-saga/effects";

import {
  REQUEST_API_DATA_SAGA,
  LOGIN_SAGA,
  loginSuccess,
  loginFailed,
  signupSuccess,
  signupFailed,
  REGISTER_SAGA,
  LOGOUT_SAGA,
  logOutSuccess,
  logOutFailed,
  resetPass,
  RESET_PASS_SAGA,
  receiveApiData,
} from "../actions/actions";
import { auth, createUser, db } from "../firebase/firebase";
// import getAllProductsApi from "../../utils/getAllProductsApi";

// function* getApiData(action) {
//   try {
//     const data = yield call(getAllProductsApi);
//     yield put(receiveApiData(data));
//   } catch (e) {}
// }

function* signUp(action) {
  try {
    const result = yield createUser(
      auth,
      action.payload.email,
      action.payload.pass
    ).then((userCredential) => {
      const user = userCredential.user;
      db.collection("users")
        .doc(user.uid)
        .set({ name: action.payload.name, pass: action.payload.pass });
    });

    yield put(signupSuccess("Success"));
  } catch (error) {
    console.log(error);
    yield put(signupFailed(error));
  }
}

const getUserDetails = async (uid) => {
  return await db.collection("users").doc(uid).get();
};

function* logIn(action) {
  try {
    const result = yield auth.signInWithEmailAndPassword(
      action.payload.email,
      action.payload.pass
    );
    const payload = yield call(getUserDetails, result.user.uid);

    yield put(
      loginSuccess({
        uid: result.user.uid,
        name: payload.data().name,
        email: action.payload.email,
      })
    );
  } catch (error) {
    yield put(loginFailed(error));
    console.log(error);
  }
}

function* logOut() {
  try {
    const result = yield auth.signOut();
    yield put(logOutSuccess());
  } catch (error) {
    yield put(logOutFailed(error));
    console.log(error);
  }
}

// export function* getApiSaga() {
//   yield takeLatest(REQUEST_API_DATA_SAGA, getApiData);
// }
export function* watchRegister() {
  yield takeLatest(REGISTER_SAGA, signUp);
}

export function* watchLogin() {
  yield takeLatest(LOGIN_SAGA, logIn);
}

export function* watchLogout() {
  yield takeLatest(LOGOUT_SAGA, logOut);
}
export function* watchResetPass() {
  yield takeLatest(RESET_PASS_SAGA, resetPass);
}
