import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCcG9rOzMUnr2VM8NfBAv94JhVYdWda978",
  authDomain: "kolorplus-77b49.firebaseapp.com",
  databaseURL: "https://kolorplus-77b49.firebaseio.com",
  projectId: "kolorplus-77b49",
  storageBucket: "kolorplus-77b49.appspot.com",
  messagingSenderId: "741779740937",
  appId: "1:741779740937:web:e63113ad4b5e824f305bd8",
  measurementId: "G-WY7M3DZRST",
});

firebase.analytics();
firebase.firestore();
firebase.storage();
firebase.auth();

export const authAnony = () => {
  return firebase.auth().signInAnonymously();
};

export default firebaseConfig;
