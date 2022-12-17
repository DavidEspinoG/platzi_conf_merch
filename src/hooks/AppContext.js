import React, { useState } from "react";
import  initialState  from "../data/initialState";

const AppContext = React.createContext();

function AppContextProvider({children}){
    const [ state, setState ] = useState(initialState);
    const addToBuyer = (payload) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }
    function addToCart(payload){
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    function removeFromCart(payload){
        setState({
            ...state, 
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }
    function addNewOrder(payload){
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }
    return (
        <AppContext.Provider value={{
            addToCart,
            removeFromCart,
            state,
            addToBuyer, 
            addNewOrder
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }