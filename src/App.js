import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Rutas from './components/Rutas/Rutas';
import {StoreProvider} from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
      <StoreProvider>
         <BrowserRouter>
              <NavBar />
              <Rutas />
         </BrowserRouter>
      </StoreProvider>     
  
  );
}

export default App;
