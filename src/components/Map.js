import React, { useState } from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import ReactMapGl, { Marker, Popup } from 
'react-map-gl';
import { useSelector, useDispatch } from 'react-redux'
import { updateLocation  } from '../store/locationActions'
import '../styles/shopPanel.css'

const { Meta } = Card;

export default function Map() {
  const dispatch = useDispatch()
  const location = useSelector((state) => state.location) 
  const user = useSelector((state) => state.user)
  const coffeeShops = useSelector(state => state.shops.shops)
  const [selectedShop, setSelectedShop] = useState(null)

  const calculateMi = (distance) => {
    let meter = Number(distance)
    let num = meter/1609
    return Math.ceil(num * 100) / 100
  }


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
            {/* <img src="https://freeiconshop.com/wp-content/uploads/edd/location-pin-curvy-outline.png" alt="bean" /> */}
            {/* <PushpinTwoTone /> */}
            <i className="fas fa-mug-hot"></i>
          </div>
        </a>
       
      </Marker>
    )
    )
  }
  
 


  return(
   
        <div className="map">
          {location.latitude ? 
        <ReactMapGl
        {...location}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/netalydev/ckf7ue7hc0uht19o88kcesw4x"
        //  mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(data) => 
         
          dispatch(updateLocation([data.latitude, data.longitude]))}
      
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
                {console.log(selectedShop)}
                <Meta 
                avatar={<Avatar shape="square" size="large" src={selectedShop.image_url}/>}
                title={[selectedShop.name,  <p>{selectedShop.rating}</p> ]}
                description={
                    
                  [<p>{selectedShop.location}</p>, <p>{calculateMi(selectedShop.distance)} mi</p>]
                }
              
                style={{ width: 200, marginTop: 16 }}
                // action={[ <div key="1">{calculateMi(selectedShop.distance)} mi</div>, <div key="2">{selectedShop.rating}</div>]}
                />

            </Popup>) : null}
        </ReactMapGl> 
        :
        null
        }
      </div>
    )
}