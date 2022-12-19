import React from "react";
import initialState from "../data/initialState";
import { Products } from "../components/Products";

function Home() {
    return (
        <>
            <Products products={initialState.products}/>
        </>
        
    )
}

export { Home };