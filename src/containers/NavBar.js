import React, { useState } from 'react';
import { Button, Tooltip, Avatar, Layout, Menu, Input, Form} from 'antd';
import { saveShops } from '../store/shopActions'
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/userActions'
import '../styles/navBar.css'
import { getCoffeeShops } from '../api/index'






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
        .then(data =>dispatch(saveShops(data)))
    }
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    console.log(search)
    return(
        <Layout.Header mode='horizontal'>
              <div >
                    <NavLink className="logo" to={"/"} >
                        Co Fi 
                    </NavLink>
                </div>
            


           <Form>
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
                <div>
                <Link to={`/${user.username}`} >
                    <Avatar src={user.avatar} size={60}/>
                </Link>
                </div>
                <Menu mode='horizontal'defaultSelectedKeys={['2']}>
              

                <Menu.Item>
                    <NavLink 
                        to="/" 
                        onClick={handleClick}
                    >
                        LogOut
                    </NavLink>
                </Menu.Item>

            </Menu>

           {/* </div>  */}
          
        </Layout.Header>
    )
}