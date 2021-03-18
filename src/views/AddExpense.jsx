import React, { useContext, useState } from "react";
import ExpenseContext from "../components/context/ExpenseContext";
import { fs } from "../components/firebase/Firebase";
import { FormGroup, FormText } from "reactstrap";

export default function AddExpense() {
  const [expense, expenseDispatch] = useContext(ExpenseContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [paidDate, setPaidDate] = useState(new Date());

  //For error handling
  const [error, setError] = useState({
    descriptionError: "",
    amountError: "",
    paidByError: "",
    paidDate: "",
  });

  const handleCheckErrors = (e) => {
    e.preventDefault();
    let tempError = {};
    let hasError = false;

    if (!description) {
      tempError = {
        ...tempError,
        descriptionError: "* Must enter description",
      };
      hasError = true;
    } else {
      tempError = { ...tempError, descriptionError: "" };
    }

    if (!amount) {
      tempError = {
        ...tempError,
        amountError: "* Must enter paid amount",
      };
      hasError = true;
    } else {
      tempError = { ...tempError, amountError: "" };
    }

    if (!paidBy) {
      tempError = {
        ...tempError,
        paidByError: "* Must enter person's name who paid the amount",
      };
      hasError = true;
    } else {
      tempError = { ...tempError, paidByError: "" };
    }

    if (!paidDate) {
      tempError = {
        ...tempError,
        paidDateError: "* Must enter amount paid date",
      };
      hasError = true;
    } else {
      tempError = { ...tempError, paidDateError: "" };
    }

    if (hasError) {
      setError({ ...error, ...tempError });
    } else {
      handleAddExpense();
    }
  };

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
            <FormGroup>
              <label>Description</label>
              <input
                type="text"
                onChange={(e) => {
                  setDescription(e.target.value);
                  setError({ ...error, descriptionError: "" });
                }}
              />
              <FormText>{error.descriptionError}</FormText>
            </FormGroup>
            <FormGroup>
              <label>Amount</label>
              <input
                type="number"
                min={1}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setError({ ...error, amountError: "" });
                }}
              />
              <FormText>{error.amountError}</FormText>
            </FormGroup>
            <FormGroup>
              <label>Paid By</label>
              <input
                type="text"
                onChange={(e) => {
                  setPaidBy(e.target.value);
                  setError({ ...error, paidByError: "" });
                }}
              />
              <FormText>{error.paidByError}</FormText>
            </FormGroup>
            <FormGroup>
              <label>Paid Date</label>
              <input
                type="date"
                onChange={(e) => {
                  setPaidDate(e.target.value);
                  setError({ ...error, paidDateError: "" });
                }}
              />
              <FormGroup>{error.paidDateError}</FormGroup>
            </FormGroup>

            <button onClick={handleCheckErrors}>Add Expense</button>
          </form>
        </div>
      </div>
    </>
  );
}
