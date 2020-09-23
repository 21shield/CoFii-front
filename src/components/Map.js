import React, { useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { useSelector, useDispatch } from 'react-redux'
import { updateLocation  } from '../store/locationActions'
// import { userLocation } from '../store/userActions'

import '../styles/shopPanel.css'


export default function Map() {
  const dispatch = useDispatch()
  const location = useSelector((state) => state.location) 
  const user = useSelector((state) => state.user)

  const coffeeShops = useSelector(state => state.shops.shops)
  const [selectedShop, setSelectedShop] = useState(null)

  const renderMarkers = () => {
    return coffeeShops.map(shop => (
      <Marker 
      key={shop.external_id}
      className="shopMarker"
      latitude={Number(shop.latitude)}
      longitude={Number(shop.longitude)}
      >
        <a href={shop.url} onClick={(e)=>{
          e.preventDefault()
          setSelectedShop(shop)
          }}>
          <div className="beanLocation">
            <img src="https://freeiconshop.com/wp-content/uploads/edd/location-pin-curvy-outline.png" alt="bean" />
            {/* <i className="fas fa-mug-hot"></i> */}
          </div>
        </a>
       
      </Marker>
    )
    )
  }
  
  const calculateMi = (distance) => {
    let meter = Number(distance)
    let num = meter/1609
    return Math.ceil(num * 100) / 100
  }
  

    return(
        <div className= "map">
        <ReactMapGl
        {...location}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/netalydev/ckf7ue7hc0uht19o88kcesw4x"
        onViewportChange={(data) => 
          dispatch(updateLocation([data.latitude, data.longitude]))
        }
        >
            <Marker 
            className="userLocation"
            latitude={user.userLocation[0]}
            longitude={user.userLocation[1]}
            >
                <div>
                  YOU
                  <i className="fas fa-map-pin"></i></div>
            </Marker>

            {renderMarkers()}
          
            {selectedShop ?( <Popup 
              latitude={Number(selectedShop.latitude)}
              longitude={Number(selectedShop.longitude)}
              onClose={(e) => setSelectedShop(null) 
              }
            >
              <div>
              <h4>{selectedShop.name}</h4>
              <hr/>
              <p>{selectedShop.location}</p>
            <small>{calculateMi(selectedShop.distance)} mi</small>
              </div>
            </Popup>) : null}
        </ReactMapGl> 
      </div>
    )
}