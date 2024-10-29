import Link from 'next/link';
import { FaCreditCard, FaEdit } from 'react-icons/fa';

export default function MetodosDePago() {
  return (
    <div className="p-4 text-custom-gray">
      <h2 className="text-lg font-bold mb-4">Métodos de Pago</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
        <div className="block p-4 border border-gray-300 rounded-lg flex items-center justify-between transition-shadow duration-300 hover:shadow-2xl lg:hover:scale-105 lg:hover:bg-orange-100 lg:hover:text-orange-600 hover:shadow-lg lg:h-28 lg:flex-row bg-white">
          <div>
            <h3 className="font-semibold">Cuenta bancaria</h3>
            <p className="text-sm text-gray-500">BAC - **** 3234</p>
          </div>
          <Link href="/inicio/ajustes/metodoPago/editarMetodoPago" passHref legacyBehavior>
            <a className="text-orange-600 flex items-center">
              <FaEdit className="mr-2" /> Editar
            </a>
          </Link>
        </div>

        <div className="block p-4 border border-gray-300 rounded-lg flex items-center justify-between transition-shadow duration-300 hover:shadow-2xl lg:hover:scale-105 lg:hover:bg-orange-100 lg:hover:text-orange-600 hover:shadow-lg lg:h-28 lg:flex-row bg-white">
          <div className="text-gray-600">
            <FaCreditCard className="text-3xl lg:transition-transform lg:duration-300 lg:hover:rotate-12" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">Añadir Nueva Tarjeta</h3>
            <Link href="/inicio/ajustes/metodoPago/agregarMetodoPago" passHref legacyBehavior>
              <a className="text-orange-600 flex items-center">
                <FaEdit className="mr-2" /> Agregar
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

