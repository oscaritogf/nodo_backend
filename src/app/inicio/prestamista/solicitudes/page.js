'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

// Simulación de datos como si vinieran de una API
const fetchLoans = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Junior Steven Garcia', amount: '2,000 L', interest: '3%', term: '12 meses', type: 'Personal' },
        { id: 2, name: 'Juan Andree Castillo', amount: '800 L', interest: '6%', term: '6 meses', type: 'Vehicular' },
        { id: 3, name: 'Sofia Valentina Gonzales', amount: '500 L', interest: '6.5%', term: '9 meses', type: 'Hipotecario' },
        { id: 4, name: 'Gabriela Patricia Sanchez', amount: '8,000 L', interest: '3%', term: '24 meses', type: 'Comercial' },
        { id: 5, name: 'Ana Carolina Torres', amount: '1,000 L', interest: '3%', term: 'Personal' },
        { id: 6, name: 'Javier Eduardo Ramirez', amount: '2,000 L', interest: '3%', term: '18 meses', type: 'Vehicular' },
      ]);
    }, 1000);
  });
};

export default function LoanListMobile() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetchLoans().then((data) => {
      setLoans(data);
    });
  }, []);

  return (
    <div className="p-4 w-full overflow-hidden">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Menu</h2>
      
      {/* Barra de búsqueda */}
      <div className="flex items-center bg-gray-50 rounded-full p-3 mb-4 shadow-md w-full">
        <FaSearch className="text-gray-400 ml-2" />
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent focus:outline-none ml-2 w-full text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Filtros Dropdowns */}
      <div className="flex gap-2 mb-4 w-full">
        <select className="flex-1 bg-gray-50 px-4 py-2 rounded-full text-gray-700 focus:outline-none shadow-md w-full">
          <option>Monto</option>
          <option>Menor a Mayor</option>
          <option>Mayor a Menor</option>
        </select>

        <select className="flex-1 bg-gray-50 px-4 py-2 rounded-full text-gray-700 focus:outline-none shadow-md w-full">
          <option>Plazo</option>
          <option>6 meses</option>
          <option>12 meses</option>
          <option>18 meses</option>
          <option>24 meses</option>
        </select>

        <select className="flex-1 bg-gray-50 px-4 py-2 rounded-full text-gray-700 focus:outline-none shadow-md w-full">
          <option>Interés</option>
          <option>Menor a Mayor</option>
          <option>Mayor a Menor</option>
        </select>
      </div>

      {/* Lista de Préstamos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
        {loans.map((loan) => (
          <Link key={loan.id} href={`http://localhost:3000/inicio/prestamista/solicitudes/${loan.id}`}>
            <div className="flex items-center bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full cursor-pointer">
              <FaUserCircle className="text-3xl text-gray-500 mr-4" />
              <div className="flex-1">
                <p className="font-semibold text-gray-700">{loan.name}</p>
                <p className="text-gray-500">Monto: {loan.amount}</p>
                <p className="text-gray-500">Plazo: {loan.term}</p>
                <p className="text-gray-500">Tipo: {loan.type}</p>
              </div>
              <div className="text-gray-500 text-sm ml-4">Interés: {loan.interest}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
