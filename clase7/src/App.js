
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactanos from './Contactanos'; 
import AcercaDe from './Acercade';
import Home from './Home';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul> 
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/contactanos">Contactanos</a>
        </li>
        <li>
        <a href="/acerca-de">Acerca De</a>
        </li> 

        </ul>
        
      </nav>

      <Routes> 
        <Route path="/home" element={<Home/>}/> 
        <Route path="/contactanos" element={<Contactanos/>}/> 
        <Route path="/acerca-de" element={<AcercaDe/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
