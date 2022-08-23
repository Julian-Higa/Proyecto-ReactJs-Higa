// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ2xHYEB64XGnwTZ-7SRd466aszD-duzc",
  authDomain: "eloboost-julian-higa.firebaseapp.com",
  projectId: "eloboost-julian-higa",
  storageBucket: "eloboost-julian-higa.appspot.com",
  messagingSenderId: "884308324305",
  appId: "1:884308324305:web:e76bbe1289d7a8484bbaf0",
  measurementId: "G-1T10Q5XHW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export default db