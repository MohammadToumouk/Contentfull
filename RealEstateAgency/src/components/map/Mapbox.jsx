    import * as React from 'react';
    import Map, {Marker} from 'react-map-gl';



    function MyMap() {

        
    return (
        <>
        <Map
        initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 15
            
        }}
        
        style={{width: "100%", height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={"pk.eyJ1IjoibW90b21vcSIsImEiOiJjbGlxMGRtZDIwbzJiM2VvMXYzd28wZWg2In0.rL9A6fOJIH6ngRvqs5O2zg"}
        >
         <Marker longitude={-122.4} latitude={37.8} anchor="bottom" >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/500px-Map_marker.svg.png" width={"35px"} />
             </Marker>

        </Map>
        </>
    );
    
    } export default MyMap