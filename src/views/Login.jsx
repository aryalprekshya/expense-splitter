import React, { useContext, useState } from "react";
import { firebase, fs, googleProvider } from "../components/firebase/Firebase";
import ExpenseContext from "../components/context/ExpenseContext";

export default function Login(props) {
  const [expense, expenseDispatch] = useContext(ExpenseContext);
  const [uid, setUid] = useState();

  const addUserToFirebase = (data) => {
    let uId = data.uid;
    firebase
      .database()
      .ref("users_data/")
      .orderByChild("uid")
      .equalTo(uId)
      .once("value")
      .then(function (snapshot) {
        if (snapshot.exists) {
          console.log("uId exists");
        } else {
          fs.collection("users_data")
            .add(data)
            .then(() => {
              console.log("User data successfully added");
              props.history.push("/dashboard");
            })
            .catch((err) => {
              console.log("Error while adding data to db", err);
            });
        }
      });
  };

  const signInWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        setUid(result.user.uid);
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

        let dataToSend = {
          email: result.user.email,
          displayName: result.user.displayName,
          uid: result.user.uid,
        };
        addUserToFirebase(dataToSend);
        props.history.push("/add-second-user");
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
