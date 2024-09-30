
export default function Header1() {
    return (
      <header className="bg-gradient-to-b from-blue-600 to-blue-400 py-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
          <a href="/home" className="flex items-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/archivosprueba-75094.appspot.com/o/logojp.png?alt=media&token=791f1e7b-46a8-4a69-b533-3c9b585230a6"  
            className="w-8 h-9 rounded-full mb-0 " />
            <span className="ml-3 text-3xl font-bold text-white tracking-wide">
              Partido Justicialista
            </span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a
              href="/home"
              className="text-white hover:text-yellow-300 transition-colors duration-300 text-lg"
            > <span className="ml-3 text-2xl font-bold text-white tracking-wide">
              Home 
              </span>
            </a>
            <a
              href="/referentes"
              className="text-white hover:text-yellow-300 transition-colors duration-300 text-lg"
            > <span className="ml-3 text-2xl font-bold text-white tracking-wide">
             Referentes 
            </span>
              
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300 text-lg"
            >
             <span className="ml-3 text-2xl font-bold text-white tracking-wide">
              Service 
              </span>
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300 text-lg"
            >
             <span className="ml-3 text-2xl font-bold text-white tracking-wide">
              Contact
              </span>
            </a>
          </nav>
          <a
            href="/write-form"
            className="inline-flex items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 text-sm font-semibold shadow-lg transition-transform transform hover:scale-105 duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            Afiliate!
          </a>
        </div>
      </header>
    );
  }
  
