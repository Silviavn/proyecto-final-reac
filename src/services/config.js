import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyecto-final-2-1bae2.firebaseapp.com",
  projectId: "proyecto-final-2-1bae2",
  storageBucket: "proyecto-final-2-1bae2.appspot.com",
  messagingSenderId: "463727816093",
  appId: "1:463727816093:web:1c96f12411abe82f05d374"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);