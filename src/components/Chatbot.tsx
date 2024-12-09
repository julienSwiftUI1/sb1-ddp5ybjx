import React from 'react';
import { MessageSquare, Bot, Zap, Lock } from 'lucide-react';

export function Chatbot() {
  const features = [
    {
      icon: <Bot className="h-6 w-6 text-blue-600" />,
      title: "Assistant IA Personnalisé",
      description: "Un chatbot formé sur vos données et processus internes"
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      title: "Sécurité Maximale",
      description: "Vos données restent confidentielles et sécurisées"
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Intégration Rapide",
      description: "Mise en place en quelques jours sur vos plateformes"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Support 24/7",
      description: "Assistance automatisée pour vos clients et employés"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Chatbot IA Sur Mesure</h2>
            <p className="text-gray-600 mb-8">
              Automatisez votre service client et votre support interne avec un assistant IA 
              intelligent, formé spécifiquement pour votre entreprise. Une solution clé en 
              main qui s'adapte à vos besoins.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Demander une Démo
              </a>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex items-center mb-3">
                <Bot className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-medium">Assistant IA</span>
              </div>
              <p className="text-gray-600 mb-2">Bonjour ! Comment puis-je vous aider aujourd'hui ?</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mb-4 ml-8">
              <p className="text-gray-800">Je voudrais en savoir plus sur vos services.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center mb-3">
                <Bot className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-medium">Assistant IA</span>
              </div>
              <p className="text-gray-600">
                Je peux vous aider à découvrir nos solutions d'IA adaptées aux PME. 
                Nous proposons des chatbots personnalisés, des formations et de 
                l'accompagnement sur mesure. Que souhaitez-vous savoir en particulier ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}