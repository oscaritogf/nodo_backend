// src/components/Sidebar.js
'use client';

import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';

const Sidebar = ({ onNavigate, isSidebarOpen, toggleSidebar, currentPath }) => {
  const handleClick = (route) => {
    onNavigate(route);
    toggleSidebar();
  };

  const isActive = (route) => {
    return currentPath === `/${route}`;
  };

  return (
    <aside
      className={`text-white w-64 py-4 px-2 fixed inset-y-0 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } z-30 transition-transform duration-300`}
      style={{
        backgroundColor: '#E0793F',
        boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)',
      }}
    >
      <div className="flex flex-col items-center mt-20">
        <Image src="/images/logo_nodo.svg" alt="Logo" width={100} height={100} />
      </div>

      <nav className="space-y-4 mt-10 ml-2">
        {[
          { route: 'inicio', icon: FaHome, label: 'Inicio' },
          { route: 'ajustes', icon: FaCog, label: 'Ajustes' },
          { route: 'prestatario', icon: FaUser, label: 'Prestatario' },
          { route: 'prestamista', icon: FaUser, label: 'Prestamista' },
        ].map(({ route, icon: Icon, label }) => (
          <button
            key={route}
            className={`bg-custom-gray w-full px-4 py-2 rounded-full mt-4 transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:-translate-y-1 flex items-center ${
              isActive(route) ? 'text-orange-600' : ''
            }`}
            onClick={() => handleClick(route)}
          >
            <Icon className="mr-2" /> {label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-4 left-0 right-0 m-4">
        <button
          className="w-full px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 transition duration-300 flex items-center justify-center"
          onClick={() => console.log('Cerrar Sesión')}
        >
          <FaSignOutAlt className="mr-2" /> Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
