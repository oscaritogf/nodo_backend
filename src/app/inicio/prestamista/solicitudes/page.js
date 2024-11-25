'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { GetPendingLoansByUserId } from '@/services/GetPendingLoansByUserId';
import { jwtDecode } from 'jwt-decode'; // Asegúrate de tener esta librería instalada

export default function LoanListMobile() {
  const [loans, setLoans] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterAmount, setFilterAmount] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [filterInterest, setFilterInterest] = useState('');
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(null); // Usamos un estado para almacenar el userId
  const itemsPerPage = 6;

  // Obtener y decodificar el token al montar el componente
  useEffect(() => {
    const token = localStorage.getItem('token'); // Suponiendo que el token está en localStorage
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.UsuarioID); // Guardamos el userId del token
      } catch (error) {
        console.error("Error al decodificar el token", error);
      }
    } else {
      toast.error('Token no encontrado');
    }
  }, []);

  useEffect(() => {
    if (userId !== null) { // Solo hacemos la llamada si tenemos un userId
      const loadLoans = async () => {
        setLoading(true);
        try {
          const data = await GetPendingLoansByUserId(userId); // Llamada al servicio con el userId
          setLoans(data);
        } catch (error) {
          console.error('Error fetching loans:', error);
        } finally {
          setLoading(false);
        }
      };

      loadLoans();
    }
  }, [userId]); // Ejecutamos este efecto cada vez que el userId cambie

  // Filtro de búsqueda
  let filteredLoans = loans.filter((loan) =>
    loan.NombreUsuario?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtro por rango de monto
  if (filterAmount) {
    if (filterAmount === '1') {
      filteredLoans = filteredLoans.filter((loan) => loan.Monto <= 1000);
    } else if (filterAmount === '2') {
      filteredLoans = filteredLoans.filter((loan) => loan.Monto > 1000 && loan.Monto <= 5000);
    } else if (filterAmount === '3') {
      filteredLoans = filteredLoans.filter((loan) => loan.Monto > 5000);
    }
  }

  // Filtro por rango de plazo
  if (filterTerm) {
    if (filterTerm === '1') {
      filteredLoans = filteredLoans.filter((loan) => loan.Plazo <= 12);
    } else if (filterTerm === '2') {
      filteredLoans = filteredLoans.filter((loan) => loan.Plazo > 12 && loan.Plazo <= 24);
    } else if (filterTerm === '3') {
      filteredLoans = filteredLoans.filter((loan) => loan.Plazo > 24);
    }
  }

  // Filtro por rango de interés
  if (filterInterest) {
    if (filterInterest === '1') {
      filteredLoans = filteredLoans.filter((loan) => loan.Tasa <= 4);
    } else if (filterInterest === '2') {
      filteredLoans = filteredLoans.filter((loan) => loan.Tasa > 4 && loan.Tasa <= 6);
    } else if (filterInterest === '3') {
      filteredLoans = filteredLoans.filter((loan) => loan.Tasa > 6);
    }
  }

  // Paginación
  const totalPages = Math.ceil(filteredLoans.length / itemsPerPage);
  const loansToShow = filteredLoans.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4 w-full overflow-hidden">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Menu</h2>

      {/* Barra de búsqueda */}
      <div className="flex items-center bg-gray-50 rounded-full p-3 mb-4 shadow-md w-full">
        <FaSearch className="text-gray-400 ml-2" />
        <input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reinicia la página al buscar
          }}
          className="bg-transparent focus:outline-none ml-2 w-full text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Filtros Dropdowns */}
      <div className="flex gap-2 mb-4 w-full">
        <select
          className="flex-1 bg-gray-50 px-4 py-2 rounded-full text-gray-700 focus:outline-none shadow-md"
          value={filterAmount}
          onChange={(e) => setFilterAmount(e.target.value)}
        >
          <option value="">Monto</option>
          <option value="1">Hasta 1,000 L</option>
          <option value="2">1,001 L - 5,000 L</option>
          <option value="3">Más de 5,000 L</option>
        </select>

        <select
          className="flex-1 bg-gray-50 px-4 py-2 rounded-full text-gray-700 focus:outline-none shadow-md"
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
        >
          <option value="">Plazo</option>
          <option value="1">Hasta 12 meses</option>
          <option value="2">13 - 24 meses</option>
          <option value="3">Más de 24 meses</option>
        </select>

        <select
          className="flex-1 bg-gray-50 px-4 py-2 rounded-full text-gray-700 focus:outline-none shadow-md"
          value={filterInterest}
          onChange={(e) => setFilterInterest(e.target.value)}
        >
          <option value="">Interés</option>
          <option value="1">Hasta 4%</option>
          <option value="2">4.1% - 6%</option>
          <option value="3">Más de 6%</option>
        </select>
      </div>

      {/* Lista de Préstamos */}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
          {loansToShow.map((loan) => (
            <Link key={loan.SolicitudID} href={`/inicio/prestamista/solicitudes/${loan.SolicitudID}`}>
              <div className="flex items-center bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full cursor-pointer">
                <FaUserCircle className="text-3xl text-gray-500 mr-4" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-700">{loan.NombreUsuario || 'Sin nombre'}</p>
                  <p className="text-gray-500">Monto: {loan.Monto} L</p>
                  <p className="text-gray-500">Plazo: {loan.Plazo} meses</p>
                  <p className="text-gray-500">Tipo: {loan.TipoPrestamo}</p>
                </div>
                <div className="text-gray-500 text-sm ml-4">Interés: {loan.Tasa}%</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Paginación */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          className={`px-3 py-1 rounded-full ${currentPage === 1 ? 'bg-gray-200' : 'bg-gray-50'} shadow`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-full ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-50 text-gray-700'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-3 py-1 rounded-full ${currentPage === totalPages ? 'bg-gray-200' : 'bg-gray-50'} shadow`}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
