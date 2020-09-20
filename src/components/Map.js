import React, { useEffect, useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import { useSelector, useDispatch } from 'react-redux'
import { updateLocation  } from '../store/locationActions'
import { userLocation } from '../store/userActions'

export default function Map() {
  const dispatch = useDispatch()
  const location = useSelector((state) => state.location) 
  const user = useSelector((state) => state.user)

  
    return(
        <div>
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
                <div><i className="fas fa-map-pin"></i></div>
            </Marker>
      
       
          
        </ReactMapGl> 
      </div>
    )
}