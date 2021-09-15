import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
//import products from '../../productos-fake-api';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore } from '../../firebase'


const ItemDetailContainer = () => {
        const[loading, setLoading] = useState(false);
        const [item, setItem] = useState([]);

        const {productId} = useParams();

        useEffect(() =>{

            const db = getFirestore()

            const getItem = db.collection("ItemCollection").doc(productId)
    
            getItem.get().then((querySnapshot) => {

                setItem({id:querySnapshot.id, ...querySnapshot.data()})

                setLoading(false) 
            })
            .catch((e) => {console.log(e)})
    
        }, [productId])
        
    return (
        
        <div>
          { loading ? "Loading..." : <ItemDetail item={item} /> }
        </div>
    )
}
//Acomodar el loading en el medio de la pantalla

export default ItemDetailContainer;
