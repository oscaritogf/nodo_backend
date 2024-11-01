'use client';

import { useState, useEffect } from 'react';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import RightPanel from "@/components/RightPanel";
import { Toaster } from 'sonner';
import SocialFooter from "@/components/SocialFooter"; // Importa el SocialFooter

const ClientLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [title, setTitle] = useState('Inicio');
  const [userImage, setUserImage] = useState('/images/perfil_user.jpg');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
        setIsDesktop(true);
      } else {
        setIsSidebarOpen(false);
        setIsDesktop(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (!isDesktop) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const handleSetTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900  ">
      <Toaster />
      <div className="flex flex-1 h-full ">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          setTitle={handleSetTitle}
        />
        <div className={`flex-1 p-6 bg-gray-100 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'} flex flex-col` }>
          <Header
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            title={title}
            userImage={userImage}
            isDesktop={isDesktop}
          />

          <div className="flex flex-1 h-full " >

            <div className="flex-1 flex justify-center mx-auto ">
              
              <div className="w-full h-full">{children}</div>

              {isDesktop && <RightPanel  />}
              
            </div>
         
          </div>

        </div>
      </div>
      {!isDesktop && <BottomNav />}
    </div>
  );
};

export default ClientLayout;
