import React, { useState, useEffect } from 'react';
import '../styles/layout.css';
import RegisterForm from '../Auth/RegisterForm';
import ReactDOM from 'react-dom';

const Navbar = () => {
  const [newWindow, setNewWindow] = useState(null);

  const handleRegisterClick = (event) => {
    event.preventDefault();
    window.location.href = '/registrar';
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    window.location.href = '/login';
  };

  const handleTicketsClick = (event) => {
    event.preventDefault();
    const newWin = window.open('', '_blank');
    setNewWindow(newWin);
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    window.location.href = '/contacto';
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
        </li>
        <li><a href="/registrar" onClick={handleRegisterClick} className="navbar-link">Registrate</a></li>
        <li><a href="/login" onClick={handleLoginClick} className="navbar-link">Iniciar Sesión</a></li>
        <li className="navbar-item"><a href="#events">Eventos</a></li>
        <li className="navbar-item"><a href="#tickets" onClick={handleTicketsClick}>Tickets</a></li>
        <li><a href="/contacto" onClick={handleContactClick} className="navbar-link">Contacta Con Nosotros</a></li>
        <li className="navbar-item"><a href="#about">Sobre Nosotros</a></li> {/* New menu item */}
      </ul>
    </nav>
  );
};

export default Navbar;

