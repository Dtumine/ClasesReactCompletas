import React, { useEffect } from 'react'; 
import { useState } from 'react';
import RMLogoBlanco2 from './svgs/RMLogoBlanco2.svg'; 
import './App.css'; 
import Header1 from './Header1'; 
import Footer1 from './Footer1'; 
import Tour1 from './Tour1';



function App() { 
  const [showTour, setShowTour] = useState(false); // Estado para controlar la visibilidad del tour


  useEffect(() => {
    const particleContainer = document.querySelector('.particles');
    const numParticles = 30; // Controla cuántas partículas quieres
    const particleSizes = [1.5, 1.8, 1,1.3]; // Tamaños disponibles para las partículas

    // Generar partículas
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Posición aleatoria inicial
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      particle.style.top = `${randomY}%`;
      particle.style.left = `${randomX}%`;

      // Movimiento aleatorio (distancia y dirección)
      const moveX = Math.random() * 200 - 100; // Movimiento en el eje X entre -100 y 100
      const moveY = Math.random() * 200 - 100; // Movimiento en el eje Y entre -100 y 100
      particle.style.setProperty('--x', `${moveX}px`);
      particle.style.setProperty('--y', `${moveY}px`);

      // Tamaño aleatorio
      const size = particleSizes[Math.floor(Math.random() * particleSizes.length)];
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Retraso aleatorio para que no todas las partículas aparezcan al mismo tiempo
      particle.style.setProperty('--delay', Math.random() * 4);

      particleContainer.appendChild(particle);
    }
  }, []);
  
  

  
  return ( 

    
    
    <div className="App flex flex-row min-h-screen"> 
      {/* Contenedor de las partículas */}
      <div className="particles flex-grow"></div>
      
      <div className="flex flex-col flex-grow min-h-screen">
        
      <Header1 setShowTour={setShowTour} />  {/* Pasamos el setter al header */}

      <div className="RMLogo">
       <img src={RMLogoBlanco2} className='RMLogo' />
      </div> 
    

   {/* Mostramos el modal solo si showTour es true */}
   {showTour && <Tour1 />}
      <div className="flex-grow"></div> 

      <Footer1 /> 
      </div> 



    </div>

    


  );  
  
  
  
  

}

export default App;
