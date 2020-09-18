import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/userActions'
import '../styles/navBar.css'

export default function NavBar(params) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)

    const handleClick = (e) => {
        dispatch(logout()) 
    }
    
    return(
        <div className="navbar">  
                <h1> Co - Fii </h1> 
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
                    <img className="imgicon" src="https://i.pinimg.com/originals/b5/71/88/b571880718af4f8605807f167f497a9d.jpg" alt="Coffee Cup" />
                </Link>
               
        
           </div>
          
        </div>
    )
}