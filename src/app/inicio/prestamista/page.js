'use client';

import React from 'react';
import Link from 'next/link';
import { FaFolderOpen, FaRegClipboard, FaHistory, FaChartLine, FaUserCheck, FaTools, FaMoneyCheck } from 'react-icons/fa';

const icons = {
  FaFolderOpen,
  FaRegClipboard,
  FaHistory,
  FaChartLine,
  FaUserCheck,
  FaTools,
  FaMoneyCheck,
};

const menuItems = [
  ['/inicio/prestamista/solicitudes', 'FaFolderOpen', 'Solicitudes de préstamo', 'Mostrar datos generales de solicitudes'],
  ['/inicio/prestamista/gestion', 'FaRegClipboard', 'Gestión de préstamos', 'Mostrar préstamos actuales'],
  ['/inicio/prestamista/historial', 'FaHistory', 'Historial de préstamos', 'Resumen de préstamos otorgados'],
  ['/inicio/prestamista/usuarios', 'FaUserCheck', 'Usuarios Aprobados', 'Lista de usuarios aprobados para préstamos'],
  ['/inicio/prestamista/configuracion', 'FaTools', 'Configuración de Préstamos', 'Ajusta parámetros de préstamos y límites'],
  ['/inicio/prestamista/pagos', 'FaMoneyCheck', 'Pagos Recibidos', 'Registro de pagos recibidos de prestatarios'],
];

export default function Prestamista() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 max-w-screen-lg mx-auto">
      {menuItems.map(([href, iconKey, title, description], index) => {
        const Icon = icons[iconKey];

        return (
          <Link href={href} passHref key={index} legacyBehavior>
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
