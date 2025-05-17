
import React, { useRef, useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Imagens dos serviços - atualizadas para os novos uploads
const servicosImages = [
  {
    id: 1,
    title: "Tratamento de Radiofrequência",
    image: "/lovable-uploads/ed1d2c8c-2cb5-400e-ae12-30152f445e90.png"
  },
  {
    id: 2,
    title: "Tratamento de Ultrassom",
    image: "/lovable-uploads/e46148e1-e9a1-4e80-8908-7a9f07959e50.png"
  },
  {
    id: 3,
    title: "Tratamento Facial",
    image: "/lovable-uploads/e67e801e-931f-42bd-84c5-6e642e78999f.png"
  },
  {
    id: 4,
    title: "Tratamento de Radiofrequência Facial",
    image: "/lovable-uploads/426c504e-57f3-4949-80d0-18a95cf56edf.png"
  },
  {
    id: 5,
    title: "Tratamento de Corrente Russa",
    image: "/lovable-uploads/b6e7004c-9ed2-4106-ab4d-1cb19055ef3c.png"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
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
      setActiveIndex((prevIndex) => (prevIndex + 1) % servicosImages.length);
    } else if (isRightSwipe) {
      setActiveIndex((prevIndex) => (prevIndex - 1 + servicosImages.length) % servicosImages.length);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="fotos" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Fotos dos meus serviços</h2>
          <p className="section-subtitle">Confira alguns dos resultados dos tratamentos</p>
        </div>
        
        <div className="max-w-5xl mx-auto px-4">
          <Carousel className="w-full">
            <CarouselContent>
              {servicosImages.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl aspect-square relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-white font-playfair text-lg">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static transform-none mx-2 bg-gc-primary1 text-white hover:bg-gc-primary2 hover:text-white border-none" />
              <CarouselNext className="static transform-none mx-2 bg-gc-primary1 text-white hover:bg-gc-primary2 hover:text-white border-none" />
            </div>
          </Carousel>
        </div>
        
        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {servicosImages.map((_, index) => (
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
