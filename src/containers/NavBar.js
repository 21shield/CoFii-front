import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/userActions'
import '../styles/navBar.css'

export default function NavBar(params) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    console.log(user)
    
    const handleClick = (e) => {
        dispatch(logout()) 
    }
    
    return(
        <div className="navbar">  
                <h1> Co - Fi </h1> 
           <form>
               <input 
               type="search" 
               placeholder="search"
               name="search"
               />
           </form>
           <div className="profileinfo">
                <NavLink to="/" onClick={handleClick}>
                    logOut
                </NavLink>  
                <Link to={`/${user.username}`} >
                    <img className="imgicon" src={user.avatar} alt="user icon" />
                </Link>
               
        
           </div>
          
        </div>
    )
}