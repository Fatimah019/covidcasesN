import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ReduxSetup/Store";
import CovidCases from "./Components/CovidCases";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/" component={CovidCases} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
