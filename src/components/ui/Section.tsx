import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-20", className)}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}