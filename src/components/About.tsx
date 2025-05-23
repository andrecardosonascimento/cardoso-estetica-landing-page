
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Sobre a Clínica</h2>
          <p className="section-subtitle">Conheça um pouco da minha história</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/b6e7004c-9ed2-4106-ab4d-1cb19055ef3c.png" 
                alt="Gisele Cardoso, Esteticista" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="reveal">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-gc-primary1 mb-6">
              Gisele Cardoso
            </h3>
            <p className="text-gray-700 mb-6">
              Olá! Eu sou a Gisele Cardoso, especialista em tratamentos faciais e corporais personalizados. Sou graduada em Estética e, ao longo dos anos, tive diversas experiências incríveis na área. Criei minha clínica com muito carinho e dedicação, com a missão de ajudar você a se sentir ainda melhor consigo mesma, por meio de tratamentos inovadores, eficazes e pensados especialmente para cada necessidade! Siga abaixo para conhecer um pouco do meu trabalho
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md border border-gc-complement2/20">
                <h4 className="font-playfair text-gc-primary2 font-semibold mb-2">Missão</h4>
                <p className="text-sm text-gray-600">Minha missão é promover a autoestima e o amor-próprio dos meus pacientes por meio de experiências estéticas transformadoras. Acredito que cada pessoa merece sentir-se confiante e bela, e estou comprometido em oferecer cuidados personalizados.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border border-gc-complement2/20">
                <h4 className="font-playfair text-gc-primary2 font-semibold mb-2">Visão</h4>
                <p className="text-sm text-gray-600">Minha meta é desenvolver um espaço acolhedor e inspirador, onde cada paciente se sinta valorizado e fortalecido em sua trajetória de amor-próprio. Quero ser vista como uma referência em estética humana, promovendo não apenas a beleza externa, mas também o bem-estar interior.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border border-gc-complement2/20">
                <h4 className="font-playfair text-gc-primary2 font-semibold mb-2">Valores</h4>
                <p className="text-sm text-gray-600">Acredito firmemente que todos merecem se sentir autoconfiantes e belos. Valorizo a individualidade de cada um, oferecendo tratamentos personalizados que atendem às suas necessidades e desejos específicos, sempre com carinho e atenção.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
