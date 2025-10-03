import React, { useState } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <div className="modal-details">
          <h2>{product.name}</h2>
          <p>{product.info}</p>
          <p className="price">{product.price}</p>
          <div className="quantity-controls">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
