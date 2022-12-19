import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../hooks/AppContext";
import "../styles/Header.css";

function Header(){
    const { state } = useContext(AppContext);
    const { cart } = state
    return (
        <div className="Header">
            <h1 className="Header-title">
               <Link to="/">PlatziConf Console.log</Link> 
            </h1>
            <div className="Header-checkout">
                <Link to="/checkout"><i className="fa-solid fa-cart-shopping"></i></Link>
                {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
            </div>
        </div>
    )
}

export { Header }
