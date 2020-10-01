import React, { useState } from 'react';
import { Avatar, Layout, Menu, Input, Form} from 'antd';
import { saveShops } from '../store/shopActions'
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/userActions'
import '../styles/navBar.css'
import { getCoffeeShops } from '../api/index'
import { updateLocation  } from '../store/locationActions'




export default function NavBar(params) {
    const { Search } = Input;
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const [search, setSearch] = useState("")
    
    const handleClick = (e) => {
        dispatch(logout()) 
    }
    const handleSubmit = (e) => {
        getCoffeeShops(search)
        .then(data => {
            dispatch(saveShops(data))
            let shop = data[3]
            
           dispatch(updateLocation([Number(shop.latitude), Number(shop.longitude)]))
        }
        )
    }
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    console.log(search)
    return(
        <Layout.Header mode='horizontal'>
                    <NavLink className="logo" to={"/"} >
                        Co Fi 
                    </NavLink>

           <Form className="searchForm">
               <Form.Item>
               <Search
               type="search" 
               placeholder="coffee shops near..."
               name="search"
               value={search}
               onChange={handleChange}
               onSearch={handleSubmit}
               />
               </Form.Item>
           </Form>

           {/* <div className="profileinfo"> */}
              
                <Menu mode='horizontal'>
                <Menu.Item>
                <Link to={`/${user.username}`} >
                    <Avatar src={user.avatar} size={40}/>  
                </Link>
                </Menu.Item>

                <Menu.Item>
                    <NavLink 
                        to="/" 
                        onClick={handleClick}
                    >
                        Sign Out
                    </NavLink>
                </Menu.Item>

            </Menu>

           {/* </div>  */}
          
        </Layout.Header>
    )
}