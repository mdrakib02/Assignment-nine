// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIiBOzuC8wiJghFQvaUyVcUwS8atotwZY",
  authDomain: "greennest-a623a.firebaseapp.com",
  projectId: "greennest-a623a",
  storageBucket: "greennest-a623a.firebasestorage.app",
  messagingSenderId: "854908788188",
  appId: "1:854908788188:web:9f84da835b6feb635d4319",
  measurementId: "G-GJKGBGET1Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
