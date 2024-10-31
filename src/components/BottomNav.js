'use client'
import React from 'react';
import { HomeIcon, ShoppingBagIcon, BellIcon } from '@heroicons/react/outline';

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-orange-500 p-4 flex justify-around items-center shadow-md sm:hidden"
    style={{
        backgroundColor: "#E0793F",
        boxShadow: "0 1px 10px rgba(0, 0, 0, 0.7)",
      }}>
      <button className="flex flex-col items-center text-white">
        <HomeIcon className="h-6 w-6" />
      </button>
      <button className="flex flex-col items-center text-white">
        <ShoppingBagIcon className="h-6 w-6" />
      </button>
      <button className="flex flex-col items-center text-white">
        <BellIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default BottomNav;


