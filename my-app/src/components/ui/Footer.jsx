import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} - Impreshop. Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;