import React, { useState, FormEvent } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone || !message || !privacy) {
      setError('Por favor, preencha todos os campos e concorde com a política de privacidade.');
      setSuccess('');
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted', { name, email, phone, message, privacy });
      setSuccess('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setError('');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setPrivacy(false);
    }, 2000);
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-gc-primary1">Entre em contato</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gc-primary2 focus:ring-gc-primary2 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gc-primary2 focus:ring-gc-primary2 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gc-primary2 focus:ring-gc-primary2 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gc-primary2 focus:ring-gc-primary2 sm:text-sm"
                  required
                />
              </div>
              
              <div className="flex items-center">
                {/* Correção aqui: converter string para boolean */}
                <input 
                  type="checkbox" 
                  id="privacy" 
                  name="privacy" 
                  required 
                  className="h-4 w-4 text-gc-primary2 focus:ring-gc-primary2 border-gray-300 rounded"
                  checked={privacy === true}
                  onChange={(e) => setPrivacy(e.target.checked)}
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  Concordo com a <a href="#" className="text-gc-primary2 hover:underline">Política de Privacidade</a>
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gc-primary2 hover:bg-gc-primary1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gc-primary2"
                >
                  Enviar mensagem
                </button>
              </div>
              {success && <p className="text-green-500">{success}</p>}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-gc-primary1">Informações de contato</h3>
            <p className="text-gray-700 mb-4">
              Estamos ansiosos para atendê-lo(a)! Entre em contato conosco para agendar sua avaliação ou tirar suas dúvidas.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-gc-primary2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7a2 2 0 012.828 0l7 7m0 0l2 2m-2-2l-2 2m-2-2H9.5M18 12h-6m-6 6v-6m0 0v-6"></path></svg>
                <a href="#" className="text-gray-700 hover:text-gc-primary2">Endereço: Rua da Estética, 123 - São Paulo, SP</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-gc-primary2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.387 0-2.497-1.007-2.497-2.497v-1.166a1 1 0 01.05-.443l.48-1.437a1 1 0 01.642-.538l1.476-.246a1 1 0 01.737.343l.706.706a1 1 0 01-.171 1.051l-1.032 1.032a10.993 10.993 0 01-1.032-1.032l.706-.706a1 1 0 01.343-.737l-.246-1.476a1 1 0 01-.538-.642l-1.437.48a1 1 0 01-.443.05V5.497A2.497 2.497 0 015.497 3H4a2 2 0 01-2 2z"></path></svg>
                <a href="tel:+5511999999999" className="text-gray-700 hover:text-gc-primary2">Telefone: +55 11 99999-9999</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-gc-primary2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.224 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:contato@giselecardosoestetica.com.br" className="text-gray-700 hover:text-gc-primary2">Email: contato@giselecardosoestetica.com.br</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
