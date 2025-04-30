
import React, { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: "Radiofrequência Facial",
    description: "Redução de rugas e linhas finas com 6 sessões",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "Tratamento Corporal",
    description: "Redução de medidas com 12 sessões",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "Limpeza de Pele",
    description: "Melhora significativa da textura e luminosidade",
    image: "https://images.unsplash.com/photo-1570174006382-115a73480745?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    title: "Microagulhamento",
    description: "Redução de cicatrizes de acne com 4 sessões",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    title: "Peeling Químico",
    description: "Tratamento de manchas e uniformização da pele",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 6,
    title: "Criolipólise",
    description: "Redução de gordura localizada no abdômen",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
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
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Portfólio de Resultados</h2>
          <p className="section-subtitle">Conheça alguns dos resultados que alcançamos com nossos tratamentos</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="reveal">
              <div 
                className="before-after-container rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="overlay rounded-lg">
                  <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm">{item.description}</p>
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
                className="w-full h-auto"
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
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Detalhes do Tratamento:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Duração: 6-8 semanas</li>
                  <li>Sessões: 4-6 sessões</li>
                  <li>Tempo de recuperação: mínimo</li>
                </ul>
              </div>
              <button 
                className="btn-primary w-full"
                onClick={() => {
                  closeModal();
                  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Quero esse tratamento
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
