import logo from './logo.svg';
import './App.css';
import Footer1 from './componentes/Footer1';
import Header1 from './componentes/Header1';
import Form from './componentes/Form';
import Home from './componentes/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Referentes from './componentes/Referentes';




function App() {
  return ( 
    <Router> 

      <div className="App bg-blue-400">
      
          <Header1 />

          <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/referentes" element={<Referentes/>}/>
          <Route path="/write-form" element={<Form/>} />
          <Route path="/home" element={<Home/>} />
         </Routes>

        <Footer1 />
      </div>

    </Router>
  );
}

export default App;
