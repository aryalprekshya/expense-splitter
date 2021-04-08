import React, { useState, useContext } from "react";
import ExpenseContext from "../components/context/ExpenseContext";

export default function AddSecondUser(props) {
  const [secondEmail, setSecondEmail] = useState(null);
  const [expense, expenseDispatch] = useContext(ExpenseContext);

  const handleAddUser = (e) => {
    e.preventDefault();
    expenseDispatch({
      type: "SET_SECOND_USER_EMAIL",
      payload: secondEmail,
    });
    props.history.push("/dashboard");
  };

  const handleSkip = (e) => {
    e.preventDefault();
    //alert("Skip button clicked");
    //are u sure you do not want to add a friend modal?
    setSecondEmail(null);
    props.history.push("/dashboard");
  };

  return (
    <div>
      <h1>Add another user</h1>
      <form>
        <label>email</label>
        <input
          type="text"
          name="email"
          value={secondEmail}
          onChange={(e) => {
            // console.log(e.target.value);
            setSecondEmail(e.target.value);
          }}
        />
        <button onClick={handleAddUser}>Add User</button>
        <p>or</p>
        <button onChange={handleSkip}>Skip</button>
      </form>
    </div>
  );
}
