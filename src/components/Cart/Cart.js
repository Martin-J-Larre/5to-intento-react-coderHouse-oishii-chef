import React from 'react';
import useCartContext from '../../context/CartContext';
import {Link} from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import'./cart.css';

const Cart = () => {
    const {products, removeItem, totalProductsPrice, isInCart} = useCartContext()

    const removeHandler = (i) =>  {
        removeItem(i.id)
    }


    console.log("En el carrito",isInCart);
    
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
                        <div className="product-l-price">{item.quantity*item.price}</div> 
                    </div>
                ))}
            </div>
            { isInCart ? 
                <div className="total">
                    <div className="total-item">
                        <label>Sub Total</label>
                        <div className="total-value">{totalProductsPrice()}</div>
                    </div>
                    <div class="total-item">
                        <label>Costo de envío</label>
                        <div class="total-value">50</div>
                    </div>
                    <div class="totals-item total-price">
                        <label>Total a Pagar</label>
                        <div class="totals-value t-price">{totalProductsPrice() + 50}</div>
                    </div>
                </div>
                : "... Carrito vacío"    
        }
        </div>
    )
}

export default Cart;
