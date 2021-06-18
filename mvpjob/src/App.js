import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Resume from "./Components/Resume";
import Navigation from "./Components/Navigation";
import "./App.css";
import PopUp from "./Components/PopUp";



const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/landingpage" component={LandingPage}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>      
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/resume" component={Resume}></Route>
          <Route exact path="/popup" component={PopUp}></Route>

        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
