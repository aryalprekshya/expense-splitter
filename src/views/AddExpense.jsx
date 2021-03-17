import React, { useContext, useState } from "react";
import ExpenseContext from "../components/context/ExpenseContext";
import { fs } from "../components/firebase/Firebase";

export default function AddExpense() {
  const [expense, expenseDispatch] = useContext(ExpenseContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [paidDate, setPaidDate] = useState(new Date());

  const handleAddExpense = (e) => {
    e.preventDefault();

    let dataToSend = {
      description: description,
      paidAmount: amount,
      paidBy: paidBy,
      paidDate: paidDate,
      createdAt: new Date(),
    };

    expenseDispatch({
      type: "ADD_EXPENSE",
      payload: { expense: dataToSend },
    });

    //adding expense data to firebase
    fs.collection("expenses")
      .add(dataToSend)
      .then(() => {
        console.log("Expense successfully added to firebase");
      })
      .catch((error) => {
        console.log("Error while adding data to firebase", error);
      });
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
