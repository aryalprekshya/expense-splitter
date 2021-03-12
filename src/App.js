import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Dashboard} exact={true} />
      </BrowserRouter>
    </div>
  );
}

export default App;
