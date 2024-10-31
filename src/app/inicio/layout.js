'use client';

import { useState } from 'react';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Breadcrumb from "@/components/Breadcrumb";
import { Toaster } from 'sonner'; // Asegúrate de importar Toaster

const ClientLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [title, setTitle] = useState('Inicio');
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
      {/* Sonner Toaster para notificaciones */}
      <Toaster />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setTitle={handleSetTitle}
      />

      <div className="flex-1 p-6 bg-gray-100">
        <Header 
          toggleSidebar={toggleSidebar} 
          isSidebarOpen={isSidebarOpen} 
          title={title}
          userImage={userImage} 
        />

        <Breadcrumb currentPath={title} /> 

        <div className="mt-6 flex justify-center">
          <div className="w-full">
            {children} {/* Aquí se renderizan las subrutas de la página */}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default ClientLayout;