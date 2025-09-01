import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="hidden md:flex gap-6">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#certifications" className="hover:text-blue-400">Certifications</a></li>
          <li><a href="#footer" className="hover:text-blue-400">Contact</a></li>
        </ul>
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-4">
          <a href="#about" onClick={handleLinkClick} className="block hover:text-blue-400">About</a>
          <a href="#projects" onClick={handleLinkClick} className="block hover:text-blue-400">Projects</a>
          <a href="#certifications" onClick={handleLinkClick} className="block hover:text-blue-400">Certifications</a>
          <a href="#footer" onClick={handleLinkClick} className="block hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
