import React ,{Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login'



const App = () => {
  return (
    <Fragment>
  <Router>
    
    <Switch>
              <Route exact path="/" component={LandingPage}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/login" component={Login}></Route>
            </Switch>
             </Router>
             </Fragment>
  
  )
}

export default App;