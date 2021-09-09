import React,{useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import products from '../../productos-fake-api';
import'./item_list_container.css';

const listProducts = new Promise (
    (result,reject) => setTimeout(() => result(products),2000)
)

const ItemListContainer = ({greeting}) => {

    const[list,setList] = useState([]);

    useEffect(() => {
        listProducts.then(setList)
    },[])

    return (
        <div className="item_list_container">
            <h1>{greeting}</h1>
            <ItemList list={list} />
        </div>
    )
}

export default ItemListContainer;
