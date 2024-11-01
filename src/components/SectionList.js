// SectionList.js
import React, { useState } from 'react';
import ListItem from './ListItem';

const ITEMS_PER_PAGE = 1; // Mostrar solo un elemento por página

const SectionList = ({ title, items }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Cálculo de paginación
  const totalPages = items.length; // Cada página es un solo elemento
  const currentItems = items.slice(currentPage - 1, currentPage);

  // Funciones para cambiar de página
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">{title}</h3>
      <ul>
        {currentItems.map((item, index) => (
          <ListItem key={index} name={item.name} amount={item.amount} />
        ))}
      </ul>
      {/* Controles de Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-3 space-x-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="text-gray-500 hover:text-gray-800 disabled:text-gray-300"
          >
            Anterior
          </button>
          <span className="text-gray-500">{currentPage} / {totalPages}</span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="text-gray-500 hover:text-gray-800 disabled:text-gray-300"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionList;
