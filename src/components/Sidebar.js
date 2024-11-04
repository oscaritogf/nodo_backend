'use client';

import Link from 'next/link';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';

const Sidebar = ({ isSidebarOpen, toggleSidebar, setTitle }) => {
  return (
    <aside
      className={`text-white w-64 py-4 px-2 fixed inset-y-0 transform bg-custom-orange
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-30 transition-transform duration-300 h-auto`}
    >
      <div className="flex flex-col items-center mt-20">
        <Image 
          src="/images/logo_nodo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-auto h-auto" 
        />
        
      </div>

      <nav className="space-y-4 mt-10 ml-2">
        <Link href="/inicio" passHref legacyBehavior>
          <a
            className="flex items-center w-full p-4 rounded-lg transition-all duration-300 bg-white bg-opacity-20 hover:bg-opacity-40 hover:backdrop-blur-lg"
            onClick={() => {
              setTitle('Inicio'); 
              toggleSidebar(); 
            }}
          >
            <FaHome className="mr-2" /> Inicio
          </a>
        </Link>

        <Link href="/inicio/ajustes" passHref legacyBehavior>
          <a
            className="flex items-center w-full p-4 rounded-lg transition-all duration-300 bg-white bg-opacity-20 hover:bg-opacity-40 hover:backdrop-blur-lg"
            onClick={() => {
              setTitle('Ajustes');
              toggleSidebar();
            }}
          >
            <FaCog className="mr-2" /> Ajustes
          </a>
        </Link>

        <Link href="/inicio/prestatario" passHref legacyBehavior>
          <a
            className="flex items-center w-full p-4 rounded-lg transition-all duration-300 bg-white bg-opacity-20 hover:bg-opacity-40 hover:backdrop-blur-lg"
            onClick={() => {
              setTitle('Prestatario');
              toggleSidebar(); 
            }}
          >
            <FaUser className="mr-2" /> Prestatario
          </a>
        </Link>

        <Link href="/inicio/prestamista" passHref legacyBehavior>
          <a
            className="flex items-center w-full p-4 rounded-lg transition-all duration-300 bg-white bg-opacity-20 hover:bg-opacity-40 hover:backdrop-blur-lg"
            onClick={() => {
              setTitle('Prestamista'); 
              toggleSidebar();
            }}
          >
            <FaUser className="mr-2" /> Prestamista
          </a>
        </Link>
      </nav>

      {/* Botón para cerrar sesión */}
      <div className="absolute bottom-4 left-0 right-0 m-4">
        <Link href="/login" passHref legacyBehavior>
          <a
            className="flex items-center w-full p-4 rounded-lg transition-all duration-300 bg-red-600 hover:bg-red-500 hover:text-white"
            onClick={() => {
              toggleSidebar();
            }}
          >
            <FaSignOutAlt className="mr-2" /> Cerrar Sesión
          </a>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

