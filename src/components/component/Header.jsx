import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Logout } from "../firebase/Auth";
import ExpenseContext from "../context/ExpenseContext";

export default function Header() {
  const [expense, expenseDispatch] = useContext(ExpenseContext);
  console.log(expense);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_container">
            {/* if logged in redirect to dashboard if not logged in redirects to
            login page */}
            {expense.user.uid ? (
              <NavLink to="/dashboard">
                <h1 className="header__title"> Expense Splitter</h1>
              </NavLink>
            ) : (
              <NavLink to="/">
                <h1 className="header__title"> Expense Splitter</h1>
              </NavLink>
            )}
            {/* <h1 className="header__title"> Expense Splitter</h1> */}
            <div className="header_add-expense">
              <button onClick={Logout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
