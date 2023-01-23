// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3uXllLAHEABn6nGEMQho0PhNYlwujuyo",
  authDomain: "fir-demo-8c2b0.firebaseapp.com",
  projectId: "fir-demo-8c2b0",
  storageBucket: "fir-demo-8c2b0.appspot.com",
  messagingSenderId: "69088638318",
  appId: "1:69088638318:web:9b1f39d468cfb0135ffd7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
