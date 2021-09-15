import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext';
import './item-detail.css'


const ItemDetail = ({item}) => {

const stock = item.stocks
const initial = 1
const [add, setAdd] = useState(false)
const [quantity, setQuantity] = useState(1)
const { addItem } = useCartContext()

const itemQuantity = (count) => {
  setQuantity(count)
}

const addToCart = () => {
  addItem(item, quantity)
  setAdd(true)
}

   return (
           <div className="item-detail-container">

              <div className="item-detail-img">
                <img src={item.img} alt={item.id} width="350"/>
              </div>

              <div className="item-detail-info">

                <h3>{item.title}</h3>

                <p className="item-detail-description">{item.description}</p>

                <p className="item-detail-price">{item.price}</p>

                <ItemCount
                 stock={stock}
                 initial={initial}
                 onAdd={itemQuantity}
                 />
                 <button className="btn" onClick={addToCart}>Add to cart</button>
                 {/* Mejorar esto en para que en todos los estado cambien la cantidad del item en el counter y también con los precios Poner el boton de "Get now en el cart" */}
                 {add ? <Link to={'/cart'}><button className="btn">Get now</button></Link> : null}
              </div>
            </div>
    )    
}

export default ItemDetail;
