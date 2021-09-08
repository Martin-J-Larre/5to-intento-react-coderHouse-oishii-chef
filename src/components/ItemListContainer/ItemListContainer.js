import React from 'react';
import'./item_list_container.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="item_list_container">
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;
