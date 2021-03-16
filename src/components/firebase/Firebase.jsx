import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAKyfnPzoBMtGjzImXjUc3kyI7q2YegFz8",
  authDomain: "expense-splitter-e07b8.firebaseapp.com",
  projectId: "expense-splitter-e07b8",
  storageBucket: "expense-splitter-e07b8.appspot.com",
  messagingSenderId: "38198203851",
  appId: "1:38198203851:web:74bf71db5199913d65d24e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
const store = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, store, googleProvider, firebase };
