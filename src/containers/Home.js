import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './NavBar'
import CoffeeShops from './CoffeeShops'
import { updateLocation } from '../store/locationActions'
import '../styles/homePage.css'

export default function Home () {

    const dispatch = useDispatch()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const {latitude,
                    longitude} = pos.coords
                  dispatch(updateLocation([latitude,longitude])) 
            },
            (err) => {
                console.log(err)
            }
            
        )
    }, []);

    const state = useSelector(state => state)
    return(
        <div className ="homePage">
            <NavBar/>
            Home page
            <CoffeeShops/>
        </div>
    )
}