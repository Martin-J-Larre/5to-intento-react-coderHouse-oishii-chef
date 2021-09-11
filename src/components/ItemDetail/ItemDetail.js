import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './item-detail.css'


const ItemDetail = ({item: {id, title, description, img, price}}) => {

  const  stock = 10
  const initial = 0
  const [stocks, setStocks] = useState (stock)
  const [count, setCount] = useState (initial)
  const [add, setAdd] = useState (false)

  const increase  = () => {
      if (count < stock) {
        setCount(count + 1)
        setStocks(stocks - 1)
      }
  }
  const decrease  = () => {
      if (count < stock) {
        setCount(count + 1)
        setStocks(stocks - 1)
      }
  }
  const onAdd  = () => {
      if (count < stock) {
        setAdd(true)
      }
  }
    return (
           <div className="item-detail-container">
              <div className="item-detail-img">
                <img src={img} alt={id} width="350"/>
              </div>
              <div className="item-detail-info">
                <h3>{title}</h3>
                <p className="item-detail-description">{description}</p>
                <p className="item-detail-price">{price}</p>
                <p>Stock: {stocks}</p>
                { add ? <Link to={'/cart'}><button className="btn-compra">Terminar Compra</button></Link> : <ItemCount stock={stock} initial={initial} count={count} increase={increase} decrease={decrease} onAdd={onAdd} />}
              </div>
            </div>
    )    
}
export default ItemDetail;
