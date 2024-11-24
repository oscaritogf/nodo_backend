'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { CreateLoanRequest } from '@/services/CreateLoanRequest';

const SolicitudPrestamo = ({ onClose }) => {
  const [montoOferta, setMontoOferta] = useState('');
  const [tasaInteres, setTasaInteres] = useState('');
  const [plazo, setPlazo] = useState('');
  const [proposito, setProposito] = useState('');
  const [habilitado] = useState(true);

  const router = useRouter();
  const usuarioId = 70; // ID de usuario predeterminado

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!habilitado) {
      toast.error('No está habilitado para realizar la solicitud.');
      return;
    }

    const loanRequestData = {
      monto: parseFloat(montoOferta),
      tasa: parseFloat(tasaInteres),
      plazo: parseInt(plazo, 10),
      estado_aprobacionid: 1,
      tipo_prestamoid: parseInt(proposito, 10),
      usuarioId: usuarioId,
    };

    console.log("JSON generado para CreateLoanRequest:", loanRequestData);

    try {
      const response = await CreateLoanRequest(loanRequestData);
      console.log("Respuesta del servidor:", response);

      toast.success('Se realizó su solicitud correctamente!!!');
      setTimeout(() => {
        router.push('/inicio/prestatario');
      }, 4000);
      if (onClose) onClose();
    } catch (error) {
      console.error("Error en CreateLoanRequest:", error);
      toast.error(`Error al enviar la solicitud: ${error.message}`);
    }
  };

  return (
    <form className="flex flex-col p-4 bg-white rounded shadow-lg w-full max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">
        Solicitud de Préstamo
      </h2>

      <div className="relative mb-6">
        <label htmlFor="montoOferta" className="block text-xs font-semibold text-custom-gray mb-4">
          Monto de la Oferta:
        </label>
        <input
          id="montoOferta"
          type="number"
          value={montoOferta}
          onChange={(e) => setMontoOferta(e.target.value)}
          placeholder="Ingrese monto de la oferta"
          className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray"
          required
          style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
        />
      </div>

      <div className="relative mb-6">
        <label htmlFor="tasaInteres" className="block text-xs font-semibold text-custom-gray mb-4">
          Tasa de Interés (%):
        </label>
        <input
          id="tasaInteres"
          type="number"
          value={tasaInteres}
          onChange={(e) => setTasaInteres(e.target.value)}
          placeholder="Ingrese la tasa de interés"
          className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray"
          required
          style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
        />
      </div>

      <div className="relative mb-6">
        <label htmlFor="plazo" className="block text-xs font-semibold text-custom-gray mb-4">
          Plazo (meses):
        </label>
        <input
          id="plazo"
          type="number"
          value={plazo}
          onChange={(e) => setPlazo(e.target.value)}
          placeholder="Ingrese plazo en meses"
          className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray"
          required
          style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
        />
      </div>

      <div className="relative mb-6">
        <label htmlFor="proposito" className="block text-xs font-semibold text-custom-gray mb-4">
          Propósito:
        </label>
        <select
          id="proposito"
          value={proposito}
          onChange={(e) => setProposito(e.target.value)}
          className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray"
          required
          style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
        >
          <option value="">Seleccione el propósito</option>
          <option value="1">Préstamo Hipotecario</option>
          <option value="2">Préstamo Personal</option>
          <option value="3">Préstamo Vehicular</option>
          <option value="4">Préstamo Educativo</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-4 px-3 text-white rounded-md font-bold bg-custom-orange"
        style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}
      >
        Enviar Solicitud
      </button>
    </form>
  );
};

export default SolicitudPrestamo;