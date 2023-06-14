    import * as React from 'react';
    import Map, {Marker} from 'react-map-gl';
    

    
    function MyMap({ lat, long }) {
        //  const parsedLat = parseFloat(lat);
        // const parsedLong = parseFloat(long);
       
        
        // const position = [parsedLong, parsedLat];
        console.log(lat)
        console.log(long )
      
        return (
          <>
            <Map
              initialViewState={{
                longitude: long,
                latitude: lat,
                zoom: 12
              }}
              style={{ width: "100%", height: 400 }}
              mapStyle="mapbox://styles/mapbox/navigation-night-v1"
              mapboxAccessToken="pk.eyJ1IjoibW90b21vcSIsImEiOiJjbGlxMGRtZDIwbzJiM2VvMXYzd28wZWg2In0.rL9A6fOJIH6ngRvqs5O2zg"
            >
              <Marker longitude={long} latitude={lat} anchor="center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/500px-Map_marker.svg.png" width={"35px"} />
              </Marker>
            </Map>
          </>
        );
      }
      
      export default MyMap;