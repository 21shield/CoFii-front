import React, {createElement, useState} from 'react';
import '../styles/coffeeShopCard.css'
import { Comment, Avatar} from 'antd';
import moment from 'moment';
import { LikeTwoTone, DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

export default function Comments (props){
    // const [click, setClick] = useState(false)
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    let comment = props.comment

    const like = () => {
        setLikes(1);
        // setDislikes(0);
        setAction('liked');
      };
    
      const dislike = () => {
        // setLikes();
        setDislikes(1);
        setAction('disliked');
      };

      
  const actions = [
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>,
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>,
    
  ];


    return(
        <Comment 
        actions={actions}
        author={comment.user_name}
        content={comment.content}
        datetime={ <span>{moment(comment.created_at).fromNow()}</span>}
        avatar={
        <Avatar>{comment.user_name[0].toUpperCase()}</Avatar>}
        >
    
        </Comment>
    )
}