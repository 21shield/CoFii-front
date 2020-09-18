import React, { useEffect } from 'react';
import Login from  './containers/Login'
import SignUp from './containers/SignUp'
import Home from './containers/Home'
// import Profile from './containers/Profile'
import { useSelector, useDispatch } from 'react-redux'
import { autoLogin} from './store/userActions'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import './App.css';

console.log("checking the key", process.env.REACT_APP_MAPBOX_API_KEY)

function App() {
  const user = useSelector((state) => state.user.currentUser)
  
  console.log("this line 13", user)
  const dispatch = useDispatch()
    useEffect(() => {
      if(localStorage.token){
        dispatch(autoLogin())
      }
    },[])

  return (
    <Router>

      <Switch>

        <Route exact path="/signup">
          <SignUp/>
        </Route>

        {/* <Route exact path={`/${user.username}`}>
          <Profile/>
        </Route> */}

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
