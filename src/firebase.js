// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHbzOjTnwRv_mXHNkPBsTTir3vtq0k2sE",
  authDomain: "webcofelanding.firebaseapp.com",
  projectId: "webcofelanding",
  storageBucket: "webcofelanding.firebasestorage.app",
  messagingSenderId: "843490267093",
  appId: "1:843490267093:web:d01ebe4f653bbb2654f75c",
  measurementId: "G-1HBTMTHY3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);