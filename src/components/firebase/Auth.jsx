import { useContext, useState } from "react";
import { firebase, googleProvider } from "../firebase/Firebase";
import ExpenseContext from "../context/ExpenseContext";

//logOut from the website
export const Logout = () => {
  return firebase.auth().signOut();
};
