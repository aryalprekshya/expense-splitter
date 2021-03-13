import React, { useState } from "react";
import Month from "../components/component/Month";
import ExpenseDetails from "../components/component/Expenses";

export default function Dashboard() {
  // const [paidBy, setPaidBy] = useState("");
  // const [description, setDescription] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState(new Date());

  const [state, setState] = useState({
    data: {
      paidBy: "Prekshya",
      description: "Grocery- No Frills",
      amount: "12.34",
      date: "",
    },
  });

  return (
    <>
      <div className="container">
        <Month />
        <div className="expenses">
          <ExpenseDetails details={state.data} />
        </div>
      </div>
    </>
  );
}
