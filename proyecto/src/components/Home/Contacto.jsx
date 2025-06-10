import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/contacto.css';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const form = useRef();
  const navigate = useNavigate();

  const MAX_FILE_SIZE = 50 * 1024; // 50KB

  const handleSubmit = (event) => {
    event.preventDefault();

  

    emailjs.sendForm(
      'service_hms15qd',
      'template_y7njn4q',
      form.current,
      'd95ra4_hPQjd4LtDb'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Mensaje enviado con éxito');
      // Limpiar campos
      setEmail('');
      setMessage('');
      setFile(null);
    }, (error) => {
      console.error('FAILED...', error);
      alert('Error al enviar el mensaje: ' + error.text);
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSobreNosotrosClick = () => {
    navigate('/sobre-nosotros');
  };

  return (
    <div className="contacto-container">
      <h2>Contacta Con Nosotros</h2>
      <form onSubmit={handleSubmit} ref={form} encType="multipart/form-data">
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

      

        {file && (
          <>
            {file.size > MAX_FILE_SIZE ? (
              <span style={{ color: 'red' }}>
                El archivo es demasiado grande (máx 50KB).
              </span>
            ) : (
              <span style={{ color: 'green' }}>
                Tamaño del archivo: {(file.size / 1024).toFixed(1)} KB. Listo para enviar.
              </span>
            )}
            <div style={{ marginTop: '10px' }}>
              <strong>Vista previa:</strong><br />
              <img
                src={URL.createObjectURL(file)}
                alt="Vista previa"
                style={{ maxWidth: '200px', marginTop: '5px', borderRadius: '8px' }}
              />
            </div>
          </>
        )}

        <button type="submit" disabled={file && file.size > MAX_FILE_SIZE}>
          Enviar
        </button>
      </form>

     
    </div>
  );
};

export default Contacto;
