import React from "react";
import Expense from "./Expense";

export default function Expenses(props) {
  return (
    <div>
      <div className="expenses-header">
        <h3 className="expenses-header__title">Expense List</h3>

        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>

      <Expense expenseData={props.details} />
    </div>
  );
}
