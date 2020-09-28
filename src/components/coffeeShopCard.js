import React, { useEffect } from 'react';
// import { useSelector} from 'react-redux';
import '../styles/coffeeShopCard.css'
import CsMediaBar from './csMediaBar'
import NewComment from './NewComment'
import CommentListing from './CommentListing'
import FavButton from './FavButton'
import AOS from 'aos';
import 'aos/dist/aos.css'; 



export default function CoffeeShopCard(props) {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[]
    )

    const {name, image_url, location, rating} = props.shop

    return(
        <div className="csCard" data-aos="fade-up"
        data-aos-duration="3000">
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