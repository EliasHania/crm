import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image1.jpg"];

export default function InnovativeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        goToNext();
      } else if (diff < -50) {
        goToPrevious();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden z-10" // z-index bajo
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out z-10 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-600 opacity-50 z-10" />
        </div>
      ))}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-1 sm:p-2 transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-1 sm:p-2 transition-all duration-300 z-10"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
          Clinique CRM Princess Lalla Malika
        </h2>
        <p className="text-sm sm:text-base md:text-xl mb-3 sm:mb-6 drop-shadow-md">
          Au service de la santé de Tétouan et de sa région depuis 1973
        </p>
        {/* Botón Link para redirigir a /contact */}
        <Link
          to="/contact"
          className="bg-white text-red-600 font-bold text-sm sm:text-base py-1 sm:py-2 px-3 sm:px-6 rounded-full hover:bg-red-100 transition duration-300 shadow-md"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </div>
  );
}
