// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnGIgdLtiXhVKCU1fXRiMLK0A96Nrcn84",
  authDomain: "house-marketplace-app-d567c.firebaseapp.com",
  projectId: "house-marketplace-app-d567c",
  storageBucket: "house-marketplace-app-d567c.appspot.com",
  messagingSenderId: "731754686844",
  appId: "1:731754686844:web:c598d9e58c36b921ec5cf9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()