

export default function Card2() {
    return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg border-black border">
        <div className="flex flex-row items-center gap-4 p-4 border-b">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src="https://media.lmcipolletti.com/p/1fbac251dff0a2c056662d259d0e9597/adjuntos/198/imagenes/007/540/0007540571/770x0/smart/juan-graboisjpg.jpg"
              alt="Jane Doe"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Juan Grabois</h2>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mt-1">
              Partido Justicialista
            </span>
          </div>
        </div> 
        <div className="p-4 border-black border-t">
          <dl className="grid grid-cols-1 gap-4 text-sm">
            <div className="flex items-center">
              <dt className="sr-only">Cargo</dt>
              <svg
                className="h-4 w-4 text-gray-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 10V6a2 2 0 012-2h8a2 2 0 012 2v4M4 14h16M10 14v7m4-7v7"
                />
              </svg>
              <dd>Abogado, Traductor de inglés, Licenciado en Ciencias Sociales</dd>
            </div>
            <div className="flex items-center">
              <dt className="sr-only">Ubicación</dt>
              <svg
                className="h-4 w-4 text-gray-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 4.418-4 9-4 9s-4-4.582-4-9a4 4 0 118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11V3"
                />
              </svg>
              <dd>Capital Federal</dd>
            </div>
            <div className="flex items-center">
              <dt className="sr-only">Periodo</dt>
              <svg
                className="h-4 w-4 text-gray-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-6 9h6m-3-6h.01"
                />
              </svg>
              <dd>2001 - Presente</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-black-600">
          Juan Grabois (San Isidro, 23 de mayo de 1983) es un abogado, 
          traductor de inglés, licenciado en ciencias sociales, 
          escritor, dirigente social y político argentino. 
          Es fundador de la Unión de Trabajadores y Trabajadoras de la Economía Popular y del Frente Patria Grande.
          </p>
        </div>
      </div>
    )
  }
  