import React, {useState} from 'react';
import '../styles/coffeeShopCard.css'

export default function Comment (props){
    const [click, setClick] = useState(false)

    let comment = props.comment

    const handleClick = (e) => {
        setClick(!click)
        
    }
    
    return(
        <div className="comment">
            <strong>
                {comment.user_name }  
            </strong> 
            <span>
                { comment.content} 
            </span>
            <span>
                <div onClick={handleClick}>
                
                    {click ? "☕️" : <i className="far fa-heart"></i>}
                
                </div>
            </span>
            
           

        </div>
    )
}