import React from 'react'
// import { useSelector } from 'react-redux'
import '../styles/profile.css'
export default function UsersFavorites (props){
    // const user = useSelector(state => state)
        // console.log("from the usersFva", props)
    const {name, image_url, location, rating} = props.shop
    return (
        <div className = "faveShop">
           <h1>{name}</h1> 
            <img src={image_url} alt={name} />
            <p>{location}</p>
            <span>{rating}</span>
        </div>
    )
}
