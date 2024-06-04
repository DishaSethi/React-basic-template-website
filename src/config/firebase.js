// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import firebaseConfig from '../config';
const firebaseConfig = {
  apiKey: "AIzaSyAN6xKvv0UvprYe6zWZ3Nj3P6vXFXCAzm4",
  authDomain: "login-d83b7.firebaseapp.com",
  projectId: "login-d83b7",
  storageBucket: "login-d83b7.appspot.com",
  messagingSenderId: "792754386801",
  appId: "1:792754386801:web:f54455f715cd723af128d0",
  measurementId: "G-777NJ8JZVL"
};

// Initialize Firebase
const app=firebase.initializeApp(firebaseConfig);
export {app};