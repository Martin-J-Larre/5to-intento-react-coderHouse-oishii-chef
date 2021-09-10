import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import products from '../../productos-fake-api';
import { useParams } from 'react-router';


const ItemListContainer = () => {

    const[list,setList] = useState([]);
    const{categoryName} = useParams();

    function filCategory(item) {
        return item.category === categoryName
    }

    useEffect(() => {
        setTimeout(() => {
            let itemsPorCategoria = products.filter(filCategory);
            setList(categoryName ? itemsPorCategoria : products);
        },2000)
    },)
  

    return (
        <div>
            <ItemList list={list} />
        </div>
    )
}

export default ItemListContainer;
