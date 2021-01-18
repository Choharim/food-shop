import React from "react";
import HomePage from "pages/Home/index";
import FoodClassPage from "pages/FoodClass/index";
import LogInPage from "pages/LogIn/index";
import SignUpPage from "pages/SignUp/index";
import ShopPage from "pages/Shop/index";
import OrderDetailsPage from "pages/OrderDetails/index";
import OrderPage from "pages/Order/index";
import { createGlobalStyle } from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ContextProvider from "components/ContextProvider/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/class" exact>
              <FoodClassPage />
            </Route>
            <Route path="/logIn" exact>
              <LogInPage />
            </Route>
            <Route path="/signUp" exact>
              <SignUpPage />
            </Route>
            <Route path="/shop" exact>
              <ShopPage />
            </Route>
            <Route path="/order" exact>
              <OrderPage />
            </Route>
            <Route path="/orderDetails" exact>
              <OrderDetailsPage />
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Noto Sans KR', sans-serif;
  }
`;
