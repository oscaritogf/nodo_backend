'use client';

import React, { useState, useEffect } from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const LoanManagementResponsive = () => {
  const [activeLoans, setActiveLoans] = useState([]);
  const [offeredLoans, setOfferedLoans] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOnActiveLoans, setIsOnActiveLoans] = useState(true); // Toggle entre listas
  const [filterAmount, setFilterAmount] = useState('');
  const [filterInterest, setFilterInterest] = useState('');
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    setActiveLoans([
      { id: 1, name: 'Gabriela Patricia Sanchez', amount: 8000, interest: 3, term: 12, status: 'Aceptado' },
      { id: 2, name: 'Ana Carolina Torres', amount: 1000, interest: 3, term: 6, status: 'Aceptado' },
      { id: 3, name: 'Javier Eduardo Ramirez', amount: 2000, interest: 3, term: 24, status: 'Rechazado' },
    ]);

    setOfferedLoans([
      { id: 4, name: 'Junior Steven Garcia', amount: 2000, interest: 3, term: 12 },
      { id: 5, name: 'Juan Andree Castillo', amount: 800, interest: 6, term: 6 },
      { id: 6, name: 'Sofia Valentina Gonzales', amount: 500, interest: 6.5, term: 18 },
    ]);
  }, []);

  const handleToggle = () => {
    setIsOnActiveLoans(!isOnActiveLoans);
  };

  let filteredLoans = (isOnActiveLoans ? activeLoans : offeredLoans).filter((loan) =>
    loan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filterAmount) {
    filteredLoans = filteredLoans.filter((loan) =>
      filterAmount === '1'
        ? loan.amount <= 1000
        : filterAmount === '2'
        ? loan.amount > 1000 && loan.amount <= 5000
        : loan.amount > 5000
    );
  }

  if (filterInterest) {
    filteredLoans = filteredLoans.filter((loan) =>
      filterInterest === '1'
        ? loan.interest <= 4
        : filterInterest === '2'
        ? loan.interest > 4 && loan.interest <= 6
        : loan.interest > 6
    );
  }

  if (filterTerm) {
    filteredLoans = filteredLoans.filter((loan) =>
      filterTerm === '1'
        ? loan.term <= 12
        : filterTerm === '2'
        ? loan.term > 12 && loan.term <= 24
        : loan.term > 24
    );
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Gestión de Préstamos</h2>

      {/* Barra de búsqueda */}
      <div className="flex items-center bg-white rounded-full p-3 shadow-md mb-4">
        <FaSearch className="text-gray-400 ml-2" />
        <input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent focus:outline-none ml-2 w-full text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        
        <select
          className="flex-1 bg-white px-4 py-2 rounded-full shadow-md text-gray-700"
          value={filterAmount}
          onChange={(e) => setFilterAmount(e.target.value)}
        >
          <option value="">Monto</option>
          <option value="1">Hasta 1,000 L</option>
          <option value="2">1,001 L - 5,000 L</option>
          <option value="3">Más de 5,000 L</option>
        </select>
        <select
          className="flex-1 bg-white px-4 py-2 rounded-full shadow-md text-gray-700"
          value={filterInterest}
          onChange={(e) => setFilterInterest(e.target.value)}
        >
          <option value="">Interés</option>
          <option value="1">Hasta 4%</option>
          <option value="2">4.1% - 6%</option>
          <option value="3">Más de 6%</option>
        </select>
        <select
          className="flex-1 bg-white px-4 py-2 rounded-full shadow-md text-gray-700"
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
        >
          <option value="">Plazo</option>
          <option value="1">Hasta 12 meses</option>
          <option value="2">13 - 24 meses</option>
          <option value="3">Más de 24 meses</option>
        </select>
      </div>

      {/* Toggle */}
      <div className="relative bg-gray-200 rounded-full p-1 mb-4">
        <div
          className={`absolute top-0 bottom-0 w-1/2 bg-white rounded-full shadow-md transition-transform duration-300 ${
            isOnActiveLoans ? 'translate-x-0' : 'translate-x-full'
          }`}
        ></div>
        <div className="flex justify-between">
          <button
            onClick={handleToggle}
            className={`px-4 py-2 w-1/2 text-center transition-colors duration-300 ${
              isOnActiveLoans ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
          >
            P. Activos
          </button>
          <button
            onClick={handleToggle}
            className={`px-4 py-2 w-1/2 text-center transition-colors duration-300 ${
              !isOnActiveLoans ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
          >
            Ofertas
          </button>
        </div>
      </div>

      {/* Lista de préstamos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLoans.map((loan) => (
          <div
            key={loan.id}
            className="flex items-center bg-white p-4 rounded-lg shadow-md border cursor-pointer"
          >
            <FaUserCircle className="text-3xl text-gray-500 mr-4" />
            <div className="flex-1">
              <p className="font-semibold text-gray-700">{loan.name}</p>
              <p className="text-gray-500">Monto: {loan.amount} L</p>
              <p className="text-gray-500">Interés: {loan.interest}%</p>
              <p className="text-gray-500">Plazo: {loan.term} meses</p>
              {loan.status && <p className="text-green-500">{loan.status}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanManagementResponsive;

