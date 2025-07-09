// firebase.js (or firebaseConfig.js)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ REQUIRED!

const firebaseConfig = {
  apiKey: "AIzaSyBK1oAF7A-vTzBUJwIe4uz3R8zdmuc51yU",
  authDomain: "netflixgpt-b9879.firebaseapp.com",
  projectId: "netflixgpt-b9879",
  storageBucket: "netflixgpt-b9879.firebasestorage.app",
  messagingSenderId: "995485699418",
  appId: "1:995485699418:web:c4aba9f94dbe5c9c5f3763",
  measurementId: "G-4C5N81GCNE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ must pass app

export { auth };
