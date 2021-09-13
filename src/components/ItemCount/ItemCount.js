import React from 'react';
import { FaMinus,FaPlus } from 'react-icons/fa';
import './item_count.css';

const ItemCount = ({stocks, initial, count, increase, decrease, onAdd}) => {


    return (
      <div className="counter-container">
          <h5>Cantidad:</h5>
          <div className="counter-info">

              <button className="btn col btn-minus col" onClick={decrease} disabled={count === initial}><FaMinus /></button>

              <div className="counter col">{count}</div>

              <button className="btn btn-plus col" onClick={increase} disabled={count === stocks}>
                      <FaPlus />  
                </button>
           </div>
            <button className="btn add-cart" onClick={onAdd}> Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;
