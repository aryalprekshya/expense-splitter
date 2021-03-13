import React from "react";
import signInWithGoogle from "../components/firebase/Auth";

export default function Login() {
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={signInWithGoogle}>Login</button>
    </div>
  );
}
