import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componentes/Home'; // Esta puede ser la tercera ruta o la página principal 
import NavBar from './Componentes/NavBar';
import LoginForm from './Componentes/LoginForm';
import RegisterForm from './Componentes/RegisterForm';

function App() {

  return ( 
     
    <Router> 
      <NavBar/>
      <Routes>
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router> 
    

  );
}

export default App;
