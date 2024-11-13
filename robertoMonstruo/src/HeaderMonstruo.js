

export default function HeaderMonstruo() {
    return (
      <header className="bg-background sticky top-0 z-50 border-b">
        <div className="container flex flex-col h-screen items-start justify-between px-4 md:px-6">
          <a href="#" className="flex items-center gap-2">
            {/* Icono o logo aquí si lo deseas */}
          </a>
          <nav className="flex flex-col items-start gap-4">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
  