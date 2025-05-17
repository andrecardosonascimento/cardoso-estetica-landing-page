
import React, { useState } from 'react';
import {
  Zap,
  Radio,
  Image,
  Circle
} from 'lucide-react';

const aparelhosItems = [
  {
    id: 1,
    title: "Corrente Russa",
    description: "A corrente russa serve para tonificar e fortalecer a musculatura, melhorar a circulação sanguínea e promover a drenagem linfática, além de combater a flacidez.",
    benefits: "Fortalecimento muscular, melhora da circulação, combate à flacidez, tonificação de abdômen, glúteos e coxas.",
    image: "/lovable-uploads/787bade0-ff79-418c-8c78-c90470c0e9b9.png", // Corrente russa image
    icon: <Zap className="w-10 h-10 text-white" />
  },
  {
    id: 2,
    title: "Ultrassom",
    description: "A ultracavitação com ultrassom é uma técnica estética não invasiva que utiliza ondas sonoras para eliminar a gordura localizada e remodelar o corpo.",
    benefits: "Redução de gordura localizada, alternativa não invasiva à lipoaspiração, diminuição da celulite, resultados visíveis sem incisões.",
    image: "/lovable-uploads/73e710aa-3954-4ea5-ad35-fd229b9e851e.png", // Swapped to radiofrequencia image
    icon: <Radio className="w-10 h-10 text-white" />
  },
  {
    id: 3,
    title: "Manta térmica",
    description: "Ajuda na queima de gordura através do calor, contribuindo para a redução de gordura localizada e acelerando o metabolismo.",
    benefits: "Aumento da queima de calorias, maior eliminação de toxinas, redução de medidas, potencialização de outros tratamentos.",
    image: "/lovable-uploads/dfcf1e8b-ac6b-45a3-83ad-6ec48610b5c7.png", // Manta termica image
    icon: <Radio className="w-10 h-10 text-white" />
  },
  {
    id: 4,
    title: "Radiofrequência",
    description: "As ondas eletromagnéticas da radiofrequência aquecem a pele, causando contração do colágeno e estimulando a produção de novo colágeno.",
    benefits: "Redução de flacidez, melhora na aparência da celulite, estímulo de colágeno, eliminação de toxinas, aparência de pele mais firme e jovem.",
    image: "/lovable-uploads/08fd3301-dc2e-4f23-9b67-0a6121b4c06f.png", // Swapped to ultrassom image
    icon: <Radio className="w-10 h-10 text-white" />
  },
  {
    id: 5,
    title: "Vapor de Ozônio",
    description: "Vapor de ozônio representa um avanço significativo no campo da estética, oferecendo um método natural e eficaz para o cuidado da pele.",
    benefits: "Este tratamento é especialmente valioso para aqueles que buscam renovação, no combate à acne e na conquista de uma aparência radiante. Os resultados são visíveis e certamente promoverão uma pele mais saudável e luminosa.",
    image: "/lovable-uploads/0660deef-3821-4756-9a48-baf590276c7c.png", // Vapor de ozônio image
    icon: <Circle className="w-10 h-10 text-white" />
  },
  {
    id: 6,
    title: "Endermoterapia",
    description: "Endermoterapia é um tratamento estético que utiliza um dispositivo equipado com rolos e sucção para massagear e estimular a pele.",
    benefits: "Seu objetivo é melhorar a circulação sanguínea e linfática, reduzir a gordura localizada, combater a celulite e a flacidez, além de promover a remodelação corporal.",
    image: "/lovable-uploads/3a132990-073d-45b6-bbf3-1e887cf0cb22.png", // Endermoterapia image
    icon: <Circle className="w-10 h-10 text-white" />
  },
  {
    id: 7,
    title: "Autofrequência",
    description: "A Alta Frequência é um dispositivo bactericida e antisséptico usado para limpeza de pele, revitalização facial e desinfecção do couro cabeludo.",
    benefits: "É eficaz em contextos pós-operatórios e em tratamentos como depilação, foliculite, psoríase, e na podologia para micoses e frieiras. Sua multifuncionalidade permite a adaptação de produtos às necessidades específicas da pele, sendo amplamente utilizado em protocolos estéticos.",
    image: "/lovable-uploads/59c023c6-7760-4e52-867e-aaf7701ac17b.png", // Autofrequência image
    icon: <Image className="w-10 h-10 text-white" />
  }
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="aparelhos" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">APARELHOS</h2>
          <p className="section-subtitle">Conheça os equipamentos que utilizo em meus tratamentos</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
          {aparelhosItems.map((item) => (
            <div key={item.id} className="reveal">
              <div 
                className="before-after-container rounded-lg overflow-hidden cursor-pointer h-[280px] relative"
                onClick={() => openModal(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="overlay rounded-lg absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm line-clamp-2 mb-2">{item.description}</p>
                  <button className="mt-4 bg-white text-gc-primary2 px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-auto max-h-[280px] object-contain"
              />
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                onClick={closeModal}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-playfair font-semibold text-gc-primary1 mb-3">
                {selectedItem.title}
              </h3>
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              
              <h4 className="font-medium text-gc-primary2 mb-2">Principais benefícios:</h4>
              <p className="text-gray-600 mb-4">{selectedItem.benefits}</p>
              
              <button 
                className="btn-primary w-full"
                onClick={() => {
                  closeModal();
                  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Quero agendar um horário
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
