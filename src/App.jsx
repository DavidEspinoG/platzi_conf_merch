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
import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "./components/Map";

function App(){
    return (
        
        <AppContextProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='/map' element={
                            <Wrapper apiKey={secrets.GOOGLE_API_KEY}>
                                <Map 
                                    center={{ lat: -34.397, lng: 150.644 }}
                                    zoom={8}
                                />
                            </Wrapper>
                             
                        }/>
                        <Route path='/checkout/information' element={<Information/>}/>
                        <Route path='/checkout/payment' element={<Payment/>}/>
                        <Route path='/checkout/success' element={
                            <Wrapper apiKey={secrets.GOOGLE_API_KEY}>
                                <Success/>
                            </Wrapper>
                        
                        }/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContextProvider>
        
        
    )
}

export { App }