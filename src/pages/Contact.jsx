import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-red-600">
          Contactez-nous
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Informations de contact
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2" />
                <span>+212 539 99 99 99</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2" />
                <span>contact@hopital-lalla-malika.ma</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2" />
                <span>Avenue Hassan II, Tétouan, Maroc</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Envoyez-nous un message
            </h2>
            <form>
              <div className="mb-4">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div className="mb-4">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div className="mb-4">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
