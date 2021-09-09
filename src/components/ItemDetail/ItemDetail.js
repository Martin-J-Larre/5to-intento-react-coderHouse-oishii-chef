import React from 'react';
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({item}) => {
    return (
        <div>
            <Item item={item} />
            <ItemCount stock={10} initial={0} />
        </div>
    )
}

export default ItemDetail
