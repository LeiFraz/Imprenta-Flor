import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // Necesitarás instalar react-icons

const Footer = () => {
  return (
    
    <footer className="footer-container">
      <div className="footer-content">
        {/* Columna 1: Logo y Descripción */}
        <div className="footer-column">
          <div className="logo-section">
            <span className="logo-icon">P</span>
            <h2>IMPRENTA<span>SHOP</span></h2>
          </div>
          <p>Creamos objetos que cuentan historias. Calidad premium en cada detalle para tus regalos más especiales.</p>
 
        </div>


        {/* Columna 2: Contacto */}
        <div className="footer-column">
          <h3>Contacto</h3>
          <p><FaMapMarkerAlt className="icon-blue" /> 
                Abasolo 724
          </p>
          <p><FaEnvelope className="icon-blue" /> 
                hola@customshop.com
         </p>
        </div>

        {/* Columna 3: Instagram Grid */}
        <div className="footer-column">
          <h3>Redes sociales</h3>
               <div className="social-icons">
            <FaFacebook /> <FaInstagram />
          </div>
          </div>
          </div>
       
       

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tienda personalizada. Todos los derechos reservados.</p>
      </div>

      {/* Botón flotante de WhatsApp */}
      <a href="https://wa.me/tunúmero" className="whatsapp-float" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;