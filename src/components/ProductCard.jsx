import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import './ProductCard.css';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ name, price, image, index }) => {
  const { addToCart } = useContext(CartContext);

  const product = { name, price, image };

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </motion.div>
  );
};

export default ProductCard;
