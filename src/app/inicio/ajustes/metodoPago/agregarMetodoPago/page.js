import { FaCreditCard, FaCalendarAlt } from 'react-icons/fa';
'use cliente'
export default function EditarMetodoDePago() {
  return (
    <div className="bg-gray-100 p-6">
      <div
        className="bg-gradient-to-br from-custom-orange-light to-custom-orange-dark rounded-2xl shadow-md p-6"
        style={{
          padding: '1rem', // Espaciado para crear la "franja" alrededor
        }}
      >
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
            Editar Método de Pago
          </h2>

          <form className="grid grid-cols-1 gap-6 mt-4">
            {/* Método de Pago */}
            <div>
              <label htmlFor="metodo" className="block text-lg font-semibold text-gray-800 mb-2">
                Método de Pago
              </label>
              <select
                id="metodo"
                className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                defaultValue="Visa" // Método de pago actual cargado
              >
                <option>Visa</option>
                <option>Mastercard</option>
                <option>American Express</option>
              </select>
            </div>

            {/* Número de Tarjeta */}
            <div>
              <label htmlFor="numeroTarjeta" className="block text-lg font-semibold text-gray-800 mb-2">
                Número de Tarjeta
              </label>
              <input
                id="numeroTarjeta"
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                defaultValue="1234 5678 9012 3456" // Número de tarjeta actual cargado
              />
            </div>

            <div className="flex space-x-4">
              {/* Fecha de Expiración */}
              <div className="flex-1">
                <label htmlFor="expiracion" className="block text-lg font-semibold text-gray-800 mb-2">
                  Fecha de Expiración
                </label>
                <input
                  id="expiracion"
                  type="text"
                  placeholder="MM/AA"
                  className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  defaultValue="12/25" // Fecha de expiración actual cargada
                />
              </div>

              {/* CVV */}
              <div className="flex-1">
                <label htmlFor="cvv" className="block text-lg font-semibold text-gray-800 mb-2">
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="123"
                  className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  defaultValue="123" // CVV actual cargado
                />
              </div>
            </div>

            {/* Botón de Guardar Cambios */}
            <div className="mt-10">
              <button
                type="submit"
                className="w-full py-4 text-white font-bold rounded-full  transition duration-300 transform hover:scale-105 focus:outline-none"
                style={{
                  background: 'linear-gradient(145deg, #FF8E53, #FF6A00)',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                }}
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

