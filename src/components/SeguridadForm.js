// Asegúrate de que esto esté en el mismo archivo donde tienes los otros componentes
const SeguridadForm = () => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Seguridad</h2>
        <p className="mb-6">Administra la seguridad de tu cuenta</p>
  
        <form>
          <div className="mb-4">
            <label htmlFor="current-password" className="block text-gray-700 font-semibold mb-2">
              Contraseña actual:
            </label>
            <input
              type="password"
              id="current-password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Ingrese su contraseña actual"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="new-password" className="block text-gray-700 font-semibold mb-2">
              Nueva Contraseña:
            </label>
            <input
              type="password"
              id="new-password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Ingrese su nueva contraseña"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-gray-700 font-semibold mb-2">
              Confirme nueva contraseña:
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Confirme su nueva contraseña"
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Cambiar contraseña
          </button>
        </form>
      </div>
    );
  };

  // Asegúrate de que tienes esta línea en el archivo SeguridadForm.js
export default SeguridadForm;

  

