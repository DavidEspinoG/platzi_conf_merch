import React, { useContext } from "react";
import "../styles/Success.css"
import { AppContext } from "../hooks/AppContext";

function Success() {
    const { state } = useContext(AppContext);
    const { buyer } = state

    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Gracias por tu compra, {buyer.name} </h2>
                <span>Tu pedido llegará en 3 días a tu dirección:</span>
            </div>
            <div className="Success-map">
                Google maps
            </div>
        </div>
    )
}

export { Success };