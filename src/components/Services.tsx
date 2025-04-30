
import React from 'react';
import { 
  User,
  Calendar,
  Clock,
  Check,
} from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: <User className="w-10 h-10 text-gc-primary1" />,
    title: "Limpeza de Pele Profunda",
    description: "Tratamento completo que remove impurezas, cravos e células mortas, deixando a pele revitalizada e luminosa."
  },
  {
    id: 2,
    icon: <Calendar className="w-10 h-10 text-gc-primary1" />,
    title: "Radiofrequência",
    description: "Tecnologia que estimula o colágeno, promovendo firmeza e combatendo a flacidez facial e corporal."
  },
  {
    id: 3,
    icon: <Clock className="w-10 h-10 text-gc-primary1" />,
    title: "Microagulhamento",
    description: "Procedimento que estimula a produção de colágeno, melhorando a textura da pele e reduzindo cicatrizes."
  },
  {
    id: 4,
    icon: <Check className="w-10 h-10 text-gc-primary1" />,
    title: "Drenagem Linfática",
    description: "Técnica de massagem que melhora a circulação, reduz inchaço e elimina toxinas do organismo."
  },
  {
    id: 5,
    icon: <User className="w-10 h-10 text-gc-primary1" />,
    title: "Peeling Químico",
    description: "Tratamento que remove as camadas superficiais da pele, estimulando a renovação celular e melhorando manchas."
  },
  {
    id: 6,
    icon: <Calendar className="w-10 h-10 text-gc-primary1" />,
    title: "Criolipólise",
    description: "Tecnologia não invasiva que reduz gordura localizada através do congelamento das células adiposas."
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Conheça os tratamentos exclusivos que oferecemos para realçar sua beleza natural</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card reveal">
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gc-primary1 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <button className="btn-primary">
            Ver todos os serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
