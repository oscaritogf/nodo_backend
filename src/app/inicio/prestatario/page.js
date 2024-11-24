'use client';

import Link from 'next/link';
import { FaFolderOpen, FaRegClipboard, FaFileAlt, FaChartPie, FaInfoCircle, FaUserFriends, FaHandshake } from 'react-icons/fa';

const icons = {
  FaFolderOpen,
  FaRegClipboard,
  FaFileAlt,
  FaChartPie,
  FaInfoCircle,
  FaUserFriends,
  FaHandshake,
};

const menuItems = [
  ['/inicio/prestatario/solicitudes', 'FaFolderOpen', 'Solicitudes de préstamos', 'Realizar una solicitud de préstamos'],
  ['/inicio/prestatario/gestion', 'FaRegClipboard', 'Gestión de préstamos', 'Mostrar préstamos actuales'],
  ['/inicio/prestatario/historial', 'FaFileAlt', 'Historial Crediticio', 'Resumen de préstamos pasados'],
  ['/inicio/prestatario/informacion', 'FaInfoCircle', 'Información de Préstamos', 'Consulta detalles y políticas de préstamos'],
  ['/inicio/prestatario/referidos', 'FaUserFriends', 'Referidos', 'Invita a amigos y gana beneficios'],
  ['/inicio/prestatario/acuerdos', 'FaHandshake', 'Acuerdos', 'Administra tus acuerdos de pago y términos'],
];

export default function Prestatario() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 max-w-screen-lg mx-auto">
      {menuItems.map(([href, iconKey, title, description], index) => {
        const Icon = icons[iconKey];
        
        return (
          <Link href={href} passHref legacyBehavior key={index}>
            <a className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition sm:flex-col sm:items-center sm:text-center lg:flex-col lg:items-center">
              <div className="p-2 bg-gray-100 rounded-full mb-3 sm:p-3 md:p-4 lg:p-5">
                <Icon className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-600" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">{title}</h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">{description}</p>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
