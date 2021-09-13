import React from 'react';
import useCartContext from '../../context/CartContext';
import {Link} from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import'./cart.css';

const Cart = () => {
    const {products, removeItem} = useCartContext()

    const removeHandler = (i) =>  {
        removeItem(i.id)
    }

    return (
        <div className="cart">
            <div className="cart-header ca">
                <h2>Carrito</h2>
                    <Link to='/' exact>
                        <button className= "btn-continue"> Continue buying</button>
                    </Link>
            </div>

            <div className="s-cart">

                {products.map((item) => (
                    <div className="product">
                        <div className="product-img">
                            <img src={item.img} alt={item.id} />
                        </div>
                        <div className="product-detail"> {item.title}</div>      
                        <div className="product-qty">
                            <imput type="text" placeholder={item.quantity} />
                        </div> 
                        <div className="product-price">{item.price}</div>   
                        <div className="product-remove">
                            <button className="btn-product-remove" onClick={() => removeHandler(item)}>
                                <FaTrash />
                            </button>
                        </div> 
                        <div className="product-l-price"> X</div> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart;
