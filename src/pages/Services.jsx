import React from "react";
import {
  Heart,
  Stethoscope,
  Siren,
  Baby,
  Brain,
  Bone,
  Eye,
  Thermometer,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="py-10 sm:py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-red-600">
          Nos Services Médicaux
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <ServiceCard
            icon={<Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />}
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
            icon={<Siren className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />}
            titre="Urgences"
            description="Service d'urgences disponible 24h/24 et 7j/7."
          />
          <ServiceCard
            icon={<Baby className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />}
            titre="Maternité"
            description="Environnement chaleureux et sécurisé pour les futures mamans."
          />
          <ServiceCard
            icon={<Brain className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />}
            titre="Neurologie"
            description="Diagnostic et traitement des troubles du système nerveux."
          />
          <ServiceCard
            icon={<Bone className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />}
            titre="Orthopédie"
            description="Traitement des troubles musculo-squelettiques et des blessures."
          />
          <ServiceCard
            icon={<Eye className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />}
            titre="Ophtalmologie"
            description="Soins complets des yeux et chirurgie oculaire."
          />
          <ServiceCard
            icon={
              <Thermometer className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
            }
            titre="Pédiatrie"
            description="Soins spécialisés pour les enfants de tous âges."
          />
        </div>
      </div>
    </div>
  );
}
