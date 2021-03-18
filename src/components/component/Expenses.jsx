import React, { useState, useEffect } from "react";
import Expense from "./Expense";
import { fs } from "../firebase/Firebase";

export default function Expenses(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [expenseList, setExpenseList] = useState([]);

  let expenseDataRef = null;

  useEffect(() => {
    expenseDataRef = fs.collection("expenses");
    fetchExpense();
  }, []);

  const fetchExpense = () => {
    setIsLoading(true);
    let tempList = [];
    expenseDataRef
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let docId = doc.id;
          //console.log(docId);
          let list = { docId, ...doc.data() };
          tempList.push(list);
        });
        console.log(tempList);
        return tempList;
      })
      .then((tempList) => {
        setExpenseList(tempList);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error getting the documents", err);
      });
  };

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
      {expenseList.map((expense, i) => {
        return <Expense key={i} expense={expense} />;
      })}
    </div>
  );
}
