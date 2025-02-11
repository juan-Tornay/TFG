import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/home.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div key="1">
          <img className="carousel-image" src="/assets/images/FinalGif.gif" alt="finalGif" />
        </div>
        
       
     
     
      </Carousel>
    </section>
  );
};

export default HeroSection; 
