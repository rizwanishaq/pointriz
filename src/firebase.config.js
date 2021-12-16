import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQsuOYwhRm6hYRHDFjppibSQ8boZpxlEs",
  authDomain: "selling-marketplace.firebaseapp.com",
  projectId: "selling-marketplace",
  storageBucket: "selling-marketplace.appspot.com",
  messagingSenderId: "410138766353",
  appId: "1:410138766353:web:4e68c2fb39ca45897b55b0",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db = getFirestore();
