import React from "react";
import Header from "../components/component/Header";

export default function AddExpense() {
  const handleAddExpense = () => {
    console.log("Add expense button is clicked");
  };

  return (
    <>
      <div className="container">
        <div>
          <form onClick={handleAddExpense}>
            <div>
              <label>Description</label>
              <input type="text" />
            </div>
            <div>
              <label>Amount</label>
              <input type="text" />
            </div>
            <div>
              <label>Paid By</label>
              <input type="text" />
            </div>
            <div>
              <label>Paid Date</label>
              <input type="date" />
            </div>

            <button>Add Expense</button>
          </form>
        </div>
      </div>
    </>
  );
}
