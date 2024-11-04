import React, { createContext, useContext, useState } from "react";

// Crea el contexto de usuario
const UserContext = createContext();

// Proveedor de contexto de usuario
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Función para establecer los datos del usuario desde el token
  const setUserFromToken = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const payload = JSON.parse(jsonPayload);
      setUser({
        id: payload.UsuarioID,
        firstName: payload.primer_nombre,
        lastName: payload.primer_apellido,
        email: payload.email,
      });
    } catch (error) {
      console.error("Error al decodificar el token:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUserFromToken }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto de usuario
export const useUser = () => useContext(UserContext);
