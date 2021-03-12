import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>
        <h1> Expense Splitter</h1>
        {/* <NavLink to="/" activeClassName="is-active" >
          Expense Splitter
        </NavLink> */}
        <NavLink to="/" activeClassName="is-active" exact={true}>
          Dashboard
        </NavLink>
        <NavLink to="/add-expense" activeClassName="is-active">
          Add Expense
        </NavLink>
      </div>
    </>
  );
}
