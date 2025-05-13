import React, { useState, useEffect } from 'react';
import './Fototeca.css'; // Import the CSS file for styling

const Fototeca = () => {
  const [images, setImages] = useState(() => {
    const savedImages = localStorage.getItem('fototecaImages');
    return savedImages ? JSON.parse(savedImages) : [];
  });

  useEffect(() => {
    localStorage.setItem('fototecaImages', JSON.stringify(images));
  }, [images]);

  const handleAddPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="fototeca-container">
      <h1>Fototeca</h1>
      <p>Bienvenido a la Fototeca. Aquí puedes explorar nuestras colecciones de fotos.</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleAddPhoto}
        style={{ display: 'block', margin: '10px 0' }}
      />
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Uploaded ${index}`}
              className="gallery-image"
            />
            <button
              onClick={() => handleDeletePhoto(index)}
              className="delete-button"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fototeca;
