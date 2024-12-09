import React from 'react';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-4 space-y-4">
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#process">Processus</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  );
}