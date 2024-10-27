import Link from 'next/link';
import { FaShieldAlt, FaLock, FaCreditCard, FaFileAlt } from 'react-icons/fa';

// Íconos disponibles
const icons = {
  FaShieldAlt,
  FaLock,
  FaCreditCard,
  FaFileAlt,
};

// Menú con rutas, íconos y descripciones
const menuItems = [
  ['/inicio/ajustes/seguridad', 'FaShieldAlt', 'Seguridad', 'Administra la seguridad de tu cuenta'],
  ['/inicio/ajustes/privacidad', 'FaLock', 'Privacidad', 'Controla quién puede ver tu información'],
  ['/inicio/ajustes/metodoPago', 'FaCreditCard', 'Métodos de pago', 'Administra tus tarjetas bancarias'],
  ['/inicio/ajustes/documentos', 'FaFileAlt', 'Documentos', 'Actualizar tus documentos Fiscales'],
];

export default function Ajustes() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {menuItems.map(([href, iconKey, title, description], index) => {
          const Icon = icons[iconKey]; // Accedemos al ícono desde el objeto de íconos
          
          return (
            <Link href={href} passHref legacyBehavior key={index}>
              <a className="block p-4 border border-gray-300 rounded-lg flex items-center transition-shadow duration-300 hover:shadow-2xl lg:hover:scale-105 lg:hover:bg-orange-100 lg:hover:text-orange-600 hover:shadow-lg lg:h-28 lg:flex-row bg-white">
                <Icon className="mr-3 text-gray-600 lg:text-3xl lg:transition-transform lg:duration-300 lg:hover:rotate-12" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
