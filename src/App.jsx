import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./routes/Home";
import { Checkout } from "./routes/Checkout";
import { Information } from "./routes/Information";
import { Payment } from "./routes/Payment";
import { Success } from "./routes/Success";
import { NotFound } from "./routes/NotFound";
import { Layout } from "./containers/Layout";
import { AppContextProvider } from "./hooks/AppContext";

function App(){
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='/checkout/information' element={<Information/>}/>
                        <Route path='/checkout/payment' element={<Payment/>}/>
                        <Route path='/checkout/success' element={<Success/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContextProvider>
        
    )
}

export { App }