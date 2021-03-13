import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_container">
            <div>
              <h1 className="header__title"> Expense Splitter</h1>
              <h2 className="header__subtitle">
                Designed to save your time and money.
              </h2>
            </div>
            <div className="header_add-expense">
              <NavLink
                to="/add-expense"
                activeClassName="is-active"
                className="header_add-expense__text"
              >
                Add Expense
              </NavLink>
            </div>
          </div>
        </div>

        {/* <NavLink to="/" activeClassName="is-active" >
          Expense Splitter
        </NavLink> */}
      </div>
    </>
  );
}
