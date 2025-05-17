
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Updated images array with the new photos
const servicosImages = [
  {
    id: 1,
    image: "/lovable-uploads/1670f0cb-9e40-4e07-9a5d-c63a6218efe5.png" // 1st photo replaced
  },
  {
    id: 2,
    image: "/lovable-uploads/6c0f0f80-8996-467a-94ff-0f33f5f18f27.png" // 2nd photo replaced
  },
  {
    id: 3,
    image: "/lovable-uploads/dfc5eef3-7329-4495-b166-2f9e8c328b1f.png" // 3rd photo replaced
  },
  {
    id: 4,
    image: "/lovable-uploads/d1bba54f-6a58-43a6-8cf3-ced041abdeb0.png" // keep existing 4th photo
  },
  {
    id: 5,
    image: "/lovable-uploads/50b33a12-8eb8-47b8-88cc-9c113414d5ca.png" // keep existing 5th photo
  },
  {
    id: 6,
    image: "/lovable-uploads/6d9963ca-dd15-46d9-bb26-0a7f2cf60a17.png" // 6th photo replaced
  },
  {
    id: 7,
    image: "/lovable-uploads/5e67fe52-1d42-4fc1-ae4d-c710b2fa80ce.png" // keep existing 7th photo
  },
  {
    id: 8,
    image: "/lovable-uploads/2182fafd-142c-4d9a-a7b7-ae961ff00113.png" // keep existing 8th photo
  },
  {
    id: 9,
    image: "/lovable-uploads/abefd90d-042c-487d-a6aa-b02501ea4c06.png" // new added photo
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
