import React, { useState } from 'react';
import {  EnvironmentOutlined } from '@ant-design/icons';
import { Button, Avatar, Layout, Menu, Input, Form, Tooltip} from 'antd';
import { saveShops } from '../store/shopActions'
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/userActions'
import '../styles/navBar.css'
import { getCoffeeShops } from '../api/index'
import { userLocation } from '../store/userActions'
import { updateLocation  } from '../store/locationActions'




export default function NavBar(params) {
    // const history = useHistory()
    const { Search } = Input;
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const [search, setSearch] = useState("")
    
    const handleClick = (e) => {
        dispatch(logout()) 
    }
    const handleSubmit = (e) => {
        // history.push("/")
        getCoffeeShops(search)
        .then(data => {
            dispatch(saveShops(data))
            let shop = data[3]
            setSearch("")
           dispatch(updateLocation([Number(shop.latitude), Number(shop.longitude)]))
        })
        

    }
    
    const handleReset = () => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const {latitude,
                    longitude} = pos.coords
                  dispatch(userLocation([latitude,longitude]))
                  
                }, 
            (err) => {
                alert(err)
            } 
        )
        
    }
    
    const handleChange = (e) => {
        setSearch(e.target.value)   
    }
    return(
        <Layout.Header mode='horizontal'>
            <ul>
                <NavLink className="logo" to={"/"} >
                        Co Fii
                </NavLink>
            </ul>
                    
            <ul>
                <Form className="searchForm" layout={'inline'}>
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

                    <Form.Item>
                    <Tooltip 
                    title="Reset" 
                    placement="rightTop"
                    color={"#edd8abf1"}
                    >
                        <Button  onClick={handleReset}ghost shape="circle">
                            <EnvironmentOutlined />
                        </Button>
                        </Tooltip>
                    </Form.Item>
                </Form>
                      
            </ul>
          
               
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

        </Layout.Header>
    )
}