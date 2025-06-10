import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const saveUserToLocal = (user) => {
  localStorage.setItem('registeredUser', JSON.stringify(user));
};

export const getUserFromLocal = () => {
  const user = localStorage.getItem('registeredUser');
  return user ? JSON.parse(user) : null;
};
 // Petición para registrar usuario en la base de datos
export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/api/users/register`, userData);
};

// Petición para iniciar sesión
export const loginUser = async (userData) => {
  return axios.post(`${API_URL}/api/users/login`, userData);
};   



