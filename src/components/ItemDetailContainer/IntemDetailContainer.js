import React,{useState, useEffect} from 'react';
import products from '../../productos-fake-api';
import ItemDetail from '../ItemDetail/ItemDetail';

const getItems = new Promise (
    (res,rej) => setTimeout(() => res(products),2000)
)

const IntemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState()

    useEffect(() => {
        getItems.then((products) => {
            setItemDetail(products[2])
        })
    },[]);

    return (
        <div>
            {itemDetail ? <ItemDetail item={itemDetail} /> : null}
        </div>
    )
}

export default IntemDetailContainer;
