import React, { useContext } from "react";
import "../styles/Success.css"
import { AppContext } from "../hooks/AppContext";

function Success() {
    const { state } = useContext(AppContext);
    React.useEffect(()=> {
        console.log(state.orders)
    })
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Gracias por tu compra</h2>
                <span>Tu pedido llegará en 3 días a tu dirección:</span>
            </div>
            <div className="Success-map">
                Google maps
            </div>
        </div>
    )
}

export { Success };