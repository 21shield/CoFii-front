import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar(params) {
    return(
        <div>
            <h1>NAVI</h1>
            <NavLink to="/login">
                LOGIN
            </NavLink>
            <br/>
            <NavLink to="/signup">
                SIGNUP
            </NavLink>
        </div>
    )
}