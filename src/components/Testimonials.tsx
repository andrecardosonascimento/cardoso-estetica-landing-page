import React, { useRef, useState, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Ana Clara Silva",
    age: 32,
    text: "Estou extremamente satisfeita com os resultados do tratamento de radiofrequência. Minha pele está muito mais firme e as linhas finas reduziram significativamente. O atendimento da Gisele é impecável e acolhedor!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Mariana Costa",
    age: 29,
    text: "A limpeza de pele da clínica Gisele Cardoso é sensacional! Minha pele ficou limpa, luminosa e os produtos utilizados são de excelente qualidade. Já agendei minha manutenção mensal!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 3,
    name: "Juliana Mendes",
    age: 41,
    text: "Fiz o tratamento de microagulhamento para cicatrizes de acne e estou impressionada com os resultados. Em apenas 3 sessões, minhas cicatrizes diminuíram consideravelmente e a textura da pele melhorou muito.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 4,
    name: "Camila Rodrigues",
    age: 35,
    text: "A drenagem linfática da Gisele é maravilhosa! Depois de algumas sessões, notei uma redução significativa do inchaço e da retenção de líquidos. Me sinto muito mais leve e disposta. Recomendo demais!",
    image: "https://randomuser.me/api/portraits/women/54.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const testimonialRef = useRef(null);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };
  
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section id="depoimentos" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Feedbacks</h2>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={testimonialRef}
        >
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-card">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-2 border-gc-primary2"
                        />
                      </div>
                      <div>
                        <div className="mb-4 text-gc-primary2">
                          <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 3.356-3.995 5.743h4v10.106h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 3.356-3.996 5.743h4v10.106h-10z" />
                          </svg>
                        </div>
                        <p className="text-gray-700 mb-6 italic">
                          {testimonial.text}
                        </p>
                        <div>
                          <h4 className="font-playfair text-lg font-semibold text-gc-primary1">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm">{testimonial.age} anos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-5 bg-white p-3 rounded-full shadow-md hover:shadow-lg focus:outline-none z-10 hidden md:block"
            onClick={prevTestimonial}
          >
            <svg className="w-5 h-5 text-gc-primary1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-5 bg-white p-3 rounded-full shadow-md hover:shadow-lg focus:outline-none z-10 hidden md:block"
            onClick={nextTestimonial}
          >
            <svg className="w-5 h-5 text-gc-primary1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
                index === activeIndex ? 'bg-gc-primary2' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
