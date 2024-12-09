import React from 'react';
import { Brain } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Brain className="h-8 w-8 text-blue-600" />
      <span className="text-xl font-bold text-gray-800">Evo AI</span>
    </div>
  );
}