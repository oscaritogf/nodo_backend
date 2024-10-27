import Link from 'next/link';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen, toggleSidebar, setTitle }) => {
  return (
    <aside
      className={`text-white w-64 py-4 px-2 fixed inset-y-0 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } z-30 transition-transform duration-300`}
      style={{ backgroundColor: '#E0793F' }}
    >
      <div className="flex flex-col items-center mt-20">
        <img src="/images/logo_nodo.svg" alt="Logo" width={100} height={100} />
      </div>

      <nav className="space-y-4 mt-10 ml-2">
        {/* Link para la página de Inicio */}
        <Link href="/inicio" passHref legacyBehavior>
          <a
            className="flex items-center w-full p-4 rounded-lg transition-colors duration-300 hover:bg-orange-600 hover:text-white"
            onClick={() => {
              setTitle('Inicio'); // Actualiza el título a Inicio
              toggleSidebar(); // Cierra el Sidebar
            }}
          >
            <FaHome className="mr-2" /> Inicio
          </a>
        </Link>

        {/* Link para la página de Ajustes */}
        <Link href="/inicio/ajustes" passHref legacyBehavior>
          <a
            className="flex items-center w-full p-4 rounded-lg transition-colors duration-300 hover:bg-orange-600 hover:text-white"
            onClick={() => {
              setTitle('Ajustes'); // Actualiza el título a Ajustes
              toggleSidebar(); // Cierra el Sidebar
            }}
          >
            <FaCog className="mr-2" /> Ajustes
          </a>
        </Link>

        {/* Link para la página de Prestatario */}
        <Link href="/inicio/prestatario" passHref legacyBehavior>
          <a
            className="flex items-center w-full p-4 rounded-lg transition-colors duration-300 hover:bg-orange-600 hover:text-white"
            onClick={() => {
              setTitle('Prestatario'); // Actualiza el título a Prestatario
              toggleSidebar(); // Cierra el Sidebar
            }}
          >
            <FaUser className="mr-2" /> Prestatario
          </a>
        </Link>

      
        <Link href="/inicio/prestamista" passHref legacyBehavior>
          <a
            className="flex items-center w-full p-4 rounded-lg transition-colors duration-300 hover:bg-orange-600 hover:text-white"
            onClick={() => {
              setTitle('Prestamista'); // Actualiza el título a Prestamista
              toggleSidebar(); // Cierra el Sidebar
            }}
          >
            <FaUser className="mr-2" /> Prestamista
          </a>
        </Link>
      </nav>

      {/* Botón para cerrar sesión */}
      <div className="absolute bottom-4 left-0 right-0 m-4">
        <Link href="/login" passHref legacyBehavior>
          <a
            className="flex items-center w-full p-4 rounded-lg transition-colors duration-300 bg-red-600 hover:bg-red-500 hover:text-white"
            onClick={() => {
              toggleSidebar(); // Cierra el Sidebar
            }}
          >
            <FaSignOutAlt className="mr-2" /> Cerrar Sesión
          </a>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
