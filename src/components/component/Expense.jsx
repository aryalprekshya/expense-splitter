import React from "react";

export default function Expense(props) {
  console.log(props);
  console.log(props.expense.description);
  return (
    <div className="expense">
      <p className="expense__text">
        {props.expense.description}, {props.expense.paidAmount},{" "}
        {props.expense.paidBy}{" "}
      </p>
    </div>
  );
}
