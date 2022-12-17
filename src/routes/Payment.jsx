import React, { useContext } from "react";
import ReactDOM  from "react-dom";
import "../styles/Payment.css";
import { AppContext } from "../hooks/AppContext";
import { useNavigate } from "react-router-dom";
const PayPalButton = paypal.Buttons.driver("react", {React, ReactDOM});

function Payment() {
    const navigate = useNavigate()
    const { state,  addNewOrder } = useContext(AppContext);
    const { cart, buyer, } = state;
    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }
    const total = handleSumTotal()
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: total
                    }
                }
            ]
        })
    }
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function(details){
            if(details.status === "COMPLETED"){
                const newOrder = {
                    buyer, 
                    product: cart,
                    payment: details
                }
                addNewOrder(newOrder)
                navigate('/checkout/success')
            }
        })
    }
    const onCancel = (data) => {
        console.log(data)
    }
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        createOrder={(data, actions) => createOrder(data, actions)}
                        onApprove={(data, actions) => onApprove(data, actions)}
                        onCancel={(data) => onCancel(data)}
                    />
                    {/* <PayPalScriptProvider options={payPalOptions}>
                        <PayPalButtons 
                            style={{layout: "horizontal"}}
                            createOrder={(data, actions) => {
                                return actions.order
                                    .create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    currency_code: 'USD',
                                                    value: total
                                                }
                                            }
                                        ]
                                    })
                                    .then((orderId) => {
                                        return orderId
                                    })
                            }} 
                            onApprove={(data, actions) => {
                                return actions.order.capture().then(function () {
                                   console.log(data)
                                });
                            }}  
                        />
                    </PayPalScriptProvider> */}
                </div>
            </div>
        </div>
    )
}

export { Payment };