
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gc-primary1 text-white pt-12 pb-6">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Gisele Cardoso Estética</h3>
            <p className="text-gray-300 mb-4">
              Transformando vidas através da beleza e do bem-estar. Conheça nossos tratamentos exclusivos e viva a experiência Gisele Cardoso.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre nós</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Aparelhos</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-medium mb-4">Contato</h4>
            <address className="not-italic text-gray-300 space-y-3">
              <p>11 9 8172 7450</p>
              <div className="flex items-center space-x-2">
                <a 
                  href="https://www.instagram.com/giselecardosoesteticista/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Instagram: @giselecardosoesteticista
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Gisele Cardoso Estética. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
