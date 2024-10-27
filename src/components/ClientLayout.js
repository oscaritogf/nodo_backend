'use client';

import { useState, useEffect } from 'react';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Breadcrumb from "@/components/Breadcrumb"; // Nuevo componente Breadcrumb

const ClientLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [title, setTitle] = useState('Inicio');
  const [userImage, setUserImage] = useState('/images/perfil_user.jpg');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Función que actualiza el título basado en la opción seleccionada en el sidebar
  const handleNavigate = (selectedTitle) => {
    setTitle(selectedTitle); // Actualiza el título
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar
        onNavigate={handleNavigate} // Pasamos la función para actualizar el título
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        currentPath={window.location.pathname} // Pasa la ruta actual
      />

      <div className="flex-1 p-6 bg-gray-100">
        <Header 
          toggleSidebar={toggleSidebar} 
          isSidebarOpen={isSidebarOpen} 
          title={title} // Muestra el título actualizado
          userImage={userImage} 
        />

        {/* Breadcrumb o Ruta de Navegación */}
        <Breadcrumb currentPath={window.location.pathname} />

        <div className="mt-6">
          {children}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default ClientLayout;
