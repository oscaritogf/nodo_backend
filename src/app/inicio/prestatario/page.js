import Link from 'next/link';
import { FaFolderOpen, FaRegClipboard, FaFileAlt } from 'react-icons/fa';

const icons = {
  FaFolderOpen,
  FaRegClipboard,
  FaFileAlt,
};

const menuItems = [
  ['/inicio/prestatario/solicitudes', 'FaFolderOpen', 'Solicitudes de préstamos', 'Realizar una solicitud de préstamos'],
  ['/inicio/prestatario/gestion', 'FaRegClipboard', 'Gestión de préstamos', 'Mostrar préstamos actuales'],
  ['/inicio/prestatario/historial', 'FaFileAlt', 'Historial Crediticio', 'Resumen de préstamos pasados'],
];

export default function Prestatario() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
        {menuItems.map(([href, iconKey, title, description], index) => {
          const Icon = icons[iconKey];
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