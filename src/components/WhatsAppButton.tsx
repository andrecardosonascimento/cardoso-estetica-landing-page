
import React from 'react';
import { Whatsapp } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <Whatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
