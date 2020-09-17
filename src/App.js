import React, { useEffect }from 'react';
import Login from  './containers/Login'
import SignUp from './containers/SignUp'
import NavBar from './containers/NavBar'
import { useDispatch } from 'react-redux'
import { autoLogin} from './store/userActions'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import './App.css';

function App() {
const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.token){
      dispatch(autoLogin())
    }
  },[])

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
