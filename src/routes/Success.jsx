import React, { useContext, useEffect } from "react";
import "../styles/Success.css"
import { AppContext } from "../hooks/AppContext";
import { Map } from "../components/Map";
import { useGoogleLocation } from "../hooks/useGoogleLocation";
function Success() {
    const { state } = useContext(AppContext);
    const { buyer } = state
    const { location, getLocation } = useGoogleLocation()
    useEffect(() => {
        getLocation('Cuautitlán Izcalli')
    }, [])
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Gracias por tu compra, {buyer.name} </h2>
                <span>Tu pedido llegará en 3 días a tu dirección:</span>
            </div>
            <Map 
                center={location}
                zoom={10}
            />
            
        </div>
    )
}

export { Success };