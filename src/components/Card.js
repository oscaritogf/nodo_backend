// components/Card.js
import React from "react";

const Card = ({ title, description, label }) => {
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
      {/* Fondo de gradiente y botón de marcador */}
      <div className="h-28 bg-gradient-to-b from-red-400 to-blue-400 flex justify-end p-3">
        <button className="text-white bg-white bg-opacity-30 p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 4v16l7-7 7 7V4"
            />
          </svg>
        </button>
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        
        {/* Etiqueta de la tarjeta */}
        <div className="mt-4 flex items-center space-x-2">
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.75h4.5v1.5h-4.5zM7.5 6.75h9v1.5h-9zM10.5 9.75h3v1.5h-3zM6 12.75h12v1.5H6z"
              />
            </svg>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

