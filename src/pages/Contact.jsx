import React from "react";
import { Phone, Mail, MapPin, Send, Clock, Calendar } from "lucide-react";
import Map from "../components/Map";

export default function Contact() {
  return (
    <div className="py-10 bg-gradient-to-b from-red-50 to-white sm:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-red-600 relative">
          <span className="relative z-10">Contactez-nous</span>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl text-red-100 -z-10">
            Contact
          </span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-red-600">
              Informations de contact
            </h2>
            <ul className="space-y-6 mb-8">
              <li className="flex items-center group">
                <div className="bg-red-100 p-3 rounded-full mr-4 group-hover:bg-red-200 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-lg">+212 539 99 99 99</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-red-100 p-3 rounded-full mr-4 group-hover:bg-red-200 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-lg">contact@hopital-lalla-malika.ma</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-red-100 p-3 rounded-full mr-4 group-hover:bg-red-200 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-lg">
                  Avenue Hassan II, Tétouan, Maroc
                </span>
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Heures d'ouverture
            </h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Calendar className="w-5 h-5 text-red-600 mr-2" />
                <span>Lundi - Vendredi : 8h00 - 20h00</span>
              </p>
              <p className="flex items-center">
                <Calendar className="w-5 h-5 text-red-600 mr-2" />
                <span>Samedi : 9h00 - 18h00</span>
              </p>
              <p className="flex items-center">
                <Clock className="w-5 h-5 text-red-600 mr-2" />
                <span>Dimanche : Fermé (Urgences 24/7)</span>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-red-600">
              Envoyez-nous un message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition duration-300 flex items-center justify-center w-full sm:w-auto"
              >
                <Send className="w-5 h-5 mr-2" />
                Envoyer
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-red-600 relative">
            <span className="relative z-10">Notre Emplacement</span>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl text-red-100 -z-10">
              Location
            </span>
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 transform -skew-y-6 sm:-skew-y-3 -z-10"></div>
            <Map className="rounded-2xl shadow-2xl overflow-hidden" />
          </div>
          <p className="text-center mt-8 text-lg text-gray-700 max-w-2xl mx-auto">
            La Clinique CRM Princess Lalla Malika est située au cœur de Tétouan,
            offrant un accès facile à tous nos patients. Notre emplacement
            central nous permet de servir efficacement la communauté locale et
            les régions environnantes.
          </p>
        </div>
      </div>
    </div>
  );
}
