'use client';
import React, { useState, useEffect } from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import { GetLoanRequestByLender } from '@/services/GetLoanRequestByLender';
import { jwtDecode } from 'jwt-decode'; 

const LoanManagementResponsive = () => {
  const [loans, setLoans] = useState([]);
  const [offers, setOffers] = useState([
    {
      SolicitudID: 1,
      NombreUsuario: 'Juan Pérez',
      Monto: 2000,
      Tasa: 5,
      Plazo: 12,
      EstadoAprobacion: 'Aceptado',
    },
    {
      SolicitudID: 2,
      NombreUsuario: 'Ana López',
      Monto: 4000,
      Tasa: 4,
      Plazo: 18,
      EstadoAprobacion: 'Pendiente',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOnLoans, setIsOnLoans] = useState(true);
  const [filterAmount, setFilterAmount] = useState('');
  const [filterInterest, setFilterInterest] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [userId, setUserId] = useState(null);
  const loansPerPage = 10;


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
    if (userId) {
      const fetchLoans = async () => {
        try {
          const data = await GetLoanRequestByLender(userId); // Usamos userId aquí
          console.log('Datos recibidos del servicio:', data);
          
          // Asegúrate de que data sea un array antes de usarlo
          if (Array.isArray(data)) {
            setLoans(data); // Asignamos directamente la respuesta del servicio
          } else {
            console.error('Los datos recibidos no son un array:', data);
          }
        } catch (error) {
          console.error('Error al obtener los préstamos:', error);
        }
      };
  
      fetchLoans();
    }
  }, [userId]);





  const handleToggle = () => {

    setIsOnLoans(!isOnLoans);
    setCurrentPage(1);
  };

  let filteredLoans = (isOnLoans ? loans : offers).filter((loan) =>
    loan.NombreUsuario.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filterAmount) {
    filteredLoans = filteredLoans.filter((loan) =>
      filterAmount === '1'
        ? loan.Monto <= 1000
        : filterAmount === '2'
        ? loan.Monto > 1000 && loan.Monto <= 5000
        : loan.Monto > 5000
    );
  }

  if (filterInterest) {
    filteredLoans = filteredLoans.filter((loan) =>
      filterInterest === '1'
        ? loan.Tasa <= 4
        : filterInterest === '2'
        ? loan.Tasa > 4 && loan.Tasa <= 6
        : loan.Tasa > 6
    );
  }

  if (filterTerm) {
    filteredLoans = filteredLoans.filter((loan) =>
      filterTerm === '1'
        ? loan.Plazo <= 12
        : filterTerm === '2'
        ? loan.Plazo > 12 && loan.Plazo <= 24
        : loan.Plazo > 24
    );
  }

  const indexOfLastLoan = currentPage * loansPerPage;
  const indexOfFirstLoan = indexOfLastLoan - loansPerPage;
  const currentLoans = filteredLoans.slice(indexOfFirstLoan, indexOfLastLoan);

  const totalPages = Math.ceil(filteredLoans.length / loansPerPage);

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
          className={`absolute top-1/2 transform -translate-y-1/2 left-0 h-4/5 w-1/2 bg-white rounded-full shadow-md transition-transform duration-300 ${
            isOnLoans ? 'translate-x-0' : 'translate-x-full'
          }`}
        ></div>
        <div className="flex justify-between relative z-10">
          <button
            onClick={handleToggle}
            className={`px-4 py-2 w-1/2 text-center transition-colors duration-300 ${
              isOnLoans ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
          >
            Préstamos
          </button>
          <button
            onClick={handleToggle}
            className={`px-4 py-2 w-1/2 text-center transition-colors duration-300 ${
              !isOnLoans ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
          >
            Ofertas
          </button>
        </div>
      </div>

      {/* Lista de préstamos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentLoans.map((loan) =>
          isOnLoans ? (
            <Link key={loan.SolicitudID} href={`/inicio/prestamista/gestion/${loan.SolicitudID}`}>
              <div className="flex items-center bg-white p-4 rounded-lg shadow-md border cursor-pointer">
                <FaUserCircle className="text-3xl text-gray-500 mr-4" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-700">{loan.NombreUsuario}</p>
                  <p className="text-gray-500">Monto: {loan.Monto} L</p>
                  <p className="text-gray-500">Interés: {loan.Tasa}%</p>
                  <p className="text-gray-500">Plazo: {loan.Plazo} meses</p>
                </div>
              </div>
            </Link>
          ) : (
            <div key={loan.SolicitudID} className="flex items-center bg-white p-4 rounded-lg shadow-md border">
              <FaUserCircle className="text-3xl text-gray-500 mr-4" />
              <div className="flex-1">
                <p className="font-semibold text-gray-700">{loan.NombreUsuario}</p>
                <p className="text-gray-500">Monto: {loan.Monto} L</p>
                <p className="text-gray-500">Interés: {loan.Tasa}%</p>
                <p className="text-gray-500">Plazo: {loan.Plazo} meses</p>
                <p className={loan.EstadoAprobacion === 'Aceptado' ? 'text-green-500' : 'text-red-500'}>
                  {loan.EstadoAprobacion}
                </p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`px-3 py-1 rounded-md bg-gray-300 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="font-semibold text-gray-600">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className={`px-3 py-1 rounded-md bg-gray-300 ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default LoanManagementResponsive;

