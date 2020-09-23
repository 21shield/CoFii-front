import React from 'react';
// import { useSelector} from 'react-redux';
import '../styles/coffeeShopCard.css'
import CsMediaBar from './csMediaBar'
import NewComment from './NewComment'
import CommentListing from './CommentListing'
import FavButton from './FavButton'

export default function CoffeeShopCard(props) {

    const {name, image_url, location, rating} = props.shop

    return(
        <div className="csCard">
            <div className="cardHeader">
                <FavButton shopId={props.shop.external_id}/>
               <div><h3>{name}</h3></div>
                <div className="infoBar">
                    <div>
                    <span><i className="far fa-compass"></i></span>
                        <small>
                            {location}
                        </small>
                    </div>

                   <div>   
                        <small>
                        rating: {rating}
                        </small>  
                   </div>
                  
                    
                </div>
            </div>
            <hr/>
            
            <img className="cImg" src={image_url} alt={name} />
          
            
            <CsMediaBar shop={props.shop}/>

            <CommentListing shop={props.shop}/>

            <NewComment shop={props.shop}/>
            
        </div>
    )
}