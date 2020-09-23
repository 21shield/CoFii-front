import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../api/index'
import { newComment } from '../store/shopActions'

export default function NewComment(props) {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        content: "",
        coffee_shop_id: props.shop.external_id
    })
    
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        createComment(state)
        .then((data) => {
            dispatch(newComment(data.comment,props.shop.external_id ));
            setState({
                content: "",
                coffee_shop_id: props.shop.external_id
            });
        })
    }
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="content"
            placeholder="New Review"
            value={state.content}
            onChange={handleChange}
                />
            <button type="submit">add comment</button>
        </form>
    </div>
    )
}