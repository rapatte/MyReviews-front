import React, { useState, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import "./main.scss";
import { Header } from "./components/common";
import Login from "./pages/login/login";
import { PAGE_HOME, PAGE_LOGIN, PAGE_REVIEWS } from "./constants/router";
import Reviews from "./pages/reviews/reviews";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={PAGE_HOME} component={Home} />
        <Route exact path={PAGE_LOGIN} component={Login} />
        <PrivateRoute exact path={PAGE_REVIEWS} component={Reviews} />
      </Switch>
    </Router>
  );
}

export default App;
