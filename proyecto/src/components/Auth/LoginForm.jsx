import React, { useState } from 'react';
import '../styles/login.css'; // Importar el archivo CSS
import axios from 'axios'; // Importar axios
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email || !validateEmail(email)) validationErrors.email = 'Correo Electrónico no es válido';
    if (!password) validationErrors.password = 'Contraseña es requerida';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        // Añade este console.log antes de la petición
        console.log('API URL:', process.env.REACT_APP_API_URL);
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/users/login`,
          { email, password }
        );
        const { token } = response.data;
        localStorage.setItem('token', token);
        setSuccess(true);
        setTimeout(() => {
          window.location.href = '/'; // Redirect to home page
        }, 2000);
        setNotification({ message: 'Inicio de sesión exitoso. Redirigiendo...', type: 'success' });
      } catch (error) {
        console.error('❌ Error en login:', error);
        setErrors({ login: 'Correo Electrónico o Contraseña incorrectos' });
        setNotification({ message: 'Correo Electrónico o Contraseña incorrectos', type: 'error' });
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
