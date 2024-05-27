import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyByHVYBd7x7weL5w6e5ufiaD9kT8b0IlkQ",
  authDomain: "memorycard-8b89f.firebaseapp.com",
  projectId: "memorycard-8b89f",
  storageBucket: "memorycard-8b89f.appspot.com",
  messagingSenderId: "997806355151",
  appId: "1:997806355151:web:492d5b5b7c32b14b4b3dba",
  measurementId: "G-EDY15GS5LD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };