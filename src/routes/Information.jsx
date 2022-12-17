import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Information.css";
import { AppContext } from "../hooks/AppContext";

function Information() {
    const { state, addToBuyer } = useContext(AppContext);
    const { cart } = state;
    const form = useRef();
    const navigate = useNavigate()
    const handleSubmit = () => {
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email':formData.get('email'),
            'address':formData.get('address'),
            'apto':formData.get('apto'),
            'city':formData.get('city'),
            'country':formData.get('country'),
            'state':formData.get('state'),
            'cp':formData.get('cp'),
            'phone':formData.get('phone'),
        }
        addToBuyer(buyer);
        navigate('/checkout/payment');
    }

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Informacion-head">
                    <h2>Información de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre Completo" name="name"/>
                        <input type="mail" placeholder="Correo electrónico" name="email"/>
                        <input type="text" placeholder="Dirección" name="address"/>
                        <input type="text" placeholder="Apto" name="apto"/>
                        <input type="text" placeholder="Ciudad" name="city"/>
                        <input type="text" placeholder="País" name="country"/>
                        <input type="text" placeholder="Estado" name="state"/>
                        <input type="tel" placeholder="Teléfono" name="phone"/>
                        <input type="text" placeholder="Código postal" name="cp"/>
                    </form>
                </div>
                <div className="Information-Buttons">
                    <div className="Information-back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type="button" onClick={handleSubmit}>
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map((item) => (
                    <div className="Information-item" key={item.title}>
                        <div className="Information-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export { Information };