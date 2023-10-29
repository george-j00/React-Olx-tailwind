// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV8nnEGAvtaQQnt9c_bVqMyeGt9bXfJnM",
  authDomain: "olxlite-e832f.firebaseapp.com",
  projectId: "olxlite-e832f",
  storageBucket: "olxlite-e832f.appspot.com",
  messagingSenderId: "760509075306",
  appId: "1:760509075306:web:3a2cd94dd527b3a45d9f13",
  measurementId: "G-36VSYR3XY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app)
export const storage = getStorage(app);
