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
               <div><h3>{name}</h3></div>
                <div className="infoBar">
              
                    <div>
                    <span><i className="far fa-compass"></i></span>
                        <small>
                        
                            {/* <p> */}
                            {location}
                            {/* </p> */}
                        </small>
                    </div>

                   <div>
                        {/* <span>  */}
                        <small>
                        rating: {rating}
                        </small>  
                    {/* </span> */}
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