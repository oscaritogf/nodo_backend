'use client';

import { useState } from 'react';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Breadcrumb from "@/components/Breadcrumb"; // Nuevo componente Breadcrumb

const ClientLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [title, setTitle] = useState('Inicio'); // Estado del título
  const [userImage, setUserImage] = useState('/images/perfil_user.jpg');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Función para actualizar el título desde el Sidebar
  const handleSetTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setTitle={handleSetTitle} // Pasamos la función para actualizar el título
      />

      <div className="flex-1 p-6 bg-gray-100">
        <Header 
          toggleSidebar={toggleSidebar} 
          isSidebarOpen={isSidebarOpen} 
          title={title} // Muestra el título actualizado
          userImage={userImage} 
        />

        <Breadcrumb currentPath={title} /> 

        <div className="mt-6 flex justify-center"> {/* Aquí centramos el contenido */}
          <div className="w-full "> {/* Limita el ancho máximo del contenido */}
            {children} {/* Aquí se renderizan las subrutas de la página */}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default ClientLayout;

