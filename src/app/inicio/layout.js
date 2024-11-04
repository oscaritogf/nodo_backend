'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import RightPanel from "@/components/RightPanel";
import { Toaster } from 'sonner';

const ClientLayout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [title, setTitle] = useState('Inicio');
  const [userImage, setUserImage] = useState('/images/perfil_user.jpg');
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [usuarioID, setUsuarioID] = useState(null);
  const [userName, setUserName] = useState(''); //

  useEffect(() => {
    // Función para verificar y decodificar el token
    const decodeToken = () => {
      const token = localStorage.getItem('token'); // Asegúrate de usar 'token' como clave

      if (token) {
        try {
          const base64Url = token.split('.')[1]; // Obtén la carga útil (payload)
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split('')
              .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
              .join('')
          );

          const payload = JSON.parse(jsonPayload);
          console.log("Datos del token:", payload);
          setUserName(payload.primer_nombre || ''); 

          // Guarda el UsuarioID en el estado para usarlo en el componente
          setUsuarioID(payload.UsuarioID);
        } catch (error) {
          console.error("Error al decodificar el token:", error);
        }
      } else {
        console.log("No se encontró el token en localStorage");
        router.push('/login'); // Redirige al usuario si no hay token
      }
      setIsTokenChecked(true); // Marca como verificado el token
    };

    decodeToken();

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
  }, [router]);

  const toggleSidebar = () => {
    if (!isDesktop) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const handleSetTitle = (newTitle) => {
    setTitle(newTitle);
  };

  // Espera a que se verifique el token antes de renderizar
  if (!isTokenChecked) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Toaster />
      <div className="flex flex-1 h-full">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          setTitle={handleSetTitle}


        />
        <div className={`flex-1 p-6 bg-gray-100 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'} flex flex-col`}>
          <Header
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            title={title}
            userImage={userImage}
            isDesktop={isDesktop}
          />
          <div className="flex flex-1 h-full">
            <div className="flex-1 flex justify-center mx-auto">
              <div className="w-full h-full">{children}</div>
              {isDesktop && <RightPanel />}
            </div>
          </div>
        </div>
      </div>
      {!isDesktop && <BottomNav />}
    </div>
  );
};

export default ClientLayout;

