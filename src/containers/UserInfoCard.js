import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import '../styles/profile.css'

export default function Profile(){
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    return(
        <div className="userProfile">
           <div className="userIcon" >
                <img src={user.avatar} alt="" />
           </div>

           <div className="userInfo">
                About Me: {user.bio}

           </div>
        </div>
    )
}