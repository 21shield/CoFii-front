import React from 'react';
import Login from  './containers/Login'
import SignUp from './containers/SignUp'
import NavBar from './containers/NavBar'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>

      <NavBar/>
      
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        
        <Route exact path="/signup">
          <SignUp/>
        </Route>
       
      </Switch>
    </Router>
      
  );
}

export default App;
