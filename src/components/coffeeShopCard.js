import React,{useState}from 'react';
// import { useSelector} from 'react-redux';
import '../styles/coffeeShopCard.css'
import CsMediaBar from './csMediaBar'
import NewComment from './NewComment'
import CommentListing from './CommentListing'

export default function CoffeeShopCard(props) {

    const {name, image_url, location, rating} = props.shop

    return(
        <div className="csCard">
            <div className="cardHeader">
               <h2>{name}</h2>
            </div>
          
            <img className="cImg" src={image_url} alt={name} />
           
            <div className="infoBar">
                <span>
                <i className="far fa-compass"></i>{location}, 
                </span>
                <span> 
                    rating: {rating}
                </span>
                   
            </div>
            
            <CsMediaBar shop={props.shop}/>

            <CommentListing shop={props.shop}/>

            <NewComment shop={props.shop}/>
            
        </div>
    )
}