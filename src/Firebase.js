import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBzE9yAfjiSjcePBuxstfCp3EO8Pg982X0",
//   authDomain: "netflix-clone-f7e95.firebaseapp.com",
//   projectId: "netflix-clone-f7e95",
//   storageBucket: "netflix-clone-f7e95.appspot.com",
//   messagingSenderId: "86045365791",
//   appId: "1:86045365791:web:122b1004fa8f97c3b3e72a"
// };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
