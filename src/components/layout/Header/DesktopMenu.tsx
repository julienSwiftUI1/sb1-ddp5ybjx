import React from 'react';
import { NavLink } from './NavLink';

export function DesktopMenu() {
  return (
    <div className="hidden md:flex space-x-8">
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#process">Processus</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  );
}