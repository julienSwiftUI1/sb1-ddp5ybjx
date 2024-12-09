import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
      {children}
    </div>
  );
}