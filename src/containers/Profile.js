import React from 'react';
// import { NavLink, Link } from "react-router-dom";
// import { useSelector } from 'react-redux'
import NavBar from './NavBar'
import UserInfoCard from './UserInfoCard'
import UsersFavorites from '../components/UsersFavorites.js'

export default function Profile(){
    // const dispatch = useDispatch()
    // const user = useSelector(state => state.user.currentUser)
    // console.log(object)
    return(
        <>
            <NavBar/>
           
            <UserInfoCard/>
          
            <UsersFavorites/>
        </>
    )
}