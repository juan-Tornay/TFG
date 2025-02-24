import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/contacto.css'; // Importar el archivo CSS
import emailjs from 'emailjs-com'; // Importar EmailJS

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_email: email,
      to_email: 'juantyiglesias@gmail.com', // Enviar a este correo
      message: message,
    };

    emailjs.send('juantyiglesias@gmail.com', '_ejs-test-mail-service_', templateParams, 'd95ra4_hPQjd4LtDb')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado con éxito');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Error al enviar el mensaje');
      });
  };

  const handleSobreNosotrosClick = () => {
    navigate('/sobre-nosotros');
  };

  return (
    <div className="contacto-container">
      <h2>Contacta Con Nosotros</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <button onClick={handleSobreNosotrosClick}>Sobre Nosotros</button>
    </div>
  );
};

export default Contacto;
