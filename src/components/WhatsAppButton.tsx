
import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isIOS, setIsIOS] = useState(false);
  
  useEffect(() => {
    // Detectar se o dispositivo é iOS
    const userAgent = navigator.userAgent || navigator.vendor;
    const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    setIsIOS(isIOSDevice);
  }, []);
  
  const phoneNumber = "5511981727450";
  const message = "Olá, gostaria de agendar uma consulta";
  
  // URL específica para iOS ou outros dispositivos
  const whatsappUrl = isIOS 
    ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    : `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 fixed bottom-6 right-6 z-50"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
