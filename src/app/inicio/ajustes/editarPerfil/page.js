'use client'
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

export default function DetallesUsuario() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl shadow-md p-10 max-w-7xl mx-auto relative">
        
        {/* Contenedor de la Foto de Perfil y Botón de Editar */}
        <div className="absolute top-6 right-6 flex flex-col items-center space-y-2">
          <img
            src="/path/to/profile-photo.jpg" // Coloca la ruta de la foto de perfil aquí
            alt="Foto de Perfil"
            className="w-24 h-24 rounded-full object-cover shadow-lg"
          />
          <button
            onClick={handleEditClick}
            className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-500 transition"
          >
            <FaEdit size={18} />
          </button>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center lg:text-left">
            Detalles del Usuario
          </h2>

          {/* Información del Usuario */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="font-semibold text-gray-600">Nombre Completo:</p>
              <p className="text-gray-800">Juan Carlos Pérez García</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Fecha de Nacimiento:</p>
              <p className="text-gray-800">1990-01-15</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">DNI:</p>
              <p className="text-gray-800">1234-5678-9012</p>
            </div>
            <div>
              <label htmlFor="email" className="font-semibold text-gray-600">
                Email:
              </label>
              <input
                id="email"
                type="email"
                disabled={!isEditing}
                defaultValue="juan.perez@ejemplo.com"
                className={`w-full p-4 rounded-md bg-gray-100 ${
                  isEditing ? 'border border-gray-300' : 'border-none'
                }`}
              />
            </div>
            <div>
              <label htmlFor="telefono" className="font-semibold text-gray-600">
                Teléfono:
              </label>
              <input
                id="telefono"
                type="tel"
                disabled={!isEditing}
                defaultValue="+1 234 567 8901"
                className={`w-full p-4 rounded-md bg-gray-100 ${
                  isEditing ? 'border border-gray-300' : 'border-none'
                }`}
              />
            </div>
            <div>
              <label htmlFor="ingresos" className="font-semibold text-gray-600">
                Ingresos Mensuales:
              </label>
              <input
                id="ingresos"
                type="number"
                disabled={!isEditing}
                defaultValue="5000"
                className={`w-full p-4 rounded-md bg-gray-100 ${
                  isEditing ? 'border border-gray-300' : 'border-none'
                }`}
              />
            </div>
          </div>

          {/* Ocupaciones */}
          <div>
            <p className="font-semibold text-gray-800 mb-4">Ocupaciones</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
                <span>Ingeniero de Software</span>
                {isEditing && (
                  <button className="text-red-500">Eliminar</button>
                )}
              </div>
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
                <span>Consultor</span>
                {isEditing && (
                  <button className="text-red-500">Eliminar</button>
                )}
              </div>
            </div>
            {isEditing && (
              <button className="mt-4 bg-blue-600 text-white p-2 rounded-md shadow hover:bg-blue-500">
                Agregar Ocupación
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


