// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn_SjxJU2LXKrw-xMlC0-CgGc0Eic_UXw",
  authDomain: "warehouse-6ebf3.firebaseapp.com",
  projectId: "warehouse-6ebf3",
  storageBucket: "warehouse-6ebf3.appspot.com",
  messagingSenderId: "425089171949",
  appId: "1:425089171949:web:8e48986e69413f51df27e4",
  measurementId: "G-157882H97Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;