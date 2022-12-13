// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFj_ee-ZVpD3n_cJTJqDE8H4CdaaAfNWY",
  authDomain: "doctors-portal-mine.firebaseapp.com",
  projectId: "doctors-portal-mine",
  storageBucket: "doctors-portal-mine.appspot.com",
  messagingSenderId: "641703261103",
  appId: "1:641703261103:web:a5c7f2f31bbb42341b755a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app