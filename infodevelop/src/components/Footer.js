import React from 'react';
import '../css/Footer.css'; // Importe o arquivo de estilos CSS para o footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h2>Visita-nos</h2>
          <p>Endereço: 123 Rua Principal, Cidade</p>
          <p>Telefone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Contactos</h2>
          <p>Email: info@example.com</p>
          <p>Formulário de contato</p>
        </div>
        <div className="footer-section">
          <h2>Segue-nos</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="copyright-container">
          <p className="copyright">Site desenvolvido por InfoDevelop.</p>
          <p className="copyright">&copy; 2024 InfoDevelop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
