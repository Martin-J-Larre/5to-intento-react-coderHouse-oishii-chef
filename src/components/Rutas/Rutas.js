import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';


const Rutas = ({greeting}) => {
    return (
        <div>
           <Switch>

                    <Route path="/" exact>
                        <Home greeting="BIENVENIDOS"/>
                    </Route>

                    <Route path="/about-us">
                        <AboutUs />
                    </Route>

                    <Route path="/category">
                        <ItemListContainer/>
                    </Route>

                    <Route exact path = "/item/:productId">
                        <ItemDetailContainer />
                    </Route>

                    <Route path="/contact">

                    </Route>

                    <Route path="/cart">

                    </Route>

            </Switch>
        </div>
    )
}

export default Rutas;
