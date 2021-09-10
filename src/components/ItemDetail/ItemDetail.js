import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './item-detail.css'


const ItemDetail = ({item: {id, title, description, img, price}}) => {
    return (
           <div className="item-detail-container">
              <div className="item-detail-img">
                <img src={img} alt={id} width="350"/>
              </div>
              <div className="item-detail-info">
                <h3>{title}</h3>
                <p className="item-detail-description">{description}</p>
                <p className="item-detail-price">{price}</p>
                <ItemCount stock={10} initial={0} />
              </div>
            </div>
    )    
}
export default ItemDetail;
