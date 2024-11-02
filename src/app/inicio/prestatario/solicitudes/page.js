'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function SolicitudPrestamo() {
  const [formData, setFormData] = useState({
    montoOferta: '',
    tasaInteres: '',
    plazo: '',
    proposito: '',
  });

  const [habilitado, setHabilitado] = useState(true); // Simula si el usuario está habilitado o no
  const [ultimaActualizacion, setUltimaActualizacion] = useState('2024-10-31'); // Última actualización de constancia
  const [constanciaBancaria, setConstanciaBancaria] = useState(true); // Estado de la constancia bancaria

  const router = useRouter();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!habilitado) {
      toast.error('No está habilitado para realizar la solicitud.');
      return;
    }

    toast.success('Se realizó su solicitud correctamente!!!');

    setTimeout(() => {
      router.push('/inicio/prestatario');
    }, 4000);
  };

  return (
    <div className="flex items-center  bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row p-8 pb-20 lg:max-w-5xl w-full lg:space-x-8 lg:mx-auto lg:pt-10 text-custom-gray bg-white shadow-2xl rounded-lg">
        
        {/* Detalles del Prestatario */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-xl font-semibold text-custom-gray mb-4">Detalles del Prestatario</h3>
          <div className="space-y-4">
            <p><strong>Nombre:</strong> Juan Pérez</p>
            <p><strong>Documento:</strong> 1234-5678-9012</p>
            <p><strong>Correo:</strong> juan.perez@ejemplo.com</p>
            <p><strong>Teléfono:</strong> +1 234 567 8901</p>
          </div>    

          <div className="mt-6 p-6 border rounded-lg shadow-lg bg-gray-50">
            <div className="flex items-center">
              <span className={`text-3xl ${habilitado ? 'text-green-600' : 'text-red-600'}`}>
                {habilitado ? '✔️' : '❌'}
              </span>
              <p className="font-semibold text-lg ml-4">Estado de Habilitación</p>
          </div>
              <p className={`mt-4 font-bold text-xl ${habilitado ? 'text-green-600' : 'text-red-600'}`}>
                {habilitado ? 'Habilitado para solicitar préstamo' : 'No habilitado para solicitar préstamo'}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {habilitado
                  ? 'Usted cumple con los requisitos para realizar esta solicitud.'
                  : 'Debe cumplir con los requisitos para poder solicitar el préstamo.'}
              </p>
        </div>

        <div className="mt-6 p-6 border rounded-lg shadow-lg bg-gray-50">
          <div className="flex items-center">
            <span className={`text-3xl ${constanciaBancaria ? 'text-green-600' : 'text-yellow-500'}`}>
              {constanciaBancaria ? '✔️' : '⚠️'}
            </span>
            <p className="font-semibold text-lg ml-4">Constancia Bancaria</p>
          </div>
          <p className={`mt-4 font-bold text-xl ${constanciaBancaria ? 'text-green-600' : 'text-yellow-500'}`}>
            {constanciaBancaria ? 'Constancia válida' : 'Constancia no válida'}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {constanciaBancaria
              ? 'Su constancia bancaria cumple con los requisitos vigentes.'
              : 'Por favor, actualice su constancia bancaria.'}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Última actualización: <span className="font-medium">{ultimaActualizacion}</span>
          </p>
        </div>

        </div>

        {/* Formulario */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-custom-gray mb-8 text-center lg:text-left">
            Ingrese sus condiciones para este préstamo
          </h2>
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            {/* Monto de la oferta */}
            <div>
              <label htmlFor="montoOferta" className="block text-sm font-semibold text-custom-gray mb-2 lg:text-lg">
                Monto de la Oferta:
              </label>
              <input
                id="montoOferta"
                type="number"
                placeholder="Ingrese monto de la oferta"
                className="w-full p-4 mt-1 text-lg rounded-md bg-custom-fondoInput shadow-md"
                value={formData.montoOferta}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Tasa de interés */}
            <div>
              <label htmlFor="tasaInteres" className="block text-sm font-semibold text-custom-gray mb-2 lg:text-lg">
                Tasa de Interés (%):
              </label>
              <input
                id="tasaInteres"
                type="number"
                placeholder="Ingrese la tasa de interés"
                className="w-full p-4 mt-1 text-lg rounded-md bg-custom-fondoInput shadow-md"
                value={formData.tasaInteres}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Plazo en meses */}
            <div>
              <label htmlFor="plazo" className="block text-sm font-semibold text-custom-gray mb-2 lg:text-lg">
                Plazo (meses):
              </label>
              <input
                id="plazo"
                type="number"
                placeholder="Ingrese plazo en meses"
                className="w-full p-4 mt-1 text-lg rounded-md bg-custom-fondoInput shadow-md"
                value={formData.plazo}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Propósito del préstamo */}
            <div>
              <label htmlFor="proposito" className="block text-sm font-semibold text-custom-gray mb-2 lg:text-lg">
                Propósito:
              </label>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <button type="button" className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:bg-gray-200" onClick={() => setFormData({ ...formData, proposito: 'vivienda' })}>
                  <span className="text-3xl">🏠</span>
                  <span>Vivienda</span>
                </button>
                <button type="button" className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:bg-gray-200" onClick={() => setFormData({ ...formData, proposito: 'estudios' })}>
                  <span className="text-3xl">📚</span>
                  <span>Estudios</span>
                </button>
                <button type="button" className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:bg-gray-200" onClick={() => setFormData({ ...formData, proposito: 'negocios' })}>
                  <span className="text-3xl">💼</span>
                  <span>Negocios</span>
                </button>
                <button type="button" className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:bg-gray-200" onClick={() => setFormData({ ...formData, proposito: 'otros' })}>
                  <span className="text-3xl">🔧</span>
                  <span>Otros</span>
                </button>
              </div>
            </div>

            {/* Botón de enviar solicitud */}
            <div className="mt-10">
              <button
                type="submit"
                className="w-full py-4 px-3 text-white rounded-md font-bold text-lg transition-shadow duration-300 lg:shadow-lg lg:hover:shadow-xl"
                style={{ backgroundColor: '#E0793F', boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}
              >
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
