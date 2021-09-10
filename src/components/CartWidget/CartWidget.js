/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './cartwidget.css'

const CartWidget = () => {
    return (
        <div>
            <li className="cart-container">
               <FaShoppingCart />
            </li>
        </div>
    )
}

export default CartWidget;
