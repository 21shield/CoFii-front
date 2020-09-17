import React, { useState } from 'react';

export default function Login(props) {
    // const {}


    return(
        <div className ="login">
            <form className="login-form">
                <label for="username">
                    <input type="text" placeholder="username"/>

                </label>

                <label for="password">
                    <input type="password" placeholder="password"/>
                </label>
               
                <button type="submit"> Login </button>
            
            </form>
        </div>
    )
}