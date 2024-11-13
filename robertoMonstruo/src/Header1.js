import React from 'react';
import StoreMonstruoBlanco from './svgs/StoreMonstruoBlanco.svg';
import FotosMonstruoBlanco from './svgs/FotosMonstruoBlanco.svg';
import TourBlanco from './svgs/TourBlanco.svg';


const Header1 = ({ setShowTour }) => {
  return (
    <header className="bg-transparent text-white fixed top-0 right-0 h-full p-4 z-50 flex flex-col items-end justify-center">
      <div className="container mx-auto flex flex-col items-end">

        <nav>
          <ul className="flex flex-col space-y-4 mr-2">
            <li>
              <a href="#" className="text-white hover:text-gray-300 font-gothic text-xl font-bold tracking-widest">
                <img src={StoreMonstruoBlanco} className="w-24 h-12 object-contain" style={{ transform: 'rotate(-6deg)' }} />  
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 font-gothic text-xl font-bold tracking-widest">
                <img src={FotosMonstruoBlanco} className="w-24 h-12 object-contain" style={{ transform: 'rotate(-6deg)' }} />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setShowTour(true)} className="text-white hover:text-gray-300 font-gothic text-xl font-bold tracking-widest">
                <img src={TourBlanco} className="w-24 h-12 object-contain" style={{ transform: 'rotate(-6deg)' }} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header1;
