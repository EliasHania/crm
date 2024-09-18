import React from "react";

export default function ServiceCard({ icon, titre, description }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center border border-red-200 hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">
        {titre}
      </h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  );
}
