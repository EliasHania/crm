import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Si el desplazamiento es mayor a 100px, activar el header sticky
      const shouldBeSticky = scrollY > 100;
      if (shouldBeSticky !== isSticky) {
        setIsSticky(shouldBeSticky);
      }

      // Detectar si estamos haciendo scroll hacia arriba o hacia abajo
      if (scrollY > lastScrollY) {
        // Scroll hacia abajo: ocultar header
        setIsScrollingUp(false);
      } else {
        // Scroll hacia arriba: mostrar header
        setIsScrollingUp(true);
      }

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  const menuItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Équipe", path: "/equipe" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`bg-gradient-to-r from-red-600 to-red-700 shadow-lg transition-all duration-500 ease-in-out fixed top-0 left-0 right-0 z-40 ${
          isSticky
            ? isScrollingUp
              ? "translate-y-0"
              : "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="text-white font-serif text-2xl sm:text-3xl font-bold">
                CRM
              </div>
              <div className="text-sm sm:text-xl text-white font-light">
                Clinique Princess Lalla Malika
              </div>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-white hover:text-red-200 transition duration-300 relative group"
                    >
                      {item.name}
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="md:hidden text-white z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 py-2">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-white text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-1" /> +212 539 99 99 99
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />{" "}
                contact@clinique-lalla-malika.ma
              </span>
            </div>
            <div className="flex items-center">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" /> Urgences: 24h/24, 7j/7
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Espacio para compensar el header fijo */}
      <div className="h-[104px]"></div>

      {/* Menú móvil fuera del header */}
      <div
        className={`fixed inset-0 bg-red-600 bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Botón de cierre en la parte superior derecha */}
        <button
          className="absolute top-4 right-4 text-white z-50"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-white text-2xl hover:text-red-200 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
