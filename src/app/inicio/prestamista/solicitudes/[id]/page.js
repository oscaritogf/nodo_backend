'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaUserCircle,
  FaMoneyBillAlt,
  FaPercentage,
  FaCalendarAlt,
  FaBuilding,
  FaChartLine,
} from 'react-icons/fa';
import { FetchLoanDetails } from '@/services/FetchLoanDetails';
import { CreateLoanInstallments } from '@/services/CreateLoanInstallments'; // Importa el servicio
import { jwtDecode } from "jwt-decode";

export default function LoanDetail({ params: paramsPromise }) {
  const [loan, setLoan] = useState(null);
  const [isOn, setIsOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commissionDetails, setCommissionDetails] = useState(null);
  const router = useRouter();
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserID(decodedToken.UsuarioID); // Ajusta según el nombre del campo en el token
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }
  }, []);


  

  useEffect(() => {
    const fetchLoan = async () => {
      try {
        const params = await paramsPromise; // Desenrollar el Promise de `params`
        const loanId = parseInt(params.id, 10); // Extraer el ID de los parámetros
        const loanData = await FetchLoanDetails(loanId); // Llamar al servicio con el ID
        setLoan(loanData); // Guardar los datos del préstamo en el estado
      } catch (error) {
        console.error('Error al obtener los detalles del préstamo:', error);
      }
    };

    fetchLoan();
  }, [paramsPromise]);
  


  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const handleAccept = () => {
    const commission = loan.Monto * 0.05; // Cálculo de la comisión
    const totalAmount = loan.Monto + commission; // Monto total

    setCommissionDetails({
      amount: loan.Monto,
      commission,
      totalAmount,
    });

    setIsModalOpen(true); // Mostrar la modal
  };

  const confirmTransaction = async () => {
    setIsModalOpen(false);

    try {
      // Llamar al servicio para crear las cuotas
      const loanData = {
        solicitudId: loan.SolicitudID,
        usuarioId: loan.UsuarioID,
        prestamistaId: userID,
      };

      // Imprimir los datos que se van a enviar al servicio
    console.log('Datos enviados al servicio:', loanData);


      const result = await CreateLoanInstallments(loanData); // Ejecutar el servicio

      // Manejar el resultado de la transacción
      console.log('Resultado de la transacción:', result);

      // Redirigir o mostrar un mensaje de éxito, dependiendo de tu flujo
      router.push(`http://localhost:3000/inicio/prestamista/solicitudes`); // Asegúrate de actualizar la ruta de éxito
    } catch (error) {
      console.error('Error al confirmar la transacción:', error);
    }
  };

  const handleButtonClick = () => {
    if (isOn) {
      router.push(
        `http://localhost:3000/inicio/prestamista/solicitudes/${loan.SolicitudID}/oferta?solicitudId=${loan.SolicitudID}`
      );
    } else {
      handleAccept(); // Llamar a la lógica de aceptación
    }
  };

  if (!loan) {
    return <p className="text-center text-gray-600">Cargando datos del préstamo...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center md:items-start">
      <div className="bg-white rounded-lg shadow-md p-8 mb-6 w-full border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">
          Información del Solicitante
        </h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p className="font-semibold">Nombre:</p>
          <p className="text-right">{loan.NombreUsuario || 'Desconocido'}</p>
          <p className="font-semibold">Edad:</p>
          <p className="text-right">{loan.EdadUsuario} años</p>
          <p className="font-semibold">Ocupación:</p>
          <p className="text-right">{loan.OcupacionUsuario || 'No especificada'}</p>
          <p className="font-semibold">Ingresos mensuales:</p>
          <p className="text-right">L. {loan.Ingresos_Mensuales || 'No especificados'}</p>
          <p className="font-semibold">Historial crediticio:</p>
          <p className="text-right text-yellow-600">No disponible</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 w-full border border-gray-200">
        <h2 className="text-xl font-semibold mb-3 text-gray-700 text-center">
          Solicitud #{loan.SolicitudID}
        </h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaMoneyBillAlt className="mr-2 text-gray-600" />
            <span className="font-semibold">Monto Solicitado:</span>
          </div>
          <p className="text-right">{loan.Monto} L</p>
          <div className="flex items-center">
            <FaPercentage className="mr-2 text-gray-600" />
            <span className="font-semibold">Tasa de Interés:</span>
          </div>
          <p className="text-right">{loan.Tasa}%</p>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 text-gray-600" />
            <span className="font-semibold">Plazo:</span>
          </div>
          <p className="text-right">{loan.Plazo} meses</p>
          <div className="flex items-center">
            <FaChartLine className="mr-2 text-gray-600" />
            <span className="font-semibold">Riesgo:</span>
          </div>
          <p className="text-green-600 text-right">Bajo</p>
          <div className="flex items-center">
            <FaBuilding className="mr-2 text-gray-600" />
            <span className="font-semibold">Propósito:</span>
          </div>
          <p className="text-right">{loan.TipoPrestamo}</p>
          <span className="font-semibold">Oferta:</span>
          <div className="flex justify-end">
            <div
              onClick={toggleSwitch}
              className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                isOn ? 'bg-green-500' : 'bg-orange-500'
              }`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  isOn ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleButtonClick}
          className="mt-6 w-full py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
        >
          {isOn ? 'Ofertar' : 'Aceptar'}
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-md w-96">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">
              Confirmación de Transacción
            </h3>
            <p className="text-gray-700">
              <strong>Monto del Préstamo:</strong> L {commissionDetails.amount.toFixed(2)}
            </p>
            <p className="text-gray-700">
              <strong>Comisión (5%):</strong> L {commissionDetails.commission.toFixed(2)}
            </p>
            <p className="text-gray-700">
              <strong>Total a deducir:</strong> L {commissionDetails.totalAmount.toFixed(2)}
            </p>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
              >
                Cancelar
              </button>
              <button
                onClick={confirmTransaction}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
              >
                Confirmar Transacción
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

