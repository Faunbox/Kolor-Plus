import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import flamelink from "flamelink/app";
import "flamelink/cf/content";
import "flamelink/cf/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcG9rOzMUnr2VM8NfBAv94JhVYdWda978",
  authDomain: "kolorplus-77b49.firebaseapp.com",
  databaseURL: "https://kolorplus-77b49.firebaseio.com",
  projectId: "kolorplus-77b49",
  storageBucket: "kolorplus-77b49.appspot.com",
  messagingSenderId: "741779740937",
  appId: "1:741779740937:web:e63113ad4b5e824f305bd8",
  measurementId: "G-WY7M3DZRST",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.analytics();
firebase.firestore();
firebase.storage();
firebase.auth();

export const authAnony = () => {
  return firebase.auth().signInAnonymously();
};

export const app = flamelink({
  firebaseApp, // required
  dbType: "cf", // can be either 'rtdb' or 'cf' for Realtime DB or Cloud Firestore
  env: "production", // optional, default shown
  locale: "en-US", // optional, default shown
  precache: true, // optional, default shown. Currently it only precaches "schemas" for better performance
});

export default firebase;
