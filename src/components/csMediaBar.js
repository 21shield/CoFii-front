import React, {useState}  from 'react';
import '../styles/coffeeShopCard.css'
import { Descriptions, Badge } from 'antd';

export default function CsMediaBar(props) {
    // console.log("from mediaBar", props)
    // this needs on click events

    const [click, setClick] = useState(false)

    let comment = props.comment

    const handleClick = (e) => {
        setClick(!click)
    }
    console.log("from the media", props)
    return(
        <Descriptions 
        className="mediaBar"
        title="Shop Info"
        >
            <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
            <button>
                <span>
                 <i className="far fa-comment"></i>
                </span>
            </button>

            <button>
                <i className="fas fa-share-alt"></i>
            </button>
        </Descriptions>
    )
}