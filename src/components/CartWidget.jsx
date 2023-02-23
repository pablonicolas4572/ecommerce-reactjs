import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./styles/CartWidget.css"


const CartWidget = () => {

    return (
        <div className="carrito">
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="display">
            </div>
        </div>

    )
};

export default CartWidget;