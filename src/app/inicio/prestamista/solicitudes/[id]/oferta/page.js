'use client';

import React, { useState, useEffect } from 'react';
import { CreateLoanOffer } from '@/services/CreateLoanOffer';
import { toast } from 'sonner'; // Si usas Sonner para notificaciones
import { useSearchParams } from 'next/navigation';
import { jwtDecode}  from 'jwt-decode'; // Asegúrate de tener esta biblioteca instalada

const LoanOfferForm = () => {
  const searchParams = useSearchParams();
  const solicitudId = searchParams.get('solicitudId'); // Obtener solicitudId de los parámetros de consulta

  const [offerAmount, setOfferAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [termMonths, setTermMonths] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  // Obtener y decodificar el token al montar el componente
  useEffect(() => {
    const token = localStorage.getItem('token'); // Suponiendo que el token está en localStorage
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Decodificar el token
        setUserId(decodedToken.UsuarioID); // Guardar el userId del token
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        toast.error('Error al procesar la información del usuario.');
      }
    } else {
      console.warn('Token no encontrado');
      toast.error('No se encontró un token válido.');
    }
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validar inputs
    if (!offerAmount || !interestRate || !termMonths) {
      toast.error('Todos los campos son obligatorios.');
      return;
    }
  
    if (!solicitudId) {
      toast.error('No se encontró el ID de la solicitud.');
      return;
    }
  
    if (!userId) {
      toast.error('No se pudo obtener la información del usuario.');
      return;
    }
  
    const offerData = {
      monto: parseFloat(offerAmount),
      tasa: parseFloat(interestRate),
      plazo: parseInt(termMonths, 10),
      solicitudId: parseInt(solicitudId, 10), // Usar solicitudId extraído de la URL
      prestamistaId: parseInt(userId, 10), // Usar el userId extraído del token
    };
  
    console.log('Datos enviados al servicio:', offerData);
  
    try {
      setLoading(true);
      const response = await CreateLoanOffer(offerData); // Llamar al servicio
      console.log('Respuesta del servicio:', response);
      toast.success('Oferta enviada con éxito.');
    } catch (error) {
      console.error('Error al crear la oferta:', error);
  
      // Verificar si el mensaje de error indica que ya existe una oferta
      if (
        error.message.includes('Ya existe una oferta para esta solicitud con este prestamista')
      ) {
        toast.error('Ya realizó una oferta para esta solicitud.');
      } else {
        toast.error('Ocurrió un error al enviar la oferta. Inténtelo nuevamente.');
      }
    } finally {
      setLoading(false);
    }
  };



  return (
    <form className="flex flex-col p-4 bg-white rounded shadow-lg w-full max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">
        Proponga sus términos para la solicitud
      </h2>

      <div className="relative mb-6">
        <label htmlFor="offerAmount" className="block text-xs font-semibold text-custom-gray mb-4">
          Monto de la Oferta:
        </label>
        <input
          id="offerAmount"
          type="number"
          value={offerAmount}
          onChange={(e) => setOfferAmount(e.target.value)}
          placeholder="Ingrese monto de la oferta"
          className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray"
          required
        />
      </div>

      <div className="relative mb-6">
        <label htmlFor="interestRate" className="block text-xs font-semibold text-custom-gray mb-4">
          Tasa de Interés (%):
        </label>
        <input
          id="interestRate"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Ingrese la tasa de interés"
          className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray"
          required
        />
      </div>

      <div className="relative mb-6">
        <label htmlFor="termMonths" className="block text-xs font-semibold text-custom-gray mb-4">
          Plazo (meses):
        </label>
        <input
          id="termMonths"
          type="number"
          value={termMonths}
          onChange={(e) => setTermMonths(e.target.value)}
          placeholder="Ingrese plazo en meses"
          className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray"
          required
        />
      </div>

      <button
        type="submit"
        className={`w-full py-4 px-3 text-white rounded-md font-bold ${loading ? 'bg-gray-400' : 'bg-custom-orange'}`}
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar oferta'}
      </button>
    </form>
  );
};

export default LoanOfferForm;
