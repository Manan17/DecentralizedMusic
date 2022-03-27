import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDK5jCoszQ4bjrQ0qPIlTr1bSUd_9piQzQ",
  authDomain: "auth-development-a8e45.firebaseapp.com",
  projectId: "auth-development-a8e45",
  storageBucket: "auth-development-a8e45.appspot.com",
  messagingSenderId: "735120244590",
  appId: "1:735120244590:web:b8344d8f6402aafa3c4b7f",
  measurementId: "G-R323J13NQ8",
});

export const auth = app.auth();
export default app;
export const db = firebase.firestore();
