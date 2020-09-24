import React, {useState}  from 'react';
import '../styles/coffeeShopCard.css'


export default function CsMediaBar(props) {
    // console.log("from mediaBar", props)
    // this needs on click events

    const [click, setClick] = useState(false)

    let comment = props.comment

    const handleClick = (e) => {
        setClick(!click)
        // send request to back end to favorites to create a connecttion to the user and the coffee shops
        
    }
    return(
        <div className="mediaBar">
            <button onClick={handleClick}>
                { click ? <i className="fas fa-heart"></i> :
                <i className="far fa-heart"></i> }
            </button>

            <button>
                <span>
                 <i className="far fa-comment"></i>
                </span>
            </button>

            <button>
                <i className="fas fa-share-alt"></i>
            </button>
        </div>
    )
}