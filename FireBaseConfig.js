import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDH6U_6_ch76NKCiinaqpE_nxZElOUmai8",
    authDomain: "ottassignment.firebaseapp.com",
    projectId: "ottassignment",
    storageBucket: "ottassignment.appspot.com",
    messagingSenderId: "102537204968",
    appId: "1:102537204968:web:3a52b8705b1edb4461655d",
    measurementId: "G-T1ZTV2XPMX"
  };
  
  
  export const FIREBASE_APP = initializeApp(firebaseConfig);
  export const FIREBASE_AUTH = getAuth(FIREBASE_APP);