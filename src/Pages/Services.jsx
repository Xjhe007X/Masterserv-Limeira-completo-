import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    { id: 1, title: 'Elétrica', icon: '⚡', description: 'Instalações e reparos elétricos residenciais e comerciais' },
    { id: 2, title: 'Alvenaria/Pedreiro', icon: '🧱', description: 'Construção, reformas e reparos em alvenaria' },
    { id: 3, title: 'Pintura', icon: '🎨', description: 'Pintura interna e externa com qualidade profissional' },
    { id: 4, title: 'Serralheria', icon: '🔧', description: 'Serviços de serralheria e metalurgia' },
    { id: 5, title: 'Hidráulica', icon: '🚿', description: 'Reparos em vazamentos e instalações hidráulicas' },
    { id: 6, title: 'Instalações', icon: '🛠️', description: 'Instalação de móveis, equipamentos e acessórios' }
  ];

  return (
    <div className="services-page">
      <h1>Nossos Serviços</h1>
      <div className="services-container">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;