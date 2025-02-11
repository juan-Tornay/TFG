import React, { useState, useEffect } from 'react';
import '../styles/register.css'; // Importar el archivo CSS
import { saveUserToLocal, getUserFromLocal } from '../services/auth_API';
import { validateEmail, validatePassword, checkDuplicateUser } from '../Shared/ValidationSystem';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let validationErrors = {};
    if (username && checkDuplicateUser(username, email, getUserFromLocal)) validationErrors.username = 'Nombre de Usuario o Correo Electrónico ya existe';
    if (email && !validateEmail(email)) validationErrors.email = 'Correo Electrónico no es válido';
    if (password && !validatePassword(password)) validationErrors.password = 'Contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un símbolo';
    if (password && confirmPassword && password !== confirmPassword) validationErrors.confirmPassword = 'Las contraseñas no coinciden';
    setErrors(validationErrors);
  }, [username, email, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) validationErrors.username = 'Nombre de Usuario es requerido';
    if (!email || !validateEmail(email)) validationErrors.email = 'Correo Electrónico no es válido';
    if (!password || !validatePassword(password)) validationErrors.password = 'Contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un símbolo';
    if (password !== confirmPassword) validationErrors.confirmPassword = 'Las contraseñas no coinciden';
    if (checkDuplicateUser(username, email, getUserFromLocal)) validationErrors.username = 'Nombre de Usuario o Correo Electrónico ya existe';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log('Registro fallido:', validationErrors);
    } else {
      setErrors({});
      setSuccess(true);
      saveUserToLocal({ username, email, password });
      console.log('Usuario registrado exitosamente:', { username, email });
      setTimeout(() => {
        window.location.href = '/login'; // Redirect to login page
      }, 2000);
    }
  };

  return (
    <div className="register-form-container">
      {success ? (
        <div className="success-message">Registro exitoso. Redirigiendo al login...</div>
      ) : (
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Nombre de Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errors.username ? 'input-error' : ''}
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
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
          <div className="form-group">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errors.confirmPassword ? 'input-error' : ''}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>
          <button type="submit" className="submit-button">Registrarse</button>
          <div className="login-link">
            <a href="/login">¿Ya tienes una cuenta? Inicia Sesión</a>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
