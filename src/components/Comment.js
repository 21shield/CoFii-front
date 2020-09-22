import React from 'react';

export default function Comment (props){
    
    let comment = props.comment.content
    
    return(
        <div>
          {comment}
        </div>
    )
}