import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 bg-white shadow-md z-50 p-4 h-screen">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-[#A0D5CD] font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/servicos"
              className="text-gray-800 hover:text-[#A0D5CD] font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link
              to="/limpezas"
              className="text-gray-800 hover:text-[#A0D5CD] font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Limpezas
            </Link>
            <Link to="/contacto" onClick={() => setIsOpen(false)}>
              <Button className="bg-[#A0D5CD] hover:bg-[#8BC0B8] text-white rounded-full px-5 py-2 w-auto mt-2">
                Contacte-nos
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
