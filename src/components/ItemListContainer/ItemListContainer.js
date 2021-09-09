import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import'./item_list_container.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="item_list_container">
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={1} />
        </div>
    )
}

export default ItemListContainer;
