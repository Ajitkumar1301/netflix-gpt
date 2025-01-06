// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9dq5urrQAeSir_XANwP9DE9gZBp7akds",
  authDomain: "netflixgpt-959bc.firebaseapp.com",
  projectId: "netflixgpt-959bc",
  storageBucket: "netflixgpt-959bc.firebasestorage.app",
  messagingSenderId: "748404087425",
  appId: "1:748404087425:web:724c0584fe177ab1004b80",
  measurementId: "G-Y7MCQQ6SPZ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
