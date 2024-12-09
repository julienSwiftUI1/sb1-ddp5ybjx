import React from 'react';
import { Brain, Code, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Evo AI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors">Processus</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#services" className="block text-gray-600 hover:text-blue-600 transition-colors py-2">Services</a>
            <a href="#process" className="block text-gray-600 hover:text-blue-600 transition-colors py-2">Processus</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition-colors py-2">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}