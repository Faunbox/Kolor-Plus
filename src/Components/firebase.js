import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {    
    apiKey: "AIzaSyCcG9rOzMUnr2VM8NfBAv94JhVYdWda978",
    authDomain: "kolorplus-77b49.firebaseapp.com",
    databaseURL: "https://kolorplus-77b49.firebaseio.com",
    projectId: "kolorplus-77b49",
    storageBucket: "kolorplus-77b49.appspot.com",
    messagingSenderId: "741779740937",
    appId: "1:741779740937:web:e63113ad4b5e824f305bd8",
    measurementId: "G-WY7M3DZRST"
}; 

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase
