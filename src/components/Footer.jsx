import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>MasterServ Limeira</h3>
        <p>Soluções completas em manutenção e reformas</p>
        <div className="social-links">
          <a href="https://www.instagram.com/masterservlimeira" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5519993007408" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MasterServ Limeira. Todos os direitos reservados.</p>
        <p>Limeira/SP - (19) 99300-7408</p>
      </div>
    </footer>
  );
};

export default Footer;