import React from 'react';
import { useSelector, useDispatch} from 'react-redux'


export default function SignUp(props) {
    
    const dispatch = useDispatch()

    const {username, email, password, password_confirmation} = useSelector(state => state.user)

    const handleChange = (e) => {
        const action = {
            type: "SET_FORM",
            payload: {[e.target.name]: e.target.value}
        }
        dispatch(action)
    }
    
    return(
        <div className="signup">
            <form className="SignU-form">
                <label htmlFor="username">
                    <input type="text" 
                    name="username"
                    placeholder="Username"
                    value={username} 
                    onChange={handleChange}
                    />

                </label>

                <label htmlFor="email">

                    <input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    placeholder="Email" 
                    value={email} 
                    />

                </label>

                <label htmlFor="password">
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={handleChange}
                    />
                </label>

                <label htmlFor="password_confirmation">
                    <input 
                    type="password" 
                    name="password_confirmation" placeholder="Password Confirmation"
                    value={password_confirmation} 
                    onChange={handleChange}
                    />
                </label>
               
                <button type="submit"> SignUp </button>
            
            </form>
        </div>
    )
}