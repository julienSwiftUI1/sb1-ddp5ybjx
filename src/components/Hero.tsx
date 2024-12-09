import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            L'IA Accessible pour Votre PME
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Des solutions d'IA simples et abordables pour booster votre productivité. 
            Pas besoin d'être une grande entreprise pour profiter des avantages de l'IA !
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Démarrer
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#benefits"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              Voir les Avantages
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}