import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Rutas from './components/Rutas/Rutas';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
      <BrowserRouter>
           <NavBar />
           <Rutas />
      </BrowserRouter>
  
  );
}

export default App;
