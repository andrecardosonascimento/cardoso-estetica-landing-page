
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/2f401a4f-a6a6-4b0d-87a6-b34b649461fc.png" 
          alt="Tratamento estético facial" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-7xl md:text-8xl lg:text-9xl font-bold mb-2 text-white drop-shadow-lg tracking-wider">
            <span className="bg-gradient-to-r from-white via-gc-complement1 to-white bg-clip-text text-transparent animate-pulse">
              Gisele Cardoso
            </span>
          </h1>
          <p className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium mb-10 text-white drop-shadow-md">
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
