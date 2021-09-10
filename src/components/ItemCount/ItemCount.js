import React, {useState}from 'react';
import { FaMinus,FaPlus } from 'react-icons/fa';
import './item_count.css';

const ItemCount = ({stock, initial, count, increase, decrese, onAdd}) => {

    const [counter,setCounter] = useState(initial);

    const sumar = () => { setCounter(counter + 1);}

    const restar = () => { setCounter(counter - 1);}

    return (
        <div className="counter-container">
            <h5>Cantidad:</h5>
            <div className="counter-info">
                <button className="btn col btn-minus col" onClick={restar}disabled={counter === initial}>
                    <FaMinus />  
                </button>
                <div className="counter col">{counter}</div>
                <button className="btn btn-plus col" onClick={sumar} disabled={counter === stock}>
                      <FaPlus />  
                </button>
            </div>
            <button className="btn add-cart" disabled>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;
