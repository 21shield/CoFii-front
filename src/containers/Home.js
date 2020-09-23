import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './NavBar'
import CoffeeShops from './CoffeeShops'
import { userLocation } from '../store/userActions'
import { getCoffeeShops } from '../api/index'
import { updateLocation  } from '../store/locationActions'
import '../styles/homePage.css'
import {saveShops} from '../store/shopActions'

export default function Home () {

    const dispatch = useDispatch()
    // const state = useSelector(state => state)
    const location = useSelector(state => state.user.userLocation)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const {latitude,
                    longitude} = pos.coords
                    console.log("this has to be set for the user", pos.coords)
                  dispatch(userLocation([latitude,longitude])) 
                  dispatch(updateLocation([latitude,longitude]))
            },
            (err) => {
                console.log(err)
            } 
        )
    },[dispatch]); 

    useEffect(() => {
        // launch search for current coordinates
        // let location = state.user.userLocation
        getCoffeeShops(location)
        .then((data) => {
            dispatch(saveShops(data))
        })
    },
    [dispatch, location])

     

    return(
        <div className ="homePage">
            <NavBar/>
            Home page
            <CoffeeShops/>
        </div>
    )
}