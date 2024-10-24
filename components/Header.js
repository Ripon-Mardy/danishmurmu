// components/Navbar.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side (Logo) */}
        <div className="text-white text-2xl font-bold">Danish</div>

        {/* Middle Side (Navigation Menu for Desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#services" className="text-white hover:text-gray-300">Services</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Right Side (Contact Me Button for Desktop) */}
        <div className="hidden md:block">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Contact Me
          </button>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay to close menu when clicked outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 right-0 w-3/4 h-full bg-gray-700 text-white z-50 p-6 md:hidden`}
      >
        <div className="flex flex-col space-y-6">
          <a href="#home" className="text-white hover:text-gray-300" onClick={closeMenu}>Home</a>
          <a href="#about" className="text-white hover:text-gray-300" onClick={closeMenu}>About</a>
          <a href="#services" className="text-white hover:text-gray-300" onClick={closeMenu}>Services</a>
          <a href="#contact" className="text-white hover:text-gray-300" onClick={closeMenu}>Contact</a>
        </div>
      </motion.div>
    </nav>
  );
}
