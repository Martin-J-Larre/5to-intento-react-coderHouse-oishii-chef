import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext';
import './item-detail.css'


const ItemDetail = ({item}) => {

const stock = 10
const initial = 1
const [stocks, setStocks] = useState(stock)
const [count, setCount] = useState(initial)
const [add, setAdd] = useState(false)
const [quantity, setQuantity] = useState(0)
const { addItem } = useCartContext()

const increase = () => { 
  if(count < stock){
      setCount(count + 1)
      setStocks(stocks - 1)
  }
}
const decrease = () => { 
  if(count > initial){
      setCount(count - 1)
      setStocks(stocks + 1)
  }
}
const onAdd = () => { 
  if(count <= stock){
      setAdd(true)
      setQuantity(count)
  }
  console.log("cantidad en onAdd",quantity);
}
const addToCart = () => {
  addItem(item, quantity)
  console.log("cantidad addtoCart",quantity)
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

                <p>Stock: {stocks-initial}</p>

                <ItemCount
                 stock={stock}
                 initial={initial}
                 count={count}
                 increase={increase}
                 decrease={decrease}
                 onAdd={onAdd}
                />
                {add ? <Link to= {'/cart'}><button className="btn-compra" onClick={addToCart}>Comprar Ahora</button></Link> : null}
              </div>
            </div>
    )    
}

export default ItemDetail;
