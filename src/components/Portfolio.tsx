
import React, { useState } from 'react';
import {
  Zap,
  Radio
} from 'lucide-react';

const aparelhosItems = [
  {
    id: 1,
    title: "Corrente Russa",
    description: "A corrente russa serve para tonificar e fortalecer a musculatura, melhorar a circulação sanguínea e promover a drenagem linfática, além de combater a flacidez.",
    benefits: "Fortalecimento muscular, melhora da circulação, combate à flacidez, tonificação de abdômen, glúteos e coxas.",
    image: "/lovable-uploads/da3df73b-ab3b-4317-8453-f848e678e818.png",
    icon: <Zap className="w-10 h-10 text-white" />
  },
  {
    id: 2,
    title: "Ultrassom",
    description: "A ultracavitação com ultrassom é uma técnica estética não invasiva que utiliza ondas sonoras para eliminar a gordura localizada e remodelar o corpo.",
    benefits: "Redução de gordura localizada, alternativa não invasiva à lipoaspiração, diminuição da celulite, resultados visíveis sem incisões.",
    image: "/lovable-uploads/4742658a-448a-4d1d-a966-0a02071d7546.png",
    icon: <Radio className="w-10 h-10 text-white" />
  },
  {
    id: 3,
    title: "Manta térmica",
    description: "Ajuda na queima de gordura através do calor, contribuindo para a redução de gordura localizada e acelerando o metabolismo.",
    benefits: "Aumento da queima de calorias, maior eliminação de toxinas, redução de medidas, potencialização de outros tratamentos.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: <Radio className="w-10 h-10 text-white" />
  },
  {
    id: 4,
    title: "Radiofrequência",
    description: "As ondas eletromagnéticas da radiofrequência aquecem a pele, causando contração do colágeno e estimulando a produção de novo colágeno.",
    benefits: "Redução de flacidez, melhora na aparência da celulite, estímulo de colágeno, eliminação de toxinas, aparência de pele mais firme e jovem.",
    image: "/lovable-uploads/426c504e-57f3-4949-80d0-18a95cf56edf.png",
    icon: <Radio className="w-10 h-10 text-white" />
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-8">
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
