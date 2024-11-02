export default function Privacidad() {
  return (
    <div className="bg-gray-100 p-6">
      <div
        className=" bg-gradient-to-br from-orange-400 via-orange-400 to-pink-500 rounded-2xl shadow-md h-full"
        style={{
          padding: '1rem', // Espaciado para crear la "franja" alrededor
        }}
      >
        <div className="bg-white rounded-xl p-6 shadow-lg h-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left h-full">
            Controla quién puede ver tu información
          </h2>

          <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            <div>
              <label htmlFor="visibility" className="block text-sm font-semibold text-gray-800 mb-2">
                Visibilidad del perfil:
              </label>
              <div className="relative">
                <select
                  id="visibility"
                  className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option>Público</option>
                  <option>Privado</option>
                  <option>Solo amigos</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="tagging" className="block text-sm font-semibold text-gray-800 mb-2">
                Permitir etiquetado:
              </label>
              <div className="relative">
                <select
                  id="tagging"
                  className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option>Todos</option>
                  <option>Amigos</option>
                  <option>Nadie</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="connectionRequests" className="block text-sm font-semibold text-gray-800 mb-2">
                Solicitudes de conexión permitidas:
              </label>
              <div className="relative">
                <select
                  id="connectionRequests"
                  className="w-full p-4 rounded-full bg-gray-100 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option>Todos</option>
                  <option>Amigos de amigos</option>
                  <option>Nadie</option>
                </select>
              </div>
            </div>

            {/* Añade más campos aquí si es necesario */}
          </form>

          <div className="mt-10">
            <button
              type="submit"
              className="w-full py-4 text-white font-bold rounded-full bg-gradient-to-r from-green-500 to-blue-600 transition duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none"
              style={{
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
              }}
            >
              Guardar Cambios

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
