import React from 'react';
import './item.css'

const Item = ({item:{id, title, description, img}}) => {
    return (
        <div className="product-container">
            <img src={img} 
                 alt={id} 
                 width="350"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <button>Add</button>
        </div>
    )
}

export default Item;
