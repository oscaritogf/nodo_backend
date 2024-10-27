// src/components/BottomNav.js
'use client';

import { HomeIcon, ShoppingBagIcon, BellIcon } from '@heroicons/react/outline';

function BottomNav({ onNavigate, currentPath }) {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-orange-500 p-4 flex justify-around items-center shadow-md sm:hidden"
      style={{
        backgroundColor: "#E0793F",
        boxShadow: "0 1px 10px rgba(0, 0, 0, 0.7)",
      }}
    >
      <button 
        className={`flex flex-col items-center ${currentPath === '/inicio' ? 'text-white' : 'text-gray-300'}`}
        onClick={() => onNavigate('inicio')}
      >
        <HomeIcon className="h-6 w-6" />
      </button>
      <button 
        className={`flex flex-col items-center ${currentPath === '/prestamista' ? 'text-white' : 'text-gray-300'}`}
        onClick={() => onNavigate('prestamista')}
      >
        <ShoppingBagIcon className="h-6 w-6" />
      </button>
      <button 
        className={`flex flex-col items-center ${currentPath === '/prestatario' ? 'text-white' : 'text-gray-300'}`}
        onClick={() => onNavigate('prestatario')}
      >
        <BellIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default BottomNav;