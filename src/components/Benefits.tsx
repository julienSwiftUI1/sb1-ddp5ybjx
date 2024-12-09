import React from 'react';
import { PiggyBank, Clock, Shield, TrendingUp } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <PiggyBank className="h-8 w-8 text-blue-600" />,
      title: "Solutions Abordables",
      description: "Tarifs adaptés aux PME avec des options de paiement flexibles"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Mise en Place Rapide",
      description: "Implémentation rapide pour voir les résultats en quelques semaines"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Sans Risque",
      description: "Commencez petit et évoluez selon vos besoins, sans engagement à long terme"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "ROI Mesurable",
      description: "Résultats concrets et mesurables adaptés à votre budget"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Idéal pour les PME</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Nous comprenons les défis spécifiques des PME. Nos solutions sont conçues 
          pour être accessibles, efficaces et adaptées à votre budget.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}