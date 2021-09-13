import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import products from '../../productos-fake-api';
import ItemDetail from '../ItemDetail/ItemDetail';

const getItem = (productId) => {
    return new Promise(result => setTimeout(() =>
    {result(products.find(product => 
        product.id === parseInt(productId)))
    },1000))
}

const ItemDetailContainer = () => {
        const[loading, setLoading] = useState(false);
        const [item, setItem] = useState([]);

        const {productId} = useParams();
    
        useEffect(() =>{
            setLoading(true);
            getItem(productId).then((product) => {
                setItem(product);
                setLoading(false)    
            });
        }, [productId])
    
    return (
        
        <div className="loading">
          { loading ? "Loading..." : <ItemDetail item={item} /> }
        </div>
    )
}
//Acomodar el loading en el medio de la pantalla
export default ItemDetailContainer;
