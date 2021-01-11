import React from "react";
import HomePage from "pages/Home/index";
import { GlobalStyle } from "./GlobalStyle";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
