import React, {useState}from 'react';
import './item_count.css';
import { FaMinus,FaPlus } from 'react-icons/fa';

const ItemCount = ({ stock, initial}) => {

    const [counter,setCounter] = useState(initial);

    const onAdd = () => setCounter(counter + 1);

    const restar = () => setCounter(counter - 1);

    return (
        <div className="counter-container">
            <h3>Item</h3>
            <div className="counter-info">
                <button 
                className="btn col btn-minus col"
                onClick={restar}
                disabled={counter === initial}>
                      <FaMinus />  
                </button>
                <div className="counter col">{counter}</div>
                <button 
                className="btn btn-plus col"
                onClick={onAdd}
                disabled={counter === stock}>
                      <FaPlus />  
                </button>
            </div>
            <button className="btn add-cart" disabled>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;
