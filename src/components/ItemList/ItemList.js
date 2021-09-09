import React from 'react';
import Item from '../Item/Item';
import './item_list.css';

const ItemList = ({list}) => {
    return (
        <div className="list-product">

            {list.map(product => 
                <Item key={product.id} item={product} />
            )}
        </div>
    )
}

export default ItemList;
