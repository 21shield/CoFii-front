import React from 'react';
import { Button, Input, Form } from 'antd';
import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { signUpUser } from '../store/userActions'
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import '../styles/userForm.css'







export default function SignUp(props) {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const {username, email, password, password_confirmation} = useSelector(state => state.user.form)

    const handleChange = (e) => {
        const action = {
            type: "SET_FORM",
            payload: {[e.target.name]: e.target.value}
        }
        dispatch(action)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       dispatch(signUpUser())
       history.push("/")
    }
    
    return(
        <div className="signup">
            <Form 
            className="form" 
            onSubmit={handleSubmit}>
            <Form.Item
                rules={[{ required: true, message: 'Enter Username!' }]}
                name="username"   
                  >
            
                    <Input 
                    type="text" 
                    name="username"
                    placeholder="Username"
                    value={username} 
                    onChange={handleChange}
                    prefix={<UserOutlined />}
                    />

            </Form.Item>

                <Form.Item htmlFor="email">

                    <Input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    placeholder="Email" 
                    value={email} 
                    />

                </Form.Item>

                <Form.Item
                 name="password"
                 rules={[{ required: true, message: 'Enter password!' }]}
                 >
                <Input.Password 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>

                <Form.Item
                 name="password_confirmation"
                 rules={[{ required: true, message: 'Enter matching password!' }]}
                 >
                    <Input.Password 
                    type="password" 
                    name="password_confirmation" placeholder="Password Confirmation"
                    value={password_confirmation} 
                    onChange={handleChange}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
               </Form.Item>
               
                <Button type="submit" onClick={handleSubmit} > SignUp </Button>   
            </Form>
            <br/>
                 Have an account?
    
                <Button onClick={props.click}> Sign In </Button>
        </div>
    )
}