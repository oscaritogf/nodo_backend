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

  const [habilitado, setHabilitado] = useState(true);
  const [ultimaActualizacion, setUltimaActualizacion] = useState('2024-10-31');
  const [constanciaBancaria, setConstanciaBancaria] = useState(true);

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
    <div className="bg-gray-100 p-6 lg:p-10 lg:pt-16 shadow-lg rounded-2xl w-full max-w-7xl mx-auto text-custom-gray">
      <div
        className="bg-gradient-to-br from-custom-orange-light to-custom-orange-dark rounded-2xl p-8"
        style={{ padding: '1rem' }}
      >
        <div className="bg-white rounded-xl p-8 shadow-lg h-full">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center lg:text-left">
            Solicitud de Préstamo
          </h2>

          <div className="mb-8 lg:flex lg:space-x-8">
            {/* Detalles del Prestatario */}
            <div className="lg:w-1/3">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Detalles del Prestatario</h3>
              <div className="space-y-4">
                <p><strong>Nombre:</strong> Juan Pérez</p>
                <p><strong>Documento:</strong> 1234-5678-9012</p>
                <p><strong>Correo:</strong> juan.perez@ejemplo.com</p>
                <p><strong>Teléfono:</strong> +1 234 567 8901</p>
              </div>
              
              {/* Estado de Habilitación */}
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

              {/* Constancia Bancaria */}
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

            {/* Formulario de Solicitud */}
            <div className="flex-1 mt-10 lg:mt-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
                Ingrese sus condiciones para este préstamo
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Monto de la oferta */}
                <div>
                  <label htmlFor="montoOferta" className="block text-lg font-semibold text-gray-800 mb-2">
                    Monto de la Oferta:
                  </label>
                  <input
                    id="montoOferta"
                    type="number"
                    placeholder="Ingrese monto de la oferta"
                    className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.montoOferta}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Tasa de interés */}
                <div>
                  <label htmlFor="tasaInteres" className="block text-lg font-semibold text-gray-800 mb-2">
                    Tasa de Interés (%):
                  </label>
                  <input
                    id="tasaInteres"
                    type="number"
                    placeholder="Ingrese la tasa de interés"
                    className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.tasaInteres}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Plazo en meses */}
                <div>
                  <label htmlFor="plazo" className="block text-lg font-semibold text-gray-800 mb-2">
                    Plazo (meses):
                  </label>
                  <input
                    id="plazo"
                    type="number"
                    placeholder="Ingrese plazo en meses"
                    className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.plazo}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Propósito del préstamo */}
                <div>
                  <label htmlFor="proposito" className="block text-lg font-semibold text-gray-800 mb-2">
                    Propósito:
                  </label>
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <button
                      type="button"
                      className="flex flex-col items-center p-4 border rounded-full shadow-md hover:bg-gray-200"
                      onClick={() => setFormData({ ...formData, proposito: 'vivienda' })}
                    >
                      <span className="text-3xl">🏠</span>
                      <span>Vivienda</span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col items-center p-4 border rounded-full shadow-md hover:bg-gray-200"
                      onClick={() => setFormData({ ...formData, proposito: 'estudios' })}
                    >
                      <span className="text-3xl">📚</span>
                      <span>Estudios</span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col items-center p-4 border rounded-full shadow-md hover:bg-gray-200"
                      onClick={() => setFormData({ ...formData, proposito: 'negocios' })}
                    >
                      <span className="text-3xl">💼</span>
                      <span>Negocios</span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col items-center p-4 border rounded-full shadow-md hover:bg-gray-200"
                      onClick={() => setFormData({ ...formData, proposito: 'otros' })}
                    >
                      <span className="text-3xl">🔧</span>
                      <span>Otros</span>
                    </button>
                  </div>
                </div>

                {/* Botón de Enviar Solicitud */}
                <div className="col-span-full flex justify-center mt-10">
                  <button
                    type="submit"
                    className="w-full lg:w-1/3 py-4 text-white font-bold rounded-full transition-transform transform hover:scale-105 shadow-lg"
                    style={{
                      background: 'linear-gradient(145deg, #FF8E53, #FF6A00)',
                      boxShadow: 'inset 0px 1px 3px rgba(255,255,255,0.2), 0px 4px 12px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    Enviar Solicitud
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


