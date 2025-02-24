import React, { useEffect, useRef, useState } from 'react';
import '../styles/home.css';

const HeroSection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Inicia desactivado

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Error al reproducir:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="hero-section">
      <audio ref={audioRef} loop>
        <source src="/assets/audio/musica.mp3" type="audio/mpeg" />
        Tu navegador no soporta el audio.
      </audio>

      <img className="carousel-image" src="/assets/images/robot.webp" alt="Hero Image" />
      <img className="gif" src="/assets/images/jhony.gif" alt="GIF" />
    </section>
  );
};

export default HeroSection;