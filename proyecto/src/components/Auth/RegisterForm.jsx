import React, { useState } from 'react';
import axios from 'axios';
import '../styles/register.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) validationErrors.username = 'Nombre de Usuario es requerido';
    if (!email || !validateEmail(email)) validationErrors.email = 'Correo Electrónico no es válido';
    if (!password || password.length < 8) validationErrors.password = 'Contraseña debe tener al menos 8 caracteres';
    if (password !== confirmPassword) validationErrors.confirmPassword = 'Las contraseñas no coinciden';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        // Aquí se hace la petición al backend
        console.log('API URL:', process.env.REACT_APP_API_URL);
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/register`,
          { username, password, email }
        );
        setSuccess(true);
        alert(response.data.message || 'Usuario registrado correctamente');
        // NO guardes en localStorage aquí
      } catch (error) {
        setErrors({ register: 'Error al registrar usuario' });
        alert('Error al registrar usuario');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ...campos del formulario... */}
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Usuario" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
      <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirmar contraseña" />
      <button type="submit">Registrar</button>
      {errors.register && <div>{errors.register}</div>}
      {success && <div>¡Registro exitoso!</div>}
    </form>
  );
};

export default RegisterForm;