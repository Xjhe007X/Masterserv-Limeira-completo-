import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userType, setUserType] = useState('client');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    description: '',
    urgency: 'normal'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `*Nova Solicitação MasterServ Limeira*\n\n` +
      `*Tipo de Usuário:* ${userType === 'client' ? 'Cliente' : 'Imobiliária'}\n` +
      `*Nome:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Endereço:* ${formData.address}\n` +
      `*Tipo de Serviço:* ${formData.serviceType}\n` +
      `*Descrição:* ${formData.description}\n` +
      `*Urgência:* ${formData.urgency === 'normal' ? 'Normal' : 'Urgente'}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5519993007408?text=${encodedMessage}`, '_blank');
    
    // Redirecionar após envio
    navigate('/obrigado'); // Você pode criar uma página de agradecimento
  };

  return (
    <div className="register-container">
      <h2>Cadastro de Serviço</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tipo de Usuário:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="userType"
                value="client"
                checked={userType === 'client'}
                onChange={() => setUserType('client')}
              />
              Cliente
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="realtor"
                checked={userType === 'realtor'}
                onChange={() => setUserType('realtor')}
              />
              Imobiliária
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Endereço:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Tipo de Serviço:</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Selecione...</option>
            <option value="Elétrica">Elétrica</option>
            <option value="Alvenaria/Pedreiro">Alvenaria/Pedreiro</option>
            <option value="Pintura">Pintura</option>
            <option value="Serralheria">Serralheria</option>
            <option value="Hidráulica">Hidráulica (Vazamentos)</option>
            <option value="Instalações">Instalações</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        <div className="form-group">
          <label>Descrição do Problema/Serviço:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Nível de Urgência:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="urgency"
                value="normal"
                checked={formData.urgency === 'normal'}
                onChange={handleChange}
              />
              Normal
            </label>
            <label>
              <input
                type="radio"
                name="urgency"
                value="urgent"
                checked={formData.urgency === 'urgent'}
                onChange={handleChange}
              />
              Urgente
            </label>
          </div>
        </div>

        <button type="submit">Enviar Solicitação</button>
      </form>
    </div>
  );
};

export default Register;