// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
 const firebaseConfig = {
    apiKey: "AIzaSyDK5jCoszQ4bjrQ0qPIlTr1bSUd_9piQzQ",
    authDomain: "auth-development-a8e45.firebaseapp.com",
    projectId: "auth-development-a8e45",
    storageBucket: "auth-development-a8e45.appspot.com",
    messagingSenderId: "735120244590",
    appId: "1:735120244590:web:b8344d8f6402aafa3c4b7f",
    measurementId: "G-R323J13NQ8"
  };

const app = initializeApp(firebaseConfig);
export default getFirestore();