import React from 'react';
import { 
  Droplets,
  Sun,
  Microscope,
  Eraser,
  Scissors,
  Radio,
  Zap,
} from 'lucide-react';

const corporalServicesData = [
  {
    id: 1,
    icon: <Droplets className="w-10 h-10 text-gc-primary1" />,
    title: "Massagem Relaxante",
    description: "Excelente opção para tratar desconfortos musculares provocados por estresse e movimentos repetidos. Ela proporciona bem-estar, libera endorfinas e reduz a tensão muscular."
  },
  {
    id: 2,
    icon: <Sun className="w-10 h-10 text-gc-primary1" />,
    title: "Ventosaterapia",
    description: "Esta combinação é uma ótima opção para tratar desconfortos musculares causados por estresse e movimentos repetidos, promovendo bem-estar e liberação de endorfinas. A ventosaterapia, um tratamento natural, alivia dores, melhora a circulação e reduz o estresse."
  },
  {
    id: 3,
    icon: <Radio className="w-10 h-10 text-gc-primary1" />,
    title: "Pump UP – empinar os glúteos",
    description: "O pump up é um procedimento estético desenvolvido para elevar e modelar os glúteos. Trata-se de uma técnica indolor e não invasiva, capaz de oferecer resultados rápidos e visíveis."
  },
  {
    id: 4,
    icon: <Droplets className="w-10 h-10 text-gc-primary1" />,
    title: "Drenagem Linfática",
    description: "Ativa a circulação, elimina toxinas do corpo combate a celulite e inchaço e ajuda no processo de emagrecimento."
  },
  {
    id: 5,
    icon: <Droplets className="w-10 h-10 text-gc-primary1" />,
    title: "Drenagem de pós operatório Kinesio Tapping",
    description: "A drenagem linfática pós-operatória é frequentemente indicada para pacientes que se submeteram a procedimentos cirúrgicos estéticos, como cirurgias plásticas, cirurgias mamárias, lipoaspiração e abdominoplastia, além de outras intervenções que possam resultar em inchaço e retenção de líquidos."
  },
];

const facialServicesData = [
  {
    id: 6,
    icon: <Sun className="w-10 h-10 text-gc-primary1" />,
    title: "Clareamento Facial",
    description: "O clareamento facial é utilizado para minimizar a aparência de manchas escuras e descolorações na pele do rosto, com o objetivo de alcançar um tom mais uniforme e iluminado. Esse processo é realizado por meio de diferentes métodos que atuam na redução da produção ou concentração de melanina, o pigmento que dá cor à pele."
  },
  {
    id: 7,
    icon: <Microscope className="w-10 h-10 text-gc-primary1" />,
    title: "Microagulhamento Facial",
    description: "O microagulhamento facial tem como objetivo estimular a produção de colágeno e elastina na pele, promovendo a melhoria da textura e a redução de rugas, cicatrizes e manchas. Este procedimento estético utiliza um dispositivo com microagulhas que cria microlesões na pele, incentivando o processo natural de renovação celular e reparação."
  },
  {
    id: 8,
    icon: <Eraser className="w-10 h-10 text-gc-primary1" />,
    title: "Limpeza de Pele Personalizada",
    description: "Promove a remoção de impurezas e desobstrução dos poros, melhorando a oxigenação da pele e a absorção dos ativos dos produtos de skincare."
  },
  {
    id: 9,
    icon: <Eraser className="w-10 h-10 text-gc-primary1" />,
    title: "Limpeza de Pele Personalizada com Peeling Enzimático",
    description: "Promove a remoção de impurezas e desobstrução dos poros. Através do peeling enzimática ação antioxidante contra danos de radicais livres e envelhecimento precoce, Hidratação intensa para pele macia, flexível e radiante."
  },
  {
    id: 10,
    icon: <Eraser className="w-10 h-10 text-gc-primary1" />,
    title: "Limpeza de Pele Acneica",
    description: "Promove limpeza profunda da pele acneica de Grau I e II. Proporciona remoção de comedões de poros enquanto colabora para controle de oleosidade e cicatrização de lesões."
  },
  {
    id: 11,
    icon: <Sun className="w-10 h-10 text-gc-primary1" />,
    title: "Revitalização Facial",
    description: "Promove a hidratação com diversos dermocosméticos, ideal para todos os tipos de pele, uniformizando a textura e protegendo contra agressões externas."
  },
  {
    id: 12,
    icon: <Scissors className="w-10 h-10 text-gc-primary1" />,
    title: "Dermaplaning",
    description: "Promove esfoliação e remoção das células mortas do rosto utilizando uma lâmina esterilizada, contribuindo para aprimorar a textura e a tonalidade da pele. É especialmente recomendada para peles opacas, secas, com linhas finas e rugas."
  },
  {
    id: 13,
    icon: <Radio className="w-10 h-10 text-gc-primary1" />,
    title: "Radiofrequência Facial",
    description: "Promove tratamento facial de flacidez, rejuvenescimento, rugas, cicatriz de acne, melhora a hidratação da pele com aparelho KLD."
  },
  {
    id: 14,
    icon: <Scissors className="w-10 h-10 text-gc-primary1" />,
    title: "Depilação na Cera",
    description: "A depilação com cera é uma técnica eficaz para eliminar os pelos da pele, proporcionando um toque liso e suave por um período mais prolongado em comparação com métodos como a lâmina. Ao remover os pelos pela raiz, a cera atrasa o crescimento, e, com o passar do tempo, pode diminuir tanto a quantidade quanto a espessura dos pelos."
  },
  {
    id: 15,
    icon: <Scissors className="w-10 h-10 text-gc-primary1" />,
    title: "Design de Sobrancelha",
    description: "O design de sobrancelhas proporciona uma variedade de benefícios, como a melhoria da harmonia facial, a valorização do olhar e a criação de uma expressão mais marcante. Ademais, um design realizado por profissionais simplifica a manutenção, diminuindo a necessidade de retoques diários."
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Meus serviços</h2>
          <p className="section-subtitle">Conheça os tratamentos que oferecemo para realçar sua beleza natural</p>
        </div>
        
        {/* Tratamentos Corporais */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-semibold text-gc-primary1 mb-8 text-center reveal">Tratamentos Corporais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporalServicesData.map((service) => (
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
        </div>
        
        {/* Tratamentos Faciais */}
        <div>
          <h3 className="text-2xl font-playfair font-semibold text-gc-primary1 mb-8 text-center reveal">Tratamentos Faciais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facialServicesData.map((service) => (
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
