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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-4 w-full">
      {menuItems.map(({ href, icon: Icon, title, description }, index) => (
        <Link href={href} key={index} legacyBehavior>
          <a className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-custom-orange-light to-custom-orange-dark rounded-lg shadow-lg text-white text-center transition transform hover:-translate-y-2 hover:shadow-2xl hover:from-custom-brown-light hover:to-custom-brown-dark hover:brightness-110">
            <div className="mb-4 p-4 bg-white bg-opacity-20 rounded-full transition hover:bg-opacity-40">
              <Icon className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-white text-opacity-90">{description}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CardMenu;


