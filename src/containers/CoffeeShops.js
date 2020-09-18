import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/shopPanel.css'
import CoffeeShopCard from '../components/coffeeShopCard'

export default function CoffeeShops() {

    return(
        <div className="shopPanel">
            SHOP PANNEL
            <CoffeeShopCard/>
        </div>
    )
}