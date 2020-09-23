import React from 'react'
import Comment from './Comment'

export default function CommentListing (props){
   
    const shop = props.shop
    let renderComments = () => {
       return shop.comments.map(
            (comment) => <Comment key={comment.id} comment={comment}/>
      )
    } 

    return (
    <div className="csComments">
      {renderComments()}
    </div>
    )
}