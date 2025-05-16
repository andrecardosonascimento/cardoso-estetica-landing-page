
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/e67e801e-931f-42bd-84c5-6e642e78999f.png" 
          alt="Tratamento estético facial" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white drop-shadow-lg">
            Gisele Cardoso
          </h1>
          <p className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium mb-10 text-white drop-shadow-md">
            Estética e Saúde
          </p>
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
