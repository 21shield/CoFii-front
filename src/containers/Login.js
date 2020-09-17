import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../store/userActions'

export default function Login(props) {

    const dispatch = useDispatch()

    const {username, password} = useSelector(state => state.user.form)

    const handleChange = (e) => {
        const action = {
            type: "SET_FORM",
            payload: {[e.target.name]: e.target.value}
        }
        dispatch(action)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser())
    }
    

    return(
        <div className ="login">
            <form className="login-form" onSubmit={handleSubmit}>
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
               
                <button type="submit" > Login </button>
            
            </form>
        </div>
    )
}