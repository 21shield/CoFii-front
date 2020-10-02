import React from 'react';
// import { getFavorites, updateFaveList } from '../store/shopActions'
// import { NavLink, Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import NavBar from './NavBar'
import UserInfoCard from './UserInfoCard'
import UsersFavorites from '../components/UsersFavorites.js'


export default function Profile(){
    // const dispatch = useDispatch()
    const {favorites} = useSelector(state => state.user.currentUser)
    console.log(favorites)
    const renderFavorites = () => {
       
        return favorites.map((favObj) => (
            
            <UsersFavorites key={favObj.id} shop={favObj.coffee_shop}/>
        ))
    }
    return(
        < >
            <NavBar/>
           <div className= "profilePage">

                <UserInfoCard/>
            <div className="userFaves">
                {renderFavorites()}
            </div>
          </div>
        </>
    )
}