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
    <div className="p-4 text-custom-gray h-full flex flex-col">
      <div className="h-4/5">
        <div className="text-lg font-bold mb-4">Menú</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {menuItems.map(([href, iconKey, title, description], index) => {
            const Icon = icons[iconKey];
            
            return (
              <Link href={href} passHref legacyBehavior key={index}>
                <a className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg shadow-lg text-white text-center transition transform hover:-translate-y-2 hover:shadow-2xl hover:from-purple-500 hover:to-pink-300 hover:brightness-110">
                  <div className="mb-4 p-4 bg-white bg-opacity-20 rounded-full transition hover:bg-opacity-40">
                    <Icon className="text-4xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-white text-opacity-90">{description}</p>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

