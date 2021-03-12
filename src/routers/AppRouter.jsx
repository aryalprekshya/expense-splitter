import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../component/Header";
import Dashboard from "../views/Dashboard.jsx";
import AddExpense from "../views/AddExpense.jsx";
import NotFoundPage from "../views/NotFoundPage.jsx";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/add-expense" component={AddExpense} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
