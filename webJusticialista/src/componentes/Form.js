

export default function Form() { 
    return (
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 py-8 shadow-lg">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Formulario de Inscripción</h2>
          <form className="bg-white p-6 rounded-lg shadow-md space-y-6">
            {/* Nombre y Apellido */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Nombre y Apellido</label>
              <input
                type="text"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Ingresa tu nombre y apellido"
              />
            </div>
            
            {/* DNI */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">DNI</label>
              <input
                type="text"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Ingresa tu DNI"
              />
            </div>
            
            {/* Dirección */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Dirección</label>
              <input
                type="text"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Ingresa tu dirección"
              />
            </div>
            
            {/* Provincias */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Provincias</label>
              <select
                multiple
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Tucumán">Tucumán</option>
                {/* Añadir más provincias */}
              </select>
            </div>
            
            {/* Botón */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 text-sm font-semibold shadow-lg transition-transform transform hover:scale-105 duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  