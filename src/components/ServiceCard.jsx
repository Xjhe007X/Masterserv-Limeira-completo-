import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link to="/cadastro" className="service-link">Solicitar</Link>
    </div>
  );
};

export default ServiceCard;