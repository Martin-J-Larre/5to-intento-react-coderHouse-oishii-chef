import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './home.css'

const Home = ({greeting}) => {
    return (
         <div>
            <div className="home-container">
                <h1>{greeting}</h1>
                <p>Oishii chef meal kit</p>
            </div>
                <ItemListContainer />
        </div>    
    )
}

export default Home;