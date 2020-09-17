import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Login(props) {

    const dispatch = useDispatch()

    const {username, password} = useSelector(state => state.user)

    const handleChange = (e) => {
        const action = {
            type: "SET_FORM",
            payload: {[e.target.name]: e.target.value}
        }
        dispatch(action)
    }
    

    return(
        <div className ="login">
            <form className="login-form">
                <label>
                    <input 
                    type="text"
                    name="username" 
                    placeholder="username"
                    value={username}
                    onChange={handleChange}
                    />

                </label>

                <label>
                    <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={handleChange}
                    />
                </label>
               
                <button type="submit"> Login </button>
            
            </form>
        </div>
    )
}