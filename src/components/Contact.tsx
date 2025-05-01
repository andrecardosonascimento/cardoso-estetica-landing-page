
import React from 'react';
import { Phone, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Entre em contato</h2>
          <p className="section-subtitle">Agende seu horário ou tire suas dúvidas</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-gc-primary1">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gc-primary2" />
                <a href="tel:+5511981727450" className="text-gray-700 hover:text-gc-primary2 text-lg">
                  11 9 8172 7450
                </a>
              </div>
              
              <div className="flex items-center">
                <Instagram className="w-5 h-5 mr-3 text-gc-primary2" />
                <a 
                  href="https://www.instagram.com/giselecardosoesteticista/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-gc-primary2 text-lg"
                >
                  @giselecardosoesteticista
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://wa.me/5511981727450?text=Olá,%20gostaria%20de%20agendar%20um%20horário" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.4023 3.5998C18.1473 1.3448 15.1648 0.0998 11.9948 0.0998C5.4798 0.0998 0.1698 5.4098 0.1698 11.9248C0.1698 13.8248 0.6548 15.6748 1.5798 17.3098L0.0498 23.9998L6.8848 22.4998C8.4498 23.3348 10.1998 23.7748 11.9898 23.7748H11.9948C18.5048 23.7748 23.9998 18.4648 23.9998 11.9498C24.0048 8.7848 22.6573 5.8548 20.4023 3.5998ZM11.9948 21.7898C10.4148 21.7898 8.8698 21.3648 7.5148 20.5698L7.1398 20.3448L3.2648 21.2148L4.1498 17.4348L3.9023 17.0448C3.0223 15.6348 2.5598 13.9998 2.5598 12.3098C2.5598 6.5598 6.8448 1.7498 11.9998 1.7498C14.6348 1.7498 17.1073 2.7848 18.9948 4.6723C20.8823 6.5598 21.6173 9.0323 21.6123 11.6673C21.6123 17.4223 17.1323 21.7898 11.9948 21.7898ZM17.3323 14.4573C17.0423 14.3123 15.5823 13.5923 15.3148 13.4998C15.0473 13.4073 14.8498 13.3598 14.6523 13.6498C14.4548 13.9398 13.8873 14.6123 13.7123 14.8098C13.5373 15.0073 13.3623 15.0323 13.0723 14.8873C12.7823 14.7423 11.8148 14.4323 10.6723 13.4123C9.7748 12.6148 9.1723 11.6373 8.9973 11.3473C8.8223 11.0573 8.9773 10.8948 9.1273 10.7448C9.2623 10.6098 9.4273 10.3948 9.5773 10.2198C9.7273 10.0448 9.7748 9.9048 9.8673 9.7073C9.9598 9.5098 9.9123 9.3348 9.8423 9.1898C9.7723 9.0448 9.1723 7.5848 8.9273 7.0048C8.6873 6.4398 8.4423 6.5148 8.2573 6.5048C8.0823 6.4948 7.8848 6.4948 7.6873 6.4948C7.4898 6.4948 7.1748 6.5648 6.9073 6.8548C6.6398 7.1448 5.8723 7.8648 5.8723 9.3248C5.8723 10.7848 6.9148 12.1973 7.0648 12.3948C7.2148 12.5923 9.1623 15.5648 12.1123 16.8423C12.9198 17.1923 13.5473 17.3998 14.0373 17.5573C14.8273 17.8123 15.5398 17.7773 16.1023 17.7048C16.7273 17.6248 17.9148 16.9898 18.1623 16.3173C18.4098 15.6448 18.4098 15.0698 18.3398 14.9523C18.2698 14.8348 18.0723 14.7648 17.7823 14.6198C17.4923 14.4748 16.0323 13.7548 15.7423 13.6123C15.4523 13.4698 15.2548 13.3998 15.0573 13.6898C14.8598 13.9798 14.2923 14.6123 14.1173 14.8098C13.9423 15.0073 13.7673 15.0323 13.4773 14.8873C13.1873 14.7423 12.5148 14.5298 11.7023 13.8073C11.0648 13.2323 10.6323 12.5248 10.4573 12.2348C10.2823 11.9448 10.4398 11.7823 10.5898 11.6323C10.7248 11.4973 10.8873 11.2798 11.0373 11.1048C11.1873 10.9298 11.2348 10.7898 11.3273 10.5923C11.4198 10.3948 11.3723 10.2198 11.3023 10.0748C11.2323 9.9298 10.8148 8.4648 10.6023 7.9798C10.3998 7.5098 10.1923 7.5873 10.0098 7.5748C9.2448 7.5298 8.8873 7.5348 8.8873 7.5348Z" />
                </svg>
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
