import React, { useState } from 'react'
import '../styles/favButton.css'
import { useSelector, useDispatch } from 'react-redux';
import { createFavorite, removeFavorite } from '../api/index'
import { addFave } from '../store/userActions'

export default function FavButton(props) {
    const [click, setClick] = useState(false)
    const {favorites} = useSelector(state => state.user.currentUser)
    console.log("from the faveButton", favorites)
// fetch and check for the fav show the heart if its been favorited
    
    const dispatch = useDispatch()  
    const handleClick = (e)=> {
        e.preventDefault()
        
        setClick(!click)
        handleFavorite(e)
    }

    const handleFavorite = (e) => {
        if(!click){
           createFavorite(props.shopId)
           .then((newFaveObj) => {
            //want to update the state and send it 

               dispatch(addFave(newFaveObj.fav))
           })
        }else{
          removeFavorite(props.shopId)
          .then((data) => {
              console.log("this  was removed",data)
          }
          )
        }
    }

    return(
        <div className={click ? "heart is_animating": "heart" }
        onClick={handleClick}>
            
        </div>
    )
}