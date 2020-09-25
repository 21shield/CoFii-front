import React, { useEffect } from 'react';
// import { getFavorites, updateFaveList } from '../store/shopActions'
// import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import NavBar from './NavBar'
import UserInfoCard from './UserInfoCard'
import UsersFavorites from '../components/UsersFavorites.js'


export default function Profile(){
    const dispatch = useDispatch()
    const {favorites} = useSelector(state => state.user.currentUser)
    

    const renderFavorites = () => {
       
        return favorites.map((favObj) => (
            <UsersFavorites key={favObj.id} shop={favObj.coffee_shop}/>
        )
        )
    }
    
    return(
        <div className= "profilePage">
            <NavBar/>
           
            <UserInfoCard/>
          <div className="userFaves">
            {renderFavorites()}
          </div>
           
        </div>
    )
}