import React from 'react';
import { ClipboardCheck, Settings, Lightbulb, Rocket } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
      title: "Analyse",
      description: "Évaluation approfondie de vos besoins et objectifs spécifiques"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Stratégie",
      description: "Élaboration d'une stratégie d'IA personnalisée"
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Implémentation",
      description: "Mise en place des solutions et formation des équipes"
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: "Optimisation",
      description: "Suivi et amélioration continue des performances"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Notre Processus</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}