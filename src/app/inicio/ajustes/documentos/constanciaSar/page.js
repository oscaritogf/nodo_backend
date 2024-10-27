'use client'; // Hace que el componente sea un Client Component

import { useRef } from 'react';
import { FaPaperclip } from 'react-icons/fa';

export default function Inscripcion() {
  // Referencia al input de archivo
  const fileInputRef = useRef(null);

  // Función para manejar el click en el botón de seleccionar archivo
  const handleFileUploadClick = () => {
    fileInputRef.current.click(); // Dispara el clic en el input de archivo
  };

  return (
    <div className="flex flex-col p-6 pb-20 lg:max-w-lg lg:mx-auto lg:pt-10">
      <div>
        <h2 className="text-lg font-semibold text-custom-gray mb-4 text-center lg:text-left">
          Actualiza tu Inscripción Prestamistas No Bancarios
        </h2>

        <form className="flex flex-col mt-4">
          {/* Campo para seleccionar archivo */}
          <div className="mb-6">
            <label htmlFor="archivo" className="block text-xs font-semibold text-custom-gray mb-2 lg:text-base">
              Archivo*
            </label>

            {/* Botón personalizado */}
            <button
              type="button"
              className="w-full py-4 px-3 text-white rounded-md font-bold flex justify-center items-center transition-shadow duration-300 lg:shadow-lg lg:hover:shadow-xl"
              style={{ backgroundColor: '#E0793F', boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}
              onClick={handleFileUploadClick} // Dispara la acción de abrir el input file
            >
              <FaPaperclip className="mr-2" />
              Seleccionar archivo
            </button>

            {/* Input de archivo oculto */}
            <input
              ref={fileInputRef} // Referencia al input
              type="file"
              id="archivo"
              className="hidden"
              onChange={(e) => console.log(e.target.files[0])} // Muestra el archivo seleccionado en la consola
            />
          </div>

          {/* Campo de texto para la imagen */}
          <div className="mb-6">
            <label htmlFor="inscripcionImagen" className="block text-xs font-semibold text-custom-gray mb-2 lg:text-base">
              Imagen de Inscripción Prestamistas No Bancarios <br />
              Vigente de los últimos 6 meses*
            </label>
            <textarea
              id="inscripcionImagen"
              placeholder="Adjunta la imagen aquí"
              className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput"
              style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)', minHeight: '150px' }}
            />
          </div>
        </form>
      </div>

      {/* Botón de actualizar */}
      <div className="mt-auto lg:mt-10">
        <button
          type="submit"
          className="w-full py-4 px-3 text-white rounded-md font-bold transition-shadow duration-300 lg:shadow-lg lg:hover:shadow-xl"
          style={{ backgroundColor: '#E0793F', boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}
        >
          Actualizar
        </button>
      </div>
    </div>
  );
}
