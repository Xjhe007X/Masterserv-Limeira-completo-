import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    { id: 1, title: 'Elétrica', icon: '⚡', description: 'Instalações e reparos elétricos residenciais e comerciais' },
    { id: 2, title: 'Alvenaria/Pedreiro', icon: '🧱', description: 'Construção, reformas e reparos em alvenaria' },
    { id: 3, title: 'Pintura', icon: '🎨', description: 'Pintura interna e externa com qualidade profissional' },
    { id: 4, title: 'Serralheria', icon: '🔧', description: 'Serviços de serralheria e metalurgia' },
    { id: 5, title: 'Hidráulica', icon: '🚿', description: 'Reparos em vazamentos e instalações hidráulicas' },
    { id: 6, title: 'Instalações', icon: '🛠️', description: 'Instalação de móveis, equipamentos e acessórios' }
  ];

  return (
    <div className="home-container">
      <section className="hero-banner">
        <h1>MasterServ Limeira</h1>
        <p>Soluções completas em manutenção e reformas</p>
        <Link to="/cadastro" className="cta-button">Solicitar Serviço</Link>
      </section>

      <section className="services-section">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>Sobre Nós</h2>
        <p>
          A MasterServ Limeira é especializada em serviços gerais de manutenção, oferecendo 
          soluções rápidas e eficientes para residências e empresas em Limeira e região. 
          Nossa equipe de profissionais qualificados está pronta para atender suas necessidades.
        </p>
      </section>
    </div>
  );
};

export default Home;