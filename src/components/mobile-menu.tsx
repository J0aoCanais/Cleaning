import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800 p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
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
        <>
          {/* Overlay to close menu when clicking outside */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-40 p-5 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="Close menu"
              >
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
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-gray-800 hover:text-[#A0D5CD] font-medium transition-colors py-3 border-b border-gray-100 ${location.pathname === "/" ? "text-[#A0D5CD]" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/servicos"
                className={`text-gray-800 hover:text-[#A0D5CD] font-medium transition-colors py-3 border-b border-gray-100 ${location.pathname === "/servicos" ? "text-[#A0D5CD]" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
              <Link
                to="/limpezas"
                className={`text-gray-800 hover:text-[#A0D5CD] font-medium transition-colors py-3 border-b border-gray-100 ${location.pathname === "/limpezas" ? "text-[#A0D5CD]" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Limpezas
              </Link>
              <Link
                to="/sobre"
                className={`text-gray-800 hover:text-[#A0D5CD] font-medium transition-colors py-3 border-b border-gray-100 ${location.pathname === "/sobre" ? "text-[#A0D5CD]" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <div className="pt-4">
                <Link to="/contacto" onClick={() => setIsOpen(false)}>
                  <Button className="bg-[#A0D5CD] hover:bg-[#8BC0B8] text-white rounded-full px-6 py-2 w-full">
                    Contacte-nos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
