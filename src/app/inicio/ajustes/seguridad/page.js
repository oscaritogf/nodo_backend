import React from 'react';

export default function Seguridad() {
  return (
    <div className="bg-gray-100 p-6 lg:p-10 lg:pt-16 shadow-lg rounded-2xl w-full max-w-7xl mx-auto">
      <div
        className="bg-gradient-to-br from-custom-orange-light to-custom-orange-dark rounded-2xl p-8"
        style={{
          padding: '1rem',
        }}
      >
        <div className="bg-white rounded-xl p-8 shadow-lg h-full">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center lg:text-left">
            Administra la seguridad de tu cuenta
          </h2>

          <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            {/* Contraseña Actual */}
            <div>
              <label htmlFor="currentPassword" className="block text-lg font-semibold text-gray-800 mb-2">
                Contraseña actual:
              </label>
              <input
                id="currentPassword"
                type="password"
                placeholder="Ingresa tu contraseña actual"
                className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Nueva Contraseña */}
            <div>
              <label htmlFor="newPassword" className="block text-lg font-semibold text-gray-800 mb-2">
                Nueva Contraseña:
              </label>
              <input
                id="newPassword"
                type="password"
                placeholder="Ingresa tu nueva contraseña"
                className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Confirmar Contraseña */}
            <div>
              <label htmlFor="confirmPassword" className="block text-lg font-semibold text-gray-800 mb-2">
                Confirma tu nueva contraseña:
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirma tu nueva contraseña"
                className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Verificación de Email */}
            <div>
              <label htmlFor="emailVerification" className="block text-lg font-semibold text-gray-800 mb-2">
                Verificación de Email:
              </label>
              <input
                id="emailVerification"
                type="email"
                placeholder="Ingresa tu email para verificar"
                className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Autenticación de Dos Factores */}
            <div className="col-span-1 lg:col-span-2 flex items-center mt-4">
              <input
                type="checkbox"
                id="enable2FA"
                className="h-5 w-5 text-orange-500 focus:ring-2 focus:ring-orange-500 mr-4"
              />
              <label htmlFor="enable2FA" className="text-lg font-semibold text-gray-800">
                Habilitar autenticación de dos factores para mayor seguridad
              </label>
            </div>

            {/* Pregunta de Seguridad */}
            <div>
              <label htmlFor="securityQuestion" className="block text-lg font-semibold text-gray-800 mb-2">
                Pregunta de seguridad:
              </label>
              <select
                id="securityQuestion"
                className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>Selecciona una pregunta</option>
                <option>¿Cuál es el nombre de tu primer mascota?</option>
                <option>¿Cuál es tu ciudad de nacimiento?</option>
                <option>¿Cuál es tu comida favorita?</option>
              </select>
            </div>

            {/* Respuesta de Seguridad */}
            <div>
              <label htmlFor="securityAnswer" className="block text-lg font-semibold text-gray-800 mb-2">
                Respuesta a la pregunta de seguridad:
              </label>
              <input
                id="securityAnswer"
                type="text"
                placeholder="Ingresa tu respuesta"
                className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </form>

          {/* Botón de Envío */}
          <div className="col-span-full flex justify-center mt-10">
            <button
              type="submit"
              className="w-full lg:w-1/3 py-4 text-white font-bold rounded-full transition-transform transform hover:scale-105 shadow-lg"
              style={{
                background: 'linear-gradient(145deg, #FF8E53, #FF6A00)',
                boxShadow: 'inset 0px 1px 3px rgba(255,255,255,0.2), 0px 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            >
              Cambiar configuración de seguridad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
