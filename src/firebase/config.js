import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGRmNY7sUXPoq8Wpznl5ePd9FzU2S2dmY",
  authDomain: "book-list-with-firebase.firebaseapp.com",
  projectId: "book-list-with-firebase",
  storageBucket: "book-list-with-firebase.appspot.com",
  messagingSenderId: "400296526652",
  appId: "1:400296526652:web:03874bd521dda412ee9439"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);