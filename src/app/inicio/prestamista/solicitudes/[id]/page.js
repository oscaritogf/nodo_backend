'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaUserCircle, FaMoneyBillAlt, FaPercentage, FaCalendarAlt, FaBuilding, FaChartLine } from 'react-icons/fa';

const loansData = [
  { id: 1, name: 'Junior Steven Garcia', amount: '2,000 L', interest: '3%', term: '12 meses', type: 'Personal', age: 24, occupation: 'Ing. Sistemas', monthlyIncome: '$25,000', creditHistory: 'Bueno', purpose: 'Negocio' },
  { id: 2, name: 'Juan Andree Castillo', amount: '800 L', interest: '6%', term: '6 meses', type: 'Vehicular', age: 30, occupation: 'Doctor', monthlyIncome: '$18,000', creditHistory: 'Aceptable', purpose: 'Vehículo' },
];

export default function LoanDetail({ params }) {
  const [loan, setLoan] = useState(null);
  const [isOn, setIsOn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      const loanId = parseInt(resolvedParams.id, 10);
      const loanData = loansData.find((loan) => loan.id === loanId);
      setLoan(loanData);
    }
    fetchParams();
  }, [params]);

  if (!loan) return <p className="text-center text-gray-600">Cargando datos del préstamo...</p>;

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const handleButtonClick = () => {
    if (isOn) {
      router.push(`http://localhost:3000/inicio/prestamista/solicitudes/${loan.id}/oferta`);
    } else {
      alert("Solicitud aceptada");
    }
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center md:items-start">
      <div className="bg-white rounded-lg shadow-md p-8 mb-6 w-full border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">Información del Solicitante</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p className="font-semibold">Nombre:</p>
          <p className="text-right">{loan.name}</p>
          <p className="font-semibold">Edad:</p>
          <p className="text-right">{loan.age} años</p>
          <p className="font-semibold">Ocupación:</p>
          <p className="text-right">{loan.occupation}</p>
          <p className="font-semibold">Ingresos mensuales:</p>
          <p className="text-right">{loan.monthlyIncome}</p>
          <p className="font-semibold">Historial crediticio:</p>
          <p className={`${loan.creditHistory === 'Bueno' ? 'text-green-600' : 'text-yellow-600'} text-right`}>{loan.creditHistory}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 w-full border border-gray-200">
        <h2 className="text-xl font-semibold mb-3 text-gray-700 text-center">Solicitud #{loan.id}</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaMoneyBillAlt className="mr-2 text-gray-600" />
            <span className="font-semibold">Monto Solicitado:</span>
          </div>
          <p className="text-right">{loan.amount}</p>
          <div className="flex items-center">
            <FaPercentage className="mr-2 text-gray-600" />
            <span className="font-semibold">Tasa de Interés:</span>
          </div>
          <p className="text-right">{loan.interest}</p>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 text-gray-600" />
            <span className="font-semibold">Plazo:</span>
          </div>
          <p className="text-right">{loan.term}</p>
          <div className="flex items-center">
            <FaChartLine className="mr-2 text-gray-600" />
            <span className="font-semibold">Riesgo:</span>
          </div>
          <p className="text-green-600 text-right">Bajo</p>
          <div className="flex items-center">
            <FaBuilding className="mr-2 text-gray-600" />
            <span className="font-semibold">Propósito:</span>
          </div>
          <p className="text-right">{loan.purpose}</p>
          <span className="font-semibold">Oferta:</span>
          <div className="flex justify-end">
            <div
              onClick={toggleSwitch}
              className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-green-500' : 'bg-orange-500'}`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${isOn ? 'translate-x-6' : 'translate-x-0'}`}
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
    </div>
  );
}


