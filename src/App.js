import React, { useEffect } from 'react';
import Login from  './containers/Login'
import SignUp from './containers/SignUp'
import Home from './containers/Home'
import Profile from './containers/Profile'
import { useSelector, useDispatch } from 'react-redux'
import { autoLogin} from './store/userActions'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import './App.css';


function App() {
  const user = useSelector((state) => state.user.currentUser)
  
  const dispatch = useDispatch()
    useEffect(() => {
      if(localStorage.token){
        dispatch(autoLogin())
      }
    },[dispatch])

  return (
    <Router>

      <Switch>

        <Route exact path="/signup">
          <SignUp/>
        </Route>

       {user ? <Route exact path={`/${user.username}`}>
          <Profile/>
        </Route> : null}

        <Route exact path="/login">
            {!!user ? <Redirect to='/'/> :  <Login/> }
        </Route>

        <Route exact path='/'>
          {!!user ?  <Home/> : <Redirect to="/login"/>}
        </Route>

      </Switch>
    </Router>
      
  );
}

export default App;
