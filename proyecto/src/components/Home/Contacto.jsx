import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/contacto.css'; // Importar el archivo CSS
import emailjs from 'emailjs-com'; // Importar EmailJS

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      'service_hms15qd',      // Service ID
      'template_y7njn4q',     // Template ID
      form.current,           // Referencia al formulario
      'd95ra4_hPQjd4LtDb'     // Public Key
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado con éxito');
      }, (error) => {
        console.error('FAILED...', error);
        alert('Error al enviar el mensaje: ' + error.text);
      });
  };

  const handleSobreNosotrosClick = () => {
    navigate('/sobre-nosotros');
  };

  return (
    <div className="contacto-container">
      <h2>Contacta Con Nosotros</h2>
      <form onSubmit={handleSubmit} ref={form}>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
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
