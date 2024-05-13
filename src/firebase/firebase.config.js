// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBItWCr7y8cbfzj99P91M93vy3Yv7JdDqo",
  authDomain: "supershop-16c93.firebaseapp.com",
  projectId: "supershop-16c93",
  storageBucket: "supershop-16c93.appspot.com",
  messagingSenderId: "494004264578",
  appId: "1:494004264578:web:31f5c8e9acb875519f9e9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getauth(app);
export default app;