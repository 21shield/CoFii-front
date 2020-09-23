import React, {useState} from 'react'
import '../styles/favButton.css'
import { createFavorite, removeFavorite } from '../api/index'

export default function FavButton(props) {
    const [click, setClick] = useState(false)

    const handleClick = (e)=> {
        e.preventDefault()
        
        setClick(!click)
        handleFavorite(e)
    }

    const handleFavorite = (data) => {
        if(!click){
           createFavorite(props.shopId)
           .then((data) => {
               console.log(data)
           })
        }else{
          removeFavorite(props.shopId)
          .then((data) => {
              console.log(data)
          }
          )
        }
    }

    console.log('THIS WAS CLICKED', click)

    return(
        <div className={click ? "heart is_animating": "heart" }
        onClick={handleClick}>
            
        </div>
    )
}