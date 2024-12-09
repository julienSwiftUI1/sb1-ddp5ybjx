import React from 'react';
import { Code, BookOpen, Brain, Users } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "GitHub Copilot Simplifié",
      description: "Boostez votre développement avec Copilot, configuré spécialement pour les petites équipes. À partir de 10€/mois."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Formation Accessible",
      description: "Formations courtes et pratiques sur l'IA, adaptées à votre emploi du temps et votre niveau."
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "ChatGPT sur Mesure",
      description: "Solutions ChatGPT simples et prêtes à l'emploi pour automatiser vos tâches quotidiennes."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Support Personnalisé",
      description: "Accompagnement individuel pour vous guider pas à pas dans votre transformation numérique."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Nos Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Des solutions simples et abordables, spécialement conçues pour les petites entreprises 
          qui souhaitent démarrer avec l'IA sans se ruiner.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}