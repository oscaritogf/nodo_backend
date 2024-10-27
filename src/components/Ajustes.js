'use client';
import { useState } from 'react';
import { FaShieldAlt, FaLock, FaCreditCard, FaFileAlt } from 'react-icons/fa'; 
import SeguridadForm from './SeguridadForm'; // Asegúrate de tener este componente correctamente

const Ajustes = () => {
  const [activeOption, setActiveOption] = useState('menu');

  // Cambiar entre menú y el formulario de seguridad
  const handleNavigation = (option) => {
    setActiveOption(option);
  };

  // Renderizar el formulario de seguridad si "seguridad" es seleccionado
  if (activeOption === 'seguridad') {
    return <SeguridadForm />;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <div className="space-y-4">
        {/* Opción Seguridad */}
        <button
          onClick={() => handleNavigation('seguridad')}
          className="flex items-center w-full p-4 border border-gray-300 rounded-lg hover:shadow-md transition-shadow"
        >
          <FaShieldAlt className="text-gray-700 mr-4" />
          <div className="text-left">
            <p className="text-gray-800 font-semibold">Seguridad</p>
            <p className="text-gray-600 text-sm">Administra la seguridad de tu cuenta</p>
          </div>
        </button>
        
        {/* Opción Privacidad */}
        <button className="flex items-center w-full p-4 border border-gray-300 rounded-lg hover:shadow-md transition-shadow">
          <FaLock className="text-gray-700 mr-4" />
          <div className="text-left">
            <p className="text-gray-800 font-semibold">Privacidad</p>
            <p className="text-gray-600 text-sm">Controla quién puede ver tu información</p>
          </div>
        </button>

        {/* Opción Métodos de pago */}
        <button className="flex items-center w-full p-4 border border-gray-300 rounded-lg hover:shadow-md transition-shadow">
          <FaCreditCard className="text-gray-700 mr-4" />
          <div className="text-left">
            <p className="text-gray-800 font-semibold">Métodos de pago</p>
            <p className="text-gray-600 text-sm">Administra tus tarjetas bancarias</p>
          </div>
        </button>

        {/* Opción Documentos */}
        <button className="flex items-center w-full p-4 border border-gray-300 rounded-lg hover:shadow-md transition-shadow">
          <FaFileAlt className="text-gray-700 mr-4" />
          <div className="text-left">
            <p className="text-gray-800 font-semibold">Documentos</p>
            <p className="text-gray-600 text-sm">Actualizar tus documentos fiscales</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Ajustes;

