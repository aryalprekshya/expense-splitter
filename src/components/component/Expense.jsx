import React from "react";

export default function Expense(props) {
  return (
    <div className="expense">
      <p className="expense__text">
        {/* {console.log(props)}
        {props.expenseData.paidBy}. {props.expenseData.description},{" "}
        {props.expenseData.amount}, {props.expenseData.date} */}
      </p>
    </div>
  );
}
