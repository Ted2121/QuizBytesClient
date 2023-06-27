import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "quizbytes-a8c62.firebaseapp.com",
  projectId: "quizbytes-a8c62",
  storageBucket: "quizbytes-a8c62.appspot.com",
  messagingSenderId: "798351625740",
  appId: "1:798351625740:web:bcab411ee2226da3aba829",
  measurementId: "G-N8EN90QH4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
