import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map(){
    const defaultProps = {
      center: {
        lat:  36.188110,
        lng:  -115.176468
      },
      zoom: 11
    };

   
    return (
        
        <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={36.188110}
            lng={-115.176468}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
  )

};

export default Map;
