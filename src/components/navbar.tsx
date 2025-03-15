import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-12 flex flex-col md:flex-row items-center bg-white">
      {/* Logo */}
      <div className="flex items-center justify-center w-full md:w-auto mb-4 md:mb-0">
        <Link to="/" className="flex items-center justify-center">
          <img src="/logoLimpezas2.svg" alt="Limpas Logo" className="h-20" />
        </Link>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex space-x-8">
          <Link
            to="/"
            className="text-gray-800 hover:text-[#A0D5CD] font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/servicos"
            className="text-gray-800 hover:text-[#A0D5CD] font-medium transition-colors"
          >
            Serviços
          </Link>
          <Link
            to="/limpezas"
            className="text-gray-800 hover:text-[#A0D5CD] font-medium transition-colors"
          >
            Limpezas
          </Link>
        </div>
      </div>

      {/* Botão de Contato - apenas para desktop */}
      <div className="hidden md:flex md:w-auto md:justify-end">
        <Link to="/contacto">
          <Button className="bg-[#A0D5CD] hover:bg-[#8BC0B8] text-white rounded-full px-6">
            Contacte-nos
          </Button>
        </Link>
      </div>

      {/* Menu Mobile */}
      <div className="absolute right-4 top-4 md:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
}
