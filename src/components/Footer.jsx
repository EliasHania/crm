import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Clinique CRM Princess Lalla Malika
            </h3>
            <p className="text-sm sm:text-base">
              Au service de la communauté de Tétouan depuis 1973
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> +212 539 99 99
                99
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />{" "}
                contact@clinique-lalla-malika.ma
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Avenue Hassan
                II, Tétouan, Maroc
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Horaires</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex items-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Lundi -
                Vendredi: 8h00 - 20h00
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Samedi: 9h00 -
                14h00
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Urgences:
                24h/24, 7j/7
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
