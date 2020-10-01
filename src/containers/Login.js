import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined  } from '@ant-design/icons';
import { Button, Input, Space,Form } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
// import { Link} from 'react-router-dom';
import { loginUser } from '../store/userActions'
import '../styles/userForm.css'





export default function Login(props) {

    const dispatch = useDispatch()

    const {username, password} = useSelector(state => state.user.form)
    // const user = useSelector(state => state.user.form)

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
        // <div className ="login">
           
            <Space layout="vertical">
            <Form 
            className="form" 
            // onFinishFailed={onFinishFailed}
            // onSubmit={handleSubmit}
            // form={Form.useForm()}
            // initialValues={{ remember: true }}
            // layout="horizontal"
            >
                <Form.Item
                  rules={[{ required: true, message: 'Enter Username!' }]}
                  name="username"
                  
                  >
                {/* <label> */}
                    <Input 
                    prefix={<UserOutlined />}
                    name="username"
                    value={username}
                    onChange={handleChange}
                    // type="text"
                    placeholder="Username"
                    
                    />

                {/* </label> */}
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
                
                
                <Form.Item>
                    <Button htmlType="submit" onClick={handleSubmit} > LogIn </Button>
                </Form.Item>

               <Form.Item>
                    <a className="login-form-forgot" href="">Forgot password</a>
                    or
                    <a onClick={props.click}> Sign Up </a>
               </Form.Item>
                        
            </Form>
            
            </Space> 
            
        // {/* // </div> */}
    )
}