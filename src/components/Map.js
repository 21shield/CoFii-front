import React, { useEffect, useState } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

// const ReactMapboxGl = require('react-mapbox-gl');
// const Layer = ReactMapboxGl.Layer;
// const Feature = ReactMapboxGl.Feature;
// const Map = ReactMapboxGl({
//     accessToken: "sk.eyJ1IjoibmV0YWx5ZGV2IiwiYSI6ImNrZjd3MDZwMzAwY2oydW1oOWd2Z3RpbjQifQ.A9rfJanNN6z1TX0neHz5Eg"
//   });

export default function Map() {
  const [viewport, setViewport] = useState({
      latitude: 40.60503380000001,
      longitude: -73.9712603,
      height: '100vh',
      width: '100vw'
  },[])
    return(
        <div>
        <ReactMapboxGl
        style="mapbox://styles/mapbox/streets-v9"
        >
        {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}> */}
          {/* <Feature coordinates={[40.60503380000001, -73.9712603]} /> */}
          
        {/* </Layer> */}
        </ReactMapboxGl>
      </div>
    )
}