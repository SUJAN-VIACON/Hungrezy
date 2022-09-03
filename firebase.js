import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS0XYX6JMCL00Pp2TYcoiFJ9NNbH5vFec",
  authDomain: "foodapplication-55b8e.firebaseapp.com",
  projectId: "foodapplication-55b8e",
  storageBucket: "foodapplication-55b8e.appspot.com",
  messagingSenderId: "868028755225",
  appId: "1:868028755225:web:725e4df4fe910847c5e988",
  measurementId: "G-7VGQ6XJY6H",
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore();
const authentication = getAuth(app);

export {authentication, GoogleAuthProvider };
