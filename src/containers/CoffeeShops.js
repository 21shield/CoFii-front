import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import '../styles/shopPanel.css'
import CoffeeShopCard from '../components/coffeeShopCard'
import Map from '../components/Map'


export default function CoffeeShops() {

    return(
        <div className="shopPanel">
            SHOP PANNEL
            <CoffeeShopCard/>
            <Map/>
        </div>
    )
}