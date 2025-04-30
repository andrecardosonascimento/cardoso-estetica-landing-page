
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
          <p className="section-subtitle">Conheça um pouco da nossa história e filosofia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
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
              Com mais de 15 anos de experiência no mercado de estética, Gisele Cardoso é especialista em tratamentos faciais e corporais personalizados. Graduada em Estética e Cosmética pela Universidade de São Paulo e com diversas especializações internacionais, Gisele fundou sua clínica com a missão de transformar a autoestima de seus clientes através de tratamentos inovadores e eficazes.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa missão é proporcionar um atendimento exclusivo e personalizado, utilizando produtos e equipamentos de alta qualidade, sempre com foco nos resultados e na satisfação dos nossos clientes.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md border border-gc-complement2/20">
                <h4 className="font-playfair text-gc-primary2 font-semibold mb-2">Missão</h4>
                <p className="text-sm text-gray-600">Promover beleza e bem-estar com tratamentos personalizados e resultados visíveis.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border border-gc-complement2/20">
                <h4 className="font-playfair text-gc-primary2 font-semibold mb-2">Valores</h4>
                <p className="text-sm text-gray-600">Excelência, ética, inovação e compromisso com resultados reais.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
