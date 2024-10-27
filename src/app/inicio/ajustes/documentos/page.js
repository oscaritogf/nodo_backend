import Link from 'next/link';
import { FaShieldAlt, FaFolderOpen } from 'react-icons/fa';

// Definimos los íconos a utilizar
const icons = {
  FaShieldAlt,
  FaFolderOpen,
};

// Array de items del menú
const menuItems = [
  { href: '/inicio/ajustes/documentos/constanciaBancaria', iconKey: 'FaShieldAlt', title: 'Constancia bancaria', description: 'Documento de estado financiera' },
  { href: '/inicio/ajustes/documentos/constanciaSar', iconKey: 'FaFolderOpen', title: 'Inscripción Prestamistas No Bancarios', description: 'Valida la actividad de los prestamistas' },
];

export default function Documentos() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Actualiza tus documentos legales</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {menuItems.map((item, index) => {
          const Icon = icons[item.iconKey]; // Asegurarse de que el ícono existe
          return (
            <Link href={item.href} passHref legacyBehavior key={index}>
              <a className="block p-4 border border-gray-300 rounded-lg flex items-center transition-shadow duration-300 hover:shadow-lg lg:h-28 lg:flex-row bg-white">
                {Icon && <Icon className="mr-3 text-gray-600 lg:text-3xl lg:transition-transform lg:duration-300 lg:hover:rotate-12" />} {/* Solo renderiza el ícono si existe */}
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
