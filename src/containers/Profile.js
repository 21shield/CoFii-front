import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

export default function Profile(){
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)

    return(
        <>
            PROFILE PAGE FOR : {user.username}
        </>
    )
}