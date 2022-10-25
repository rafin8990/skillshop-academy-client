// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS3s-iW8DENOvUSxYQMOhuroDCP3W8VSA",
  authDomain: "skillshop-academy.firebaseapp.com",
  projectId: "skillshop-academy",
  storageBucket: "skillshop-academy.appspot.com",
  messagingSenderId: "308699121523",
  appId: "1:308699121523:web:995e5afac534b7fbea6706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;