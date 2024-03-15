import React from 'react';
import '../css/Contact.css'; // Importe o arquivo de estilos CSS para o formulário de contato

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h2>Entre em contato conosco:</h2>
        <p>Aqui está um exemplo de texto grande à esquerda. Você pode substituir este texto pelo conteúdo desejado.</p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
