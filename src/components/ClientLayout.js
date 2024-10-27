// src/components/ClientLayout.js
'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from "./Sidebar";
import Header from "./Header";
import BottomNav from "./BottomNav";

const ClientLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [title, setTitle] = useState('Inicio');
  const [userImage, setUserImage] = useState('/images/perfil_user.jpg');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Actualizar el título basado en la ruta actual
    const path = pathname.split('/').pop() || 'inicio';
    setTitle(path.charAt(0).toUpperCase() + path.slice(1));
  }, [pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigate = (route) => {
    router.push(`/${route}`);
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar
        onNavigate={handleNavigate}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        currentPath={pathname}
      />

      <div className="flex-1 p-6 bg-gray-100">
        <Header 
          toggleSidebar={toggleSidebar} 
          isSidebarOpen={isSidebarOpen} 
          title={title} 
          userImage={userImage} 
        />
        <div className="mt-6">
          {children}
        </div>
      </div>

      <BottomNav onNavigate={handleNavigate} currentPath={pathname} />
    </div>
  );
};

export default ClientLayout;
