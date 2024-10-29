'use client'; // Si es necesario para Next.js

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa useRouter para la redirección
import { toast } from 'sonner'; // Importa Sonner para mostrar la notificación

export default function SolicitudPrestamo() {
  const [formData, setFormData] = useState({
    montoOferta: '',
    tasaInteres: '',
    plazo: '',
    proposito: '',
  });

  const router = useRouter(); // Usamos el router para la redirección

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mostrar la notificación con Sonner
    toast.success('Se realizó su solicitud correctamente!!!');

    setTimeout(() => {
        router.push('/inicio/prestatario');
    }, 4000); // 4 segundos de retraso
  };

  return (
    <div className="flex flex-col p-6 pb-20 lg:max-w-lg lg:mx-auto lg:pt-10 text-custom-gray">
      <div>
        <h2 className="text-lg font-semibold text-custom-gray mb-4 text-center lg:text-left">
          Ingrese sus condiciones para este préstamo
        </h2>
        <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
          {/* Monto de la oferta */}
          <div className="mb-6">
            <label htmlFor="montoOferta" className="block text-xs font-semibold text-custom-gray mb-2 lg:text-base">
              Monto de la Oferta:
            </label>
            <input
              id="montoOferta"
              type="number" // Aseguramos que solo se puedan ingresar números
              placeholder="Ingrese monto de la oferta"
              className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput"
              style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
              value={formData.montoOferta}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Tasa de interés */}
          <div className="mb-6">
            <label htmlFor="tasaInteres" className="block text-xs font-semibold text-custom-gray mb-2 lg:text-base">
              Tasa de Interés (%):
            </label>
            <input
              id="tasaInteres"
              type="number"
              placeholder="Ingrese la tasa de interés"
              className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput"
              style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
              value={formData.tasaInteres}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Plazo en meses */}
          <div className="mb-6">
            <label htmlFor="plazo" className="block text-xs font-semibold text-custom-gray mb-2 lg:text-base">
              Plazo (meses):
            </label>
            <input
              id="plazo"
              type="number"
              placeholder="Ingrese plazo en meses"
              className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput"
              style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
              value={formData.plazo}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Propósito */}
          <div className="mb-6">
            <label htmlFor="proposito" className="block text-xs font-semibold text-custom-gray mb-2 lg:text-base">
              Propósito:
            </label>
            <div className="relative">
              <select
                id="proposito"
                className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput appearance-none"
                style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                value={formData.proposito}
                onChange={handleInputChange}
                required
              >
                <option value="">Seleccione Propósito del préstamo</option>
                <option value="vivienda">Compra de vivienda</option>
                <option value="estudios">Estudios</option>
                <option value="negocios">Negocios</option>
                <option value="otros">Otros</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Botón de enviar solicitud */}
          <div className="mt-auto lg:mt-10">
            <button
              type="submit"
              className="w-full py-4 px-3 text-white rounded-md font-bold transition-shadow duration-300 lg:shadow-lg lg:hover:shadow-xl"
              style={{ backgroundColor: '#E0793F', boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}
            >
              Enviar Solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
