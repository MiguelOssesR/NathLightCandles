import React, { useContext } from 'react';
import './ProductCard.css';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ name, price, image }) => {
  const { addToCart } = useContext(CartContext);

  const product = { name, price, image };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
