
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Atualização de imagens para as novas fotos dos serviços
const servicosImages = [
  {
    id: 1,
    image: "/lovable-uploads/da3df73b-ab3b-4317-8453-f848e678e818.png"
  },
  {
    id: 2,
    image: "/lovable-uploads/9d611f19-7211-4142-8efc-72e8971fdde9.png"
  },
  {
    id: 3,
    image: "/lovable-uploads/4742658a-448a-4d1d-a966-0a02071d7546.png"
  },
  {
    id: 4,
    image: "/lovable-uploads/d1bba54f-6a58-43a6-8cf3-ced041abdeb0.png"
  },
  {
    id: 5,
    image: "/lovable-uploads/50b33a12-8eb8-47b8-88cc-9c113414d5ca.png"
  },
  {
    id: 6,
    image: "/lovable-uploads/153416fb-b7e1-46b5-a306-a802dfeb0ad0.png"
  },
  {
    id: 7,
    image: "/lovable-uploads/5e67fe52-1d42-4fc1-ae4d-c710b2fa80ce.png"
  },
  {
    id: 8,
    image: "/lovable-uploads/2182fafd-142c-4d9a-a7b7-ae961ff00113.png"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="fotos" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Minhas fotos</h2>
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
                        alt="Tratamento estético" 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                      />
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
