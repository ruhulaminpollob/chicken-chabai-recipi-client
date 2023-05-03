// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu_wJ1zn1_HHWVJk0i_ILXeAvuHrZphOk",
  authDomain: "chicken-chabai-recipi.firebaseapp.com",
  projectId: "chicken-chabai-recipi",
  storageBucket: "chicken-chabai-recipi.appspot.com",
  messagingSenderId: "73504657919",
  appId: "1:73504657919:web:a4abcff561085242ee97ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app