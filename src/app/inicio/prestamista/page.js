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
    <div className="p-4 text-gray-700 h-full flex flex-col">
      <div className="h-4/5">
        <div className="text-lg font-bold mb-4">Menú</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {menuItems.map(([href, iconKey, title, description], index) => {
            const Icon = icons[iconKey];

            return (
              <Link href={href} passHref key={index} legacyBehavior>
                <a className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl shadow-lg text-white text-center transition transform hover:-translate-y-2 hover:shadow-2xl hover:from-purple-500 hover:to-pink-400 hover:brightness-110">
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
