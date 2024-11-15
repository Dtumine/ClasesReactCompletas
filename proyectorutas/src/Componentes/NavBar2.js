

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Home from './Home';

function NavBar2() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul> 

      <Link to="/loginForm">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/">Home</Link>
      </nav>


    </Router>
  );
}

export default NavBar2;
