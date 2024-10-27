// src/components/ToggleComponent.js
'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const ToggleComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const selectedOption = pathname.includes('prestamista') ? 'prestamista' : 
                        pathname.includes('prestatario') ? 'prestatario' : 
                        'prestamista';

  const toggleOption = (option) => {
    router.push(`/${option}`);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative bg-gray-200 rounded-full p-1 shadow-sm">
        <div
          className={`absolute top-0 bottom-0 w-1/2 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${
            selectedOption === 'prestamista' ? 'left-0' : 'left-1/2'
          }`}
        ></div>

        <div className="relative flex justify-between">
          <button
            onClick={() => toggleOption('prestamista')}
            className={`px-4 py-2 w-1/2 text-center rounded-full z-10 transition-all duration-300 ${
              selectedOption === 'prestamista'
                ? 'text-gray-900 font-semibold'
                : 'text-gray-600'
            }`}
          >
            Prestamista
          </button>
          <button
            onClick={() => toggleOption('prestatario')}
            className={`px-4 py-2 w-1/2 text-center rounded-full z-10 transition-all duration-300 ${
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

export default ToggleComponent;