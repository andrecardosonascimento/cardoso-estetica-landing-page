
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Tratamento estético" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            Gisele Cardoso<br />
            Estética & Saúde
          </h1>
          <p className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto italic font-medium drop-shadow-md">
            Cuidando da sua beleza e autoestima!
          </p>
          <a href="#contato" className="btn-primary text-lg">
            Agende sua consulta
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#sobre" className="text-white flex flex-col items-center">
          <span className="mb-2">Saiba mais</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
