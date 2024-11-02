'use client';

import React, { useState, useEffect } from 'react';

const InitToggleComponent = ({ onToggle, isPrestamistaEnabled }) => {
  const [selectedOption, setSelectedOption] = useState('prestatario');

  useEffect(() => {
    // Llama a la función onToggle cuando cambia el estado inicial
    onToggle(selectedOption);
  }, [selectedOption, onToggle]);

  const toggleOption = (option) => {
    if (option === 'prestamista' && !isPrestamistaEnabled) {
      return; // Evita cambiar a "prestamista" si no está habilitado
    }
    setSelectedOption(option); // Cambia la opción seleccionada
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative bg-gray-200 rounded-full p-1 shadow-sm">
        <div
          className={`absolute top-0 bottom-0 w-1/2 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
            selectedOption === 'prestamista' ? 'translate-x-0' : 'translate-x-full'
          }`}
        ></div>

        <div className="relative flex justify-between">
          <button
            onClick={() => toggleOption('prestamista')}
            className={`px-4 py-2 w-1/2 text-center rounded-full z-10 transition-colors duration-300 ${
              selectedOption === 'prestamista'
                ? 'text-gray-900 font-semibold'
                : 'text-gray-600'
            } ${!isPrestamistaEnabled ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={!isPrestamistaEnabled}
          >
            Prestamista
          </button>
          <button
            onClick={() => toggleOption('prestatario')}
            className={`px-4 py-2 w-1/2 text-center rounded-full z-10 transition-colors duration-300 ${
              selectedOption === 'prestatario'
                ? 'text-gray-900 font-semibold'
                : 'text-gray-600'
            }`}
          >
            Prestatario
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitToggleComponent;
