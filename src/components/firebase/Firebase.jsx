import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import "firebase/functions";

var firebaseConfig = {
  apiKey: "AIzaSyB8mWlMx185PGbSBbNistNeyHu3NTI82RI",
  authDomain: "expense-splitter-a1ec2.firebaseapp.com",
  projectId: "expense-splitter-a1ec2",
  storageBucket: "expense-splitter-a1ec2.appspot.com",
  messagingSenderId: "78776307761",
  appId: "1:78776307761:web:bf0eddc3e6cfdf0a860510",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const fs = firebase.firestore();
const auth = firebase.auth();
const store = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, fs, store, googleProvider, firebase };
