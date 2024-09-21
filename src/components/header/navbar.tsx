import Link from 'next/link';
import React, { useState } from 'react';
import NavLinks from '@/components/header/navlinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">QuizApp</Link>
          </div>
          
          {/* Menu toggle button */}
          <div className="block lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none"
            >
              {isOpen ? '✖️' : '☰'}
            </button>
          </div>

          {/* Menu Links */}
          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-16 left-0 w-full bg-blue-600 lg:bg-transparent`}>
            <NavLinks />
          </div>

          <div className="hidden lg:block">
            <Link href="/login" className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
              Aide
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
