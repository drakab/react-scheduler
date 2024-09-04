import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcgnjRc3faIZlq-_AoNu-eVyOf1Y38A98",
  authDomain: "react-scheduler-base.firebaseapp.com",
  projectId: "react-scheduler-base",
  storageBucket: "react-scheduler-base.appspot.com",
  messagingSenderId: "853166815089",
  appId: "1:853166815089:web:64b77264665e4cddb2a8d0",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "data");

export default colRef;
