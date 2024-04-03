// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1RzNf8qaVY_jNBZtZXVpDAVkg3269-xM",
  authDomain: "moha-milon-10688.firebaseapp.com",
  projectId: "moha-milon-10688",
  storageBucket: "moha-milon-10688.appspot.com",
  messagingSenderId: "861885708751",
  appId: "1:861885708751:web:cd8017081fec06324f7aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;