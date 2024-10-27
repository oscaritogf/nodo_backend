import { FaCreditCard, FaCalendarAlt } from 'react-icons/fa';

export default function AgregarMetodoDePago() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Agregar Nuevo Método de Pago</h2>
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="metodo" className="block text-sm font-semibold mb-2">Método de Pago</label>
          <select id="metodo" className="w-full p-3 border border-gray-300 rounded-lg">
            <option>Selecciona un método</option>
            <option>Visa</option>
            <option>Mastercard</option>
            <option>American Express</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="numeroTarjeta" className="block text-sm font-semibold mb-2">Número de Tarjeta</label>
          <input
            id="numeroTarjeta"
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label htmlFor="expiracion" className="block text-sm font-semibold mb-2">Fecha de Expiración</label>
            <input
              id="expiracion"
              type="text"
              placeholder="MM/AA"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="cvv" className="block text-sm font-semibold mb-2">CVV</label>
            <input
              id="cvv"
              type="text"
              placeholder="123"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="mt-auto">
          <button className="w-full py-4 px-3 text-white rounded-md font-bold transition-shadow duration-300 lg:shadow-lg lg:hover:shadow-xl"
            style={{ backgroundColor: '#004225', boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}>
            Agregar Tarjeta
          </button>
        </div>
      </form>
    </div>
  );
}
