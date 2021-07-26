import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import "./main.scss";
import { Header } from "./components/common";
import Login from "./pages/login/login";
import { PAGE_HOME, PAGE_LOGIN } from "./constants/router";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={PAGE_HOME} component={Home} />
        <Route exact path={PAGE_LOGIN} component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
