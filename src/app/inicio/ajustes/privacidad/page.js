export default function Privacidad() {
    return (
      <div className="flex flex-col  p-6 pb-20 lg:max-w-lg lg:mx-auto lg:pt-10"> 
        <div>
          <h2 className="text-lg font-semibold text-custom-gray mb-4 text-center lg:text-left">Controla quién puede ver tu información</h2>
  
          <form className="flex flex-col mt-4"> 
            <div className="mb-6">
              <label htmlFor="visibility" className="block text-xs font-semibold text-custom-gray mb-2 lg:text-base">
                Visibilidad del perfil:
              </label>
              <div className="relative">
                <select
                  id="visibility"
                  className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput appearance-none"
                  style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                >
                  <option>Público</option>
                  <option>Privado</option>
                </select>
                {/* Icono al lado derecho del selector */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
  
        {/* Botón ajustado igual que el de Seguridad */}
        <div className="mt-auto lg:mt-10">
          <button type="submit" className="w-full py-4 px-3 text-white rounded-md font-bold transition-shadow duration-300 lg:shadow-lg lg:hover:shadow-xl"
            style={{ backgroundColor: '#E0793F', boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}>
            Actualizar
          </button>
        </div>
      </div>
    );
  }
  