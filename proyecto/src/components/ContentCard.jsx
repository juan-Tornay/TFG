import React from 'react';

const ContentCard = ({ product }) => {
  return (
    <div className="content-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      {product.price && <p>{product.price}</p>}
    </div>
  );
};

export default ContentCard;
