import React from "react";
import {
  Heart,
  Stethoscope,
  Siren,
  Baby,
  Calendar,
  Award,
  Users,
  Clock,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import InnovativeCarousel from "../components/Carrusel";
import StatsWidget from "../components/Icons";

export default function Home() {
  return (
    <div>
      <InnovativeCarousel />

      {/* Services Section */}
      <section className="py-10 sm:py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-red-600">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <ServiceCard
              icon={
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
              }
              titre="Cardiologie"
              description="Diagnostic et traitement des maladies cardiaques avec des technologies de pointe."
            />
            <ServiceCard
              icon={
                <Stethoscope className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
              }
              titre="Médecine Générale"
              description="Soins complets et personnalisés pour toute la famille."
            />
            <ServiceCard
              icon={
                <Siren className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
              }
              titre="Urgences"
              description="Service d'urgences disponible 24h/24 et 7j/7."
            />
            <ServiceCard
              icon={<Baby className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />}
              titre="Maternité"
              description="Environnement chaleureux et sécurisé pour les futures mamans."
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-10 sm:py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="public/image1.jpg"
                alt="Hospital"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-600">
                À Propos de Nous
              </h2>
              <p className="text-gray-700 mb-4">
                L'Clinique CRM Princess Lalla Malika est dévoué à fournir des
                soins de santé exceptionnels à la communauté de Tétouan depuis
                1973. Notre engagement envers l'excellence médicale et le
                bien-être des patients guide chacune de nos actions.
              </p>
              <p className="text-gray-700 mb-4">
                Avec une équipe de professionnels de santé hautement qualifiés
                et des équipements de pointe, nous nous efforçons de répondre
                aux besoins de santé variés de notre communauté, en offrant des
                soins compatissants et centrés sur le patient.
              </p>
              <button className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
        <StatsWidget />
      </section>

      {/* Key Features Section */}
      <section className="py-10 sm:py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-red-600">
            Pourquoi Nous Choisir
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Rendez-vous Faciles
              </h3>
              <p className="text-gray-600">
                Prise de rendez-vous en ligne simple et rapide
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experts Reconnus</h3>
              <p className="text-gray-600">
                Une équipe de médecins hautement qualifiés et expérimentés
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Soins Personnalisés
              </h3>
              <p className="text-gray-600">
                Une approche centrée sur le patient pour des soins sur mesure
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Disponibilité 24/7</h3>
              <p className="text-gray-600">
                Services d'urgence disponibles à tout moment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 sm:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Besoin d'une Consultation?
          </h2>
          <p className="text-xl mb-8">
            Nos experts sont là pour vous. Prenez rendez-vous dès aujourd'hui.
          </p>
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-red-100 transition duration-300 shadow-lg">
            Prendre Rendez-vous
          </button>
        </div>
      </section>
    </div>
  );
}
