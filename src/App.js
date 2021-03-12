import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import ExpenseContext from "./components/context/ExpenseContext.jsx";
import expenseReducer from "./components/reducers/ExpenseReducer";
import Header from "./components/component/Header.jsx";
import Dashboard from "./views/Dashboard.jsx";
import AddExpense from "./views/AddExpense.jsx";
import NotFoundPage from "./views/NotFoundPage.jsx";

function App() {
  const [expense, expenseDispatch] = useReducer(expenseReducer, {
    expense: [],
  });

  return (
    <div className="App">
      <BrowserRouter>
        <ExpenseContext.Provider value={[expense, expenseDispatch]}>
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/add-expense" component={AddExpense} />
            <Route path="/edit/:id" component={AddExpense} />
            <Route component={NotFoundPage} />
          </Switch>
        </ExpenseContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
