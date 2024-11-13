
import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

const Tour1 = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Tour 2024</h2>
          <button onClick={closeModal} className="text-black hover:text-gray-600">
            <RiCloseLine size={24} />
          </button>
        </div>

        <div>
          <p className="mb-2">
            <strong>11 de Noviembre 2024</strong> - Niceto
          </p>
          <p className="mb-4">
            <strong>18 de Noviembre 2024</strong> - Strummer
          </p>
        </div>

        <button
          onClick={closeModal}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Tour1;




