import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
//import products from '../../productos-fake-api';
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase'

//import{collection, getDocs} from './firebase/firebase-firestore';

const ItemListContainer = () => {

    // const [products, setProducts] = useState([])

    // useEffect(() => {

    //     const getProducts = async () =>  {
    //         const productsCollection = collection(getData(), 'products');
    //         const productsSnapshot = await getDocs(productsCollection);
    //         const productsList = productsSnapshot.docs.map(doc =>  doc.data());
    //         console.log(productsList);
    //         setProducts(productsList)
    //     }
    //     getProducts()
    // },[]);

    

    const[list, setList] = useState([]);
    const{categoryName} = useParams();


    useEffect(()=> {
         const db = getFirestore()
         let itemCollection

         if (categoryName){
             itemCollection = db.collection("ItemCollection")
             .where("category", "==", categoryName)
         } else{
             itemCollection = db.collection("ItemCollection")
         }

         const itemCollectionQuery = itemCollection.get()

         itemCollectionQuery.then((querySnapshot) => {
             setList(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
         })
         .catch((e) => {console.log(e)})
    

  },[categoryName])
  
 return (
        <div>
            <ItemList list={list} />
            {/* <ItemList products={products} /> */}
        </div>
    )
}

export default ItemListContainer;
