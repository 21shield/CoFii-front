import React from 'react';
import { useSelector} from 'react-redux';
import '../styles/shopPanel.css'
import CoffeeShopCard from '../components/coffeeShopCard'
import Map from '../components/Map'


export default function CoffeeShops() {
  
    // this is an array to play with
    const coffeeShops = useSelector(state => state.shops.shops)
  
    let renderShops = () => {
       return coffeeShops.map((shop) => <CoffeeShopCard key={shop.external_id} shop={shop}/>)    
    }

    return(
        <div className="shopPanel">
            SHOP PANNEL
            {/* <div className="shops"> */}
             {renderShops()}
            {/* </div> */}
            
            <div className="map">
                <Map/>
            </div>
        </div>
    )
}