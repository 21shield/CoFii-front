import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import '../styles/profile.css'

export default function Profile(){
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    console.log(user)
    return(
        <div className="userProfile">
           <div className="userIcon" >
                <img src={user.avatar} alt={user} />
           </div>

           <div className="userInfo">
                {user.bio ? user.bio :<h1>ADD SOMETHING TO YOU BIO</h1>}
                <button> edit profile </button>
                
           </div>
        </div>
    )
}