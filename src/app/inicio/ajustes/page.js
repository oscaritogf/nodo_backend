'use client';

import React from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaCreditCard, FaFileAlt, FaUserCircle, FaBell } from 'react-icons/fa';

const menuItems = [
  {
    href: '/inicio/ajustes/seguridad',
    icon: FaShieldAlt,
    title: 'Seguridad',
    description: 'Administra la seguridad de tu cuenta',
  },
  {
    href: '/inicio/ajustes/privacidad',
    icon: FaLock,
    title: 'Privacidad',
    description: 'Controla quién puede ver tu información',
  },
  {
    href: '/inicio/ajustes/metodoPago',
    icon: FaCreditCard,
    title: 'Métodos de pago',
    description: 'Administra tus tarjetas bancarias',
  },
  {
    href: '/inicio/ajustes/documentos',
    icon: FaFileAlt,
    title: 'Documentos',
    description: 'Actualizar tus documentos fiscales',
  },
  {
    href: '/inicio/ajustes/editarPerfil',
    icon: FaUserCircle,
    title: 'Perfil',
    description: 'Edita tu información personal y preferencias',
  },
  {
    href: '/inicio/ajustes/notificaciones',
    icon: FaBell,
    title: 'Notificaciones',
    description: 'Gestiona tus notificaciones y alertas',
  },
];

const CardMenu = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 max-w-screen-lg mx-auto">
      {menuItems.map(({ href, icon: Icon, title, description }, index) => (
        <Link href={href} key={index} legacyBehavior>
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
      ))}
    </div>
  );
};

export default CardMenu;
