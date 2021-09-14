import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './cartwidget.css';
import {Link} from 'react-router-dom';
import useCartContext from '../../context/CartContext'


const CartWidget = () => {
    const {cartWidgetCount, isInCart} = useCartContext()
    return (
        <div>
           {isInCart ?
           <Link to={'/cart'}>
               <div className="cart-icon">
                   < FaShoppingCart />
                   <span className="icon-count">{cartWidgetCount()}</span>
                  {/*to Fix the number icon problem */}
               </div>
           </Link>
           : null}
        </div>
    )
}

export default CartWidget;
