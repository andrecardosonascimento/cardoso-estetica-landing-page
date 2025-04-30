
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">Estamos prontos para atender você e tirar todas as suas dúvidas</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md reveal">
            <h3 className="text-2xl font-playfair font-semibold text-gc-primary1 mb-6">
              Envie-nos uma mensagem
            </h3>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                <p className="font-medium">Mensagem enviada com sucesso!</p>
                <p className="text-sm mt-1">Entraremos em contato em breve.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gc-primary2 focus:border-transparent" 
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gc-primary2 focus:border-transparent" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Telefone/WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gc-primary2 focus:border-transparent" 
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 mb-2">Serviço de interesse</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gc-primary2 focus:border-transparent appearance-none" 
                  required
                >
                  <option value="" disabled>Selecione um serviço</option>
                  <option value="limpeza">Limpeza de Pele</option>
                  <option value="radiofrequencia">Radiofrequência</option>
                  <option value="microagulhamento">Microagulhamento</option>
                  <option value="drenagem">Drenagem Linfática</option>
                  <option value="peeling">Peeling Químico</option>
                  <option value="criolipolise">Criolipólise</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem (opcional)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gc-primary2 focus:border-transparent h-32" 
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Enviar mensagem
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="reveal">
            <h3 className="text-2xl font-playfair font-semibold text-gc-primary1 mb-6">
              Informações de Contato
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gc-complement1 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-gc-primary1" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">Avenida Paulista, 1000, Sala 301</p>
                  <p className="text-gray-600">Bela Vista - São Paulo, SP</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gc-complement1 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-gc-primary1" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Telefone/WhatsApp</h4>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gc-complement1 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-gc-primary1" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@giselecardoso.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gc-complement1 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-gc-primary1" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Horário de funcionamento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 19h</p>
                  <p className="text-gray-600">Sábado: 9h às 15h</p>
                </div>
              </div>
            </div>
            
            <h4 className="font-medium text-gray-800 mb-4">Siga-nos nas redes sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gc-primary2 hover:bg-gc-highlight p-3 rounded-full text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gc-primary2 hover:bg-gc-highlight p-3 rounded-full text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-gray-800 mb-4">Nossa localização</h4>
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976900292284!2d-46.65390508467358!3d-23.5650887846719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1651165309047!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
