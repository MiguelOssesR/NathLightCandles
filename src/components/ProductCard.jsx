import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
