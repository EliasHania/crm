import React from "react";

export default function Team() {
  const team = [
    {
      name: "Dr. Amina Benali",
      role: "Cardiologue",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Karim Tazi",
      role: "Médecin Généraliste",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Fatima Zohra",
      role: "Pédiatre",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Hassan El Amrani",
      role: "Chirurgien",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Leila Mansouri",
      role: "Neurologue",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Youssef Alaoui",
      role: "Orthopédiste",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="py-10 bg-red-50 sm:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-red-600">
          Notre Équipe Médicale
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
