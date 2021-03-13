import React, { useState } from "react";

export default function AddExpense() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [paidDate, setPaidDate] = useState(new Date());

  const handleAddExpense = () => {
    console.log("Add expense button is clicked");
  };

  return (
    <>
      <div className="container">
        <div>
          <form>
            <div>
              <label>Description</label>
              <input
                type="text"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Amount</label>
              <input
                type="text"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Paid By</label>
              <input
                type="text"
                onChange={(e) => {
                  setPaidBy(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Paid Date</label>
              <input
                type="date"
                onChange={(e) => {
                  setPaidDate(e.target.value);
                }}
              />
            </div>

            <button onClick={handleAddExpense}>Add Expense</button>
          </form>
        </div>
      </div>
    </>
  );
}
