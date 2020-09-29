import React from 'react';
import { Button, Tooltip, Avatar, Layout, Menu} from 'antd';

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
        <Layout.Header mode='horizontal'>
              <div >
                    <NavLink className="logo" to={"/"} >
                        Co Fi 
                    </NavLink>
                </div>
            {/* <div className='logo'><p>CoFi</p></div> */}
            

        {/* <div className="navbar">   */}

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