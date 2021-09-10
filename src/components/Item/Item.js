import React from 'react';
import {Link} from 'react-router-dom';
import './item.css'

const Item = ({item:{id, title, description, img}}) => {
    return (
        <div className="item-container">
            <img src={img}m alt={id} width="350"/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Add</button>
            <Link to={`/item/${id}`}><button>Ver detalle</button></Link>
        </div>
    )
}

export default Item;
