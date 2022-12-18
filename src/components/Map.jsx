import React, { useRef, useEffect } from "react";
import "../styles/Map.css";
function Map({center, zoom}){
    const ref = useRef();
    useEffect(()=> {
        new window.google.maps.Map(ref.current, {
            center: center, 
            zoom: zoom 
        });
    } );
    return ( 
            <div ref={ref} id="map" />
    )
}

export { Map }