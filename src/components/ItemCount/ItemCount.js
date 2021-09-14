import React, {useState} from 'react';
import { FaMinus,FaPlus } from 'react-icons/fa';
import './item_count.css';

const ItemCount = ({stock,  initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [stocks, setStocks] = useState(stock)

    const increase = () => { 
        if(count < stock){
            setCount(count + 1)
            setStocks(stocks - 1)
            console.log(count)
        }
       }
        const decrease = () => { 
            if(count > initial){
                setCount(count - 1)
                setStocks(stocks + 1)
            }
    
        }
        onAdd(count)

     return (
       <div className="counter-container">
          <h5>Cantidad:</h5>
          <div className="counter-info">

              <button className="btn col btn-minus" onClick={decrease} disabled={count === initial}><FaMinus /></button>

              <div className="counter col">{count}</div>

              <button className="btn btn-plus col" onClick={increase} disabled={count === stock}>
                      <FaPlus />  
                </button>
           </div>
            <p>Stock: {stocks-initial}</p>
        </div>
    )
  
}
export default ItemCount;
