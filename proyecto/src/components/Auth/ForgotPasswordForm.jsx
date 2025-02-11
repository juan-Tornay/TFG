import React, { useState } from 'react';
import '../styles/register.css'; // Importar el archivo CSS
import { validateEmail } from '../Shared/ValidationSystem';
import { NotificationSystem } from '../Shared/NotificationSystem';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email || !validateEmail(email)) validationErrors.email = 'Correo Electrónico no es válido';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log(`Sending recovery link to: ${email}`);
      // Simulate API call
      const isEmailRegistered = true; // Change to false to simulate unregistered email
      if (isEmailRegistered) {
        setNotification({ message: 'Enlace de recuperación enviado. Revisa tu correo.', type: 'success' });
      } else {
        setNotification({ message: 'Correo Electrónico no registrado.', type: 'error' });
      }
    }
  };

  return (
    <div className="register-form-container">
      {notification && <NotificationSystem message={notification.message} type={notification.type} />}
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <button type="submit" className="submit-button">Enviar Enlace de Recuperación</button>
        <div className="login-link">
          <a href="/login">Volver al Inicio de Sesión</a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
