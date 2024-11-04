'use client';
import { useRef } from 'react';
import { FaPaperclip } from 'react-icons/fa';

export default function ConstanciaBancaria() {
  const fileInputRef = useRef(null);

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-gray-100 p-6 lg:p-10 lg:pt-16 shadow-lg rounded-2xl w-full max-w-7xl mx-auto">
      <div
        className="bg-gradient-to-br from-custom-orange-light to-custom-orange-dark rounded-2xl p-8"
        style={{ padding: '1rem' }}
      >
        <div className="bg-white rounded-xl p-8 shadow-lg h-full">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center lg:text-left">
            Actualiza Documento de Estado Financiera
          </h2>

          <form className="flex flex-col mt-4 space-y-6">
            {/* Campo para seleccionar archivo */}
            <div>
              <label htmlFor="archivo" className="block text-lg font-semibold text-gray-800 mb-2">
                Archivo*
              </label>
              <button
                type="button"
                className="w-full py-4 px-3 text-white font-bold rounded-full flex justify-center items-center transition-transform transform hover:scale-105 shadow-lg"
                style={{
                  background: 'linear-gradient(145deg, #FF8E53, #FF6A00)',
                  boxShadow: 'inset 0px 1px 3px rgba(255,255,255,0.2), 0px 4px 12px rgba(0, 0, 0, 0.3)',
                }}
                onClick={handleFileUploadClick}
              >
                <FaPaperclip className="mr-2" />
                Seleccionar archivo
              </button>
              <input
                ref={fileInputRef}
                type="file"
                id="archivo"
                className="hidden"
                onChange={(e) => console.log(e.target.files[0])}
              />
            </div>

            {/* Campo de texto para la imagen */}
            <div>
              <label htmlFor="constanciaImagen" className="block text-lg font-semibold text-gray-800 mb-2">
                Imagen de constancia de cuenta bancaria <br />
                Vigente de los últimos 6 meses*
              </label>
              <textarea
                id="constanciaImagen"
                placeholder="Adjunta la imagen aquí"
                className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                style={{ minHeight: '150px' }}
              />
            </div>
          </form>

          {/* Botón de actualizar */}
          <div className="col-span-full flex justify-center mt-10">
            <button
              type="submit"
              className="w-full lg:w-1/3 py-4 text-white font-bold rounded-full transition-transform transform hover:scale-105 shadow-lg"
              style={{
                background: 'linear-gradient(145deg, #FF8E53, #FF6A00)',
                boxShadow: 'inset 0px 1px 3px rgba(255,255,255,0.2), 0px 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
