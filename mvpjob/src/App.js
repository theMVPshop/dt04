import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import SignIn from "./Components/SignIn";
import Resume from "./Components/Resume";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignIn}></Route>
          <Route exact path="/resume" component={Resume}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
