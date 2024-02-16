// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvOwG1oFZ8YrynkmZ6Rg97p6i6hF9BiUE",
  authDomain: "netflixgpt-f52d5.firebaseapp.com",
  projectId: "netflixgpt-f52d5",
  storageBucket: "netflixgpt-f52d5.appspot.com",
  messagingSenderId: "555818563229",
  appId: "1:555818563229:web:92a8bc20c5992c819f8674",
  measurementId: "G-V2ZES54BMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();