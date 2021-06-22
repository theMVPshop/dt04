import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./Components/About";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ResumeCreation from "./Components/ResumeCreation";
import ResumeView from "./Components/ResumeView";
import Navigation from "./Components/Navigation";
import "./App.css";
import PopUp from "./Components/PopUp";
import cookie from "cookie";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Router>
        <Switch>
          <ProtectedRoute path="/resumecreation" component={ResumeCreation} />
          <ProtectedRoute path="/resumeview" component={ResumeView} />
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signUp" component={SignUp}></Route>
          <Route exact path="/popup" component={PopUp}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
