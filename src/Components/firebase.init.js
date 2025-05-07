// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN5uYbVj8RdSwiX8xlPHX1wbNXikMT_lQ",
  authDomain: "mission-9-870a0.firebaseapp.com",
  projectId: "mission-9-870a0",
  storageBucket: "mission-9-870a0.firebasestorage.app",
  messagingSenderId: "391239227130",
  appId: "1:391239227130:web:cac7b2680158ae7a731b43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
