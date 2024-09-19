import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import {
  FaHospital,
  FaUserMd,
  FaCity,
  FaBed,
  FaChartLine,
} from "react-icons/fa";

const StatsWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const stats = [
    { label: "Lits", value: 2392, icon: <FaBed /> },
    {
      label: "Capacité nationale de santé",
      value: 15,
      suffix: "%",
      icon: <FaChartLine />,
    },
    { label: "Médecins", value: 1558, icon: <FaUserMd /> },
    { label: "Villes", value: 10, icon: <FaCity /> },
    { label: "Admissions en 2022", value: 216493, icon: <FaHospital /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-red-50 py-16 px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-red-600 text-center mb-12">
          Nos Chiffres Clés
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-lg rounded-lg border border-red-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-3xl font-extrabold text-gray-900">
                    {isVisible ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix || ""}
                        separator=" "
                      />
                    ) : (
                      "0"
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsWidget;
