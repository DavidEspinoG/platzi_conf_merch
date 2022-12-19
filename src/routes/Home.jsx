import React from "react";
import initialState from "../data/initialState";
import { Products } from "../components/Products";

function Home() {
    React.useEffect(() => {
        console.log(GOOGLE_API_KEY)
    })
    return (
        <>
            <Products products={initialState.products}/>
        </>
        
    )
}

export { Home };