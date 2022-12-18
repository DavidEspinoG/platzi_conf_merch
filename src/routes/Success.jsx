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
        // try{
        //     getLocation(buyer[0].address + ' ' + buyer[0].city)
        // } catch(err) {
        //     console.log(err)
        //     getLocation('Ciudad de México')
        // }
            

    }, [])
    return (
        <div className="Success">
            <div className="Success-content">
                {buyer.lenght > 0 && 
                <>
                    <h2>Gracias por tu compra, {buyer.name} </h2>
                    <span>Tu pedido llegará en 3 días a tu dirección:</span>
                </>
                }
                
            </div>
            <Map 
                center={{lat: 12.909, lng: 29}}
                zoom={10}
            />
            
        </div>
    )
}

export { Success };