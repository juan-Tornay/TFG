import React, { useState, useEffect, useRef } from 'react';
import '../styles/layout.css';
import RegisterForm from '../Auth/RegisterForm';
import ReactDOM from 'react-dom';

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Inicia desactivado
  const audioRef = useRef(new Audio('/assets/audio/musica.mp3')); // Ensure this path is correct
  const [cartItems, setCartItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (
        !e.target.closest('.navbar-menu') &&
        !e.target.closest('.navbar-toggle')
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

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
    window.location.href = '/fototeca';
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    window.location.href = '/contacto';
  };

  const handleAboutClick = (event) => {
    event.preventDefault();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Error al reproducir:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleCartClick = (event) => {
    event.preventDefault();
    alert(`Tienes ${cartItems.length} artículos en tu carrito.`);
  };

  return (
    <nav className="navbar">
      <button
        className={`navbar-toggle${menuOpen ? ' open' : ''}`}
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-menu${menuOpen ? ' open' : ''}`}>
        <li className="navbar-item">
          <a href="/" className="navbar-link">Inicio</a>
        </li>
        <li className="navbar-item">
          <a href="/carrito" className="navbar-link" onClick={handleCartClick}>
            <img src="/assets/images/carrito.png" alt="Carrito" className="navbar-icon" />
          </a>
        </li>
        <li><a href="/registrar" onClick={handleRegisterClick} className="navbar-link">Registrate</a></li>
        <li><a href="/login" onClick={handleLoginClick} className="navbar-link">Iniciar Sesión</a></li>
        <li className="navbar-item"><a href="#events">Eventos</a></li>
        <li className="navbar-item"><a href="#tickets" onClick={handleTicketsClick}>Fototeca</a></li>
        <li><a href="/contacto" onClick={handleContactClick} className="navbar-link">Contacta Con Nosotros</a></li>
        <li className="navbar-item">
          <button onClick={handleAboutClick} className="navbar-link">
            {isPlaying ? "Apagar Música" : "Encender Música"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

