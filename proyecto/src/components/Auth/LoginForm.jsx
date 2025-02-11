import React, { useState } from 'react';
import '../styles/login.css'; // Importar el archivo CSS
import { getUserFromLocal } from '../services/auth_API';
import { NotificationSystem } from '../Shared/NotificationSystem';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [notification, setNotification] = useState(null);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email || !validateEmail(email)) validationErrors.email = 'Correo Electrónico no es válido';
    if (!password) validationErrors.password = 'Contraseña es requerida';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log('Inicio de sesión fallido:', validationErrors);
    } else {
      setErrors({});
      const user = getUserFromLocal();
      if (user && user.email === email && user.password === password) {
        setSuccess(true);
        console.log('Inicio de sesión exitoso:', { email });
        setTimeout(() => {
          window.location.href = '/'; // Redirect to home page
        }, 2000);
        setNotification({ message: 'Inicio de sesión exitoso. Redirigiendo...', type: 'success' });
      } else {
        setErrors({ login: 'Correo Electrónico o Contraseña incorrectos' });
        setNotification({ message: 'Correo Electrónico o Contraseña incorrectos', type: 'error' });
        console.log('Inicio de sesión fallido: Correo Electrónico o Contraseña incorrectos');
      }
    }
  };

  return (
    <div className="login-form-container">
      {notification && <NotificationSystem message={notification.message} type={notification.type} />}
      {success ? (
        <div className="success-message">Inicio de sesión exitoso. Redirigiendo...</div>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
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
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <div className="forgot-password-link">
            <a href="/forgot-password">¿Has olvidado tu contraseña?</a>
          </div>
          <button type="submit" className="submit-button">Iniciar Sesión</button>
          <div className="register-link">
            <a href="/registrar">¿No tienes una cuenta? Regístrate</a>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
