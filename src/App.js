import React from "react";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter, { history } from "./components/routers/AppRouter";
// import firebase from "./components/firebase/Firebase";
import firebase from "firebase/app";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("uid: ", user.uid);
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    history.push("/");
  }
});

export default App;
