import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import Home from './Componentes/Home'; // Esta puede ser la tercera ruta o la página principal 
import NavBar from './Componentes/NavBar'

function App() {
  return ( 
     
    <Router> 
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router> 
    

  );
}

export default App;
