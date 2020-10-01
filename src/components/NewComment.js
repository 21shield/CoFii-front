import React, { useState } from 'react';
import { Input, Form } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createComment } from '../api/index'
import { newComment } from '../store/shopActions'

export default function NewComment({external_id}) {

    const dispatch = useDispatch()
    const [state, setState] = useState({
        content: "",
        coffee_shop_id: external_id
    })
    
    const handleChange = (e) => {
        e.persist();
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createComment(state)
        .then((data) => {
            dispatch(newComment(data.comment, external_id));
            setState({
                content: "",
                coffee_shop_id: external_id
            });
        })
    }
    return(
    <>
        <Form >
            <Form.Item>
                <Input 
                type="text"
                name="content"
                placeholder="New Comment"
                value={state.content}
                onChange={handleChange}
                suffix={<SendOutlined type="submit" onClick={handleSubmit}/> 
                }
               />
               {/* <Form.Item>
                    <Button  type="submit" onClick={handleSubmit}> 
                        <SendOutlined/>
                    </Button>
               </Form.Item> */}
            </Form.Item>
           
            {/* <Button type="submit">add comment</Button> */}
        </Form>
    </>
    )
}