import React from "react";
import HomePage from "pages/Home/index";
import ClassPage from "pages/Class/index";
import LogInPage from "pages/LogIn/index";
import SignUpPage from "pages/SignUp/index";
import { createGlobalStyle } from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/class">
            <ClassPage />
          </Route>
          <Route path="/logIn">
            <LogInPage />
          </Route>
          <Route path="/signUp">
            <SignUpPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Roboto', sans-serif;
  }
`;
