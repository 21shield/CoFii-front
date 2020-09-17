import React, { useState } from 'react';

export default function SignUp(props) {

    return(
        <div className="signup">
            <form className="SignU-form">
                <label for="username">
                    <input type="text" placeholder="username" />

                </label>
                <label for="email">
                    <input type="email" placeholder="email"/>
                </label>

                <label for="password">
                    <input type="password" placeholder="password" />
                </label>

                <label for="password_confirmation">
                    <input type="password_confirmation" placeholder="password_confirmation"/>
                </label>
               
                <button type="submit"> SignUp </button>
            
            </form>
        </div>
    )
}