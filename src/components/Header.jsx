import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">MasterServ Limeira</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/cadastro">Solicitar Serviço</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;