import React from "react";
import { Button } from "reactstrap";
import { fs } from "../firebase/Firebase";

export default function Expense(props) {
  let expenseDataRef = null;

  const handleDelete = (Id) => {
    expenseDataRef = fs.collection("expenses");
    expenseDataRef
      .doc(`/${Id}`)
      .delete()
      .then(() => {
        console.log("Expense Deleted successfully");
      })
      .catch((error) => {
        console.log("Error deleting expense", error);
      });
  };

  return (
    <div className="expense">
      <div className="expense__text">
        <p>
          {props.expense.description}, {props.expense.paidAmount},{" "}
          {props.expense.paidBy}{" "}
        </p>
      </div>
      <div>
        <Button>Edit</Button>
        <Button
          onClick={() => {
            handleDelete(props.expense.docId);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
