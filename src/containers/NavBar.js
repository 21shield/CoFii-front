import React from 'react';
import { Button, Tooltip, Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/userActions'
import '../styles/navBar.css'

export default function NavBar(params) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    // console.log(user)
   
    const handleClick = (e) => {
        dispatch(logout()) 
    }
    
    return(
        <div className="navbar">  
            <NavLink to={"/"} >
                <h1> Co Fi </h1> 
            </NavLink>  

           <form>
               <input 
               type="search" 
               placeholder="coffee shops near"
               name="search"
               />
                    <Tooltip title="Find Shops Near">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
           </form>

           <div className="profileinfo">
               <div>
               <NavLink to="/" onClick={handleClick}>
                    logOut
                </NavLink>  
               </div>
               
                <div>
                <Link to={`/${user.username}`} >
                    <Avatar src={user.avatar} size={60}/>
                        {/* <img  className="imgicon" src={user.avatar} alt="user icon" /> */}
                </Link>
                </div>
                
                
               
        
           </div>
          
        </div>
    )
}