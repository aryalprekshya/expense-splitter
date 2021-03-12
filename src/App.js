import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import Header from "./component/Header.jsx";
import Dashboard from "./views/Dashboard.jsx";
import AddExpense from "./views/AddExpense.jsx";
import NotFoundPage from "./views/NotFoundPage.jsx";

function App() {
  return (
    <div className="App">
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

export default App;
