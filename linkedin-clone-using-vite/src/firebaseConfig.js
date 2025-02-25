// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv8DmqFxqnYz7vDIdHS_ch887NO_mRSuk",
  authDomain: "linked-in-clone-using-vite.firebaseapp.com",
  projectId: "linked-in-clone-using-vite",
  storageBucket: "linked-in-clone-using-vite.firebasestorage.app",
  messagingSenderId: "193981618561",
  appId: "1:193981618561:web:cb73ebf2574a8eb7aeb080",
  measurementId: "G-G5VCBFX4BW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const