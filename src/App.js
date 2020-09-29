import React, { useEffect } from 'react';
import Home from './containers/Home'
import Profile from './containers/Profile'
import LandingPage from './containers/LandingPage'
import { useSelector, useDispatch } from 'react-redux'
import { autoLogin} from './store/userActions'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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

       {user ? <Route exact path={`/${user.username}`}>
          <Profile/>
        </Route> : null}

        {/* <Route exact path="/login">
            {!!user ? <Redirect to='/'/> :  <Login/> }
        </Route> */}

        <Route exact path='/'>
          {!!user ?  <Home/> : <LandingPage/>}
        </Route>

      </Switch>

    </Router>
      
  );
}

export default App;
