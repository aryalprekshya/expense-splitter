import React, { useContext, useState } from "react";
import { firebase, googleProvider } from "../components/firebase/Firebase";
import ExpenseContext from "../components/context/ExpenseContext";
import { history } from "../components/routers/AppRouter";

export default function Login(props) {
  const [expense, expenseDispatch] = useContext(ExpenseContext);

  const signInWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        // console.log(result);
        expenseDispatch({
          type: "SET_USER_INFO",
          payload: {
            user: {
              email: result.user.email,
              displayName: result.user.displayName,
              uid: result.user.uid,
            },
          },
        });
        props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log("Error signing with Google", error.message);
      });
  };

  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={signInWithGoogle}>Login</button>
    </div>
  );
}
