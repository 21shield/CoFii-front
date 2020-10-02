import React from 'react';
import { Empty } from 'antd';
import Comments from './Comments'

export default function CommentListing ({location, comments}){
    let renderComments = () => {
      if(comments.length >= 1){
        return comments.map(
          (comment) => <Comments key={comment.id} comment={comment}/>
        )
      }else{
        return (<Empty description={"No Comments yet! Add a New Comment"} />)
      }
      
    } 

    return (
    <div className="csComments">
      {renderComments()}
    </div>
    )
}