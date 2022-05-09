import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyCcs4y9qLv0kn5Xl6oFbdduof97bM5mtyY",
  authDomain: "panto-web-34f0e.firebaseapp.com",
  projectId: "panto-web-34f0e",
  storageBucket: "panto-web-34f0e.appspot.com",
  messagingSenderId: "388432226144",
  appId: "1:388432226144:web:8c5736518926a4866ce005",
};

export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const createUser = createUserWithEmailAndPassword;
export const loginUser = signInWithEmailAndPassword;
export const logoutUser = signOut;
