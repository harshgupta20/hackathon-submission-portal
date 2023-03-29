// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCEPtkoPpqVfsjiOcG6EXbW9xKx1SuxzA",
  authDomain: "ai-planet-hackathon-portal.firebaseapp.com",
  projectId: "ai-planet-hackathon-portal",
  storageBucket: "ai-planet-hackathon-portal.appspot.com",
  messagingSenderId: "221499343330",
  appId: "1:221499343330:web:0bd1e7723a26803bdb39bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();