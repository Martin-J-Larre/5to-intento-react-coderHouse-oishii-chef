import React, { useState } from 'react';
import useCartContext from '../../context/CartContext';
import {Link} from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import'./cart.css';
import firebase from "firebase/app"
import "firebase/firestore"
import { getFirestore } from '../../firebase'
import Formulario from '../Formulario/Formulario'

const Cart = () => {
    
    const {products, removeItem, totalProductsPrice, cleanListCart} = useCartContext()
    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState(false)

    const handleRemove = (i) =>  {
        removeItem(i.id)
    }

    const handleFinalizer = () =>{
        setShowForm(true)
    }
    //**************************************************************** */

    const createOrder = (buyer) => {

        const db = getFirestore()
        const orders = db.collection('order')

        const newOrder = {
            buyer,
            products,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalProductsPrice()
        }
        orders.add(newOrder).then(({id}) => {
            setOrderId(id)
            setConfirmation(true)
            cleanListCart()
        }
        ).catch((e) => {console.log(e)})
    }

    console.log("Confirmacion",confirmation)
    console.log("orderId",orderId)

    if(products.length === 0 && orderId === ""){
        return (
            <div className="cart">
                <div className="heading cf">
                    <h3>...No hay productos agregados al Carrito...</h3>
                    <Link to="/" exact>
                        <button className = "continue">Continuar Comprando</button>
                    </Link>
                </div>

            </div>
        )
    }else if(orderId && confirmation){
        return(
            <div className="cart">
                <div className="heading cf">
                    <h3>Su Orden No. <span className="validation">{orderId}</span> ha sido confirmada</h3>
                    <Link to="/" exact>
                        <button className = "continue">Continuar Comprando</button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="cart">
            <div className="cart-header ca">
                <h2>Carrito de compra</h2>
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
                            <button className="btn-product-remove" onClick={() => handleRemove(item)}>
                                <FaTrash />
                            </button>
                        </div> 
                        <div className="product-l-price">{item.quantity*item.price}</div> 
                    </div>
                ))}
            </div>

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
                    <div className="total-item">
                        <button className ="checkout" onClick={handleFinalizer}>Iniciar Compra</button>
                    </div>
            </div>
            
            {showForm ? <Formulario createOrder={createOrder}/> : null}

        </div>  
    )
}

export default Cart;
