import React, { useState } from 'react';
import '../styles/contacto.css'; // Importar el archivo CSS
import emailjs from 'emailjs-com'; // Importar EmailJS

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_email: email,
      to_email: 'juantyiglesias@gmail.com', // Enviar a este correo
      message: message,
    };

    console.log('templateParams:', templateParams); // Verificar templateParams

    emailjs.send('service_hms15qd', 'template_y7njn4q', templateParams, 'd95ra4_hPQjd4LtDb')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado con éxito');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Error al enviar el mensaje');
      });
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
    </div>
  );
};

export default Contacto;
