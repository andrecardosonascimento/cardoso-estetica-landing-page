
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className={`font-playfair font-bold text-xl md:text-2xl ${isScrolled ? 'text-gc-primary1' : 'text-white'}`}>
            Gisele Cardoso Estética
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className={`font-medium hover:text-gc-primary2 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Sobre</a>
          <a href="#servicos" className={`font-medium hover:text-gc-primary2 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Serviços</a>
          <a href="#portfolio" className={`font-medium hover:text-gc-primary2 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Portfólio</a>
          <a href="#depoimentos" className={`font-medium hover:text-gc-primary2 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Depoimentos</a>
          <a href="#contato" className={`btn-primary`}>Agende sua consulta</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gc-primary1" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a href="#sobre" className="text-gray-700 font-medium py-2 hover:text-gc-primary2" onClick={toggleMenu}>Sobre</a>
            <a href="#servicos" className="text-gray-700 font-medium py-2 hover:text-gc-primary2" onClick={toggleMenu}>Serviços</a>
            <a href="#portfolio" className="text-gray-700 font-medium py-2 hover:text-gc-primary2" onClick={toggleMenu}>Portfólio</a>
            <a href="#depoimentos" className="text-gray-700 font-medium py-2 hover:text-gc-primary2" onClick={toggleMenu}>Depoimentos</a>
            <a href="#contato" className="btn-primary text-center" onClick={toggleMenu}>Agende sua consulta</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
