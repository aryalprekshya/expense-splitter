import React, { useReducer } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import ExpenseContext from "../context/ExpenseContext";
import expenseReducer from "../reducers/ExpenseReducer";

import Header from "../component/Header";
import Dashboard from "../../views/Dashboard.jsx";
import AddExpense from "../../views/AddExpense.jsx";
import EditExpense from "../../views/EditExpense.jsx";
import NotFoundPage from "../../views/NotFoundPage.jsx";
import Login from "../../views/Login";

export const history = createBrowserHistory();

export default function AppRouter() {
  const [expense, expenseDispatch] = useReducer(expenseReducer, {
    expenses: [],
  });
  return (
    <Router history={history}>
      <ExpenseContext.Provider value={[expense, expenseDispatch]}>
        <Header />
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add-expense" component={AddExpense} />
          <Route path="/edit-expense/:id" component={EditExpense} />
          <Route component={NotFoundPage} />
        </Switch>
      </ExpenseContext.Provider>
    </Router>
  );
}
