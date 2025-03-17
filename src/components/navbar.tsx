import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <nav className="w-full py-2 px-4 md:px-12 flex flex-col md:flex-row items-center bg-white relative">
      {/* Logo */}
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <Link to="/" className="flex items-center">
          <img
            src="/logoLimpezas2.svg"
            alt="Limpas Logo"
            className="h-12 md:h-20"
          />
        </Link>
        {/* Menu Mobile */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
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
    </nav>
  );
}
