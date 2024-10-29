export default function Seguridad() {
  return (
    <div className="flex flex-col  p-6 pb-20 lg:max-w-lg lg:mx-auto lg:pt-10 text-custom-gray"> 
      <div>
        <h2 className="text-lg font-semibold text-custom-gray mb-4 text-center lg:text-left">Administra la seguridad de tu cuenta</h2>

        <form className="flex flex-col mt-4 8"> 
          <div className="mb-6">
            <label htmlFor="currentPassword" className="block text-xs font-semibold text-custom-gray mb-2 lg:text-base">
              Contraseña actual:
            </label>
            <input
              id="currentPassword"
              type="password"
              placeholder="Ingresa su contraseña actual"
              className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput"
              style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="newPassword" className="block text-xs font-semibold text-custom-gray mb-2 lg:text-base">
              Nueva Contraseña:
            </label>
            <input
              id="newPassword"
              type="password"
              placeholder="Ingresa su nueva contraseña"
              className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput"
              style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-xs font-semibold text-custom-gray mb-2 lg:text-base">
              Confirme nueva contraseña:
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirme nueva contraseña"
              className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput"
              style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
            />
          </div>
        </form>
      </div>

      {/* Botón ajustado para mantenerse justo arriba del BottomNav */}
      <div className="mt-auto lg:mt-10">
        <button type="submit" className="w-full py-4 px-3 text-white rounded-md font-bold transition-shadow duration-300 lg:shadow-lg lg:hover:shadow-xl "
          style={{ backgroundColor: '#E0793F', boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}>
          Cambiar contraseña
        </button>
      </div>
    </div>
  );
}
