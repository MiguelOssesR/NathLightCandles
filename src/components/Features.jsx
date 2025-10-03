import React from 'react';
import './Features.css';
import { FaShippingFast, FaShieldAlt, FaUndo, FaHeadset } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-item">
        <FaShippingFast className="feature-icon" />
        <div className="feature-text-content">
          <h3>Envío gratis</h3>
          <p>Envíos a todo el país</p>
        </div>
      </div>
      <div className="feature-item">
        <FaShieldAlt className="feature-icon" />
        <div className="feature-text-content">
          <h3>Pago seguro</h3>
          <p>Transacciones 100% seguras</p>
        </div>
      </div>
      <div className="feature-item">
        <FaUndo className="feature-icon" />
        <div className="feature-text-content">
          <h3>100% Reembolso</h3>
          <p>Garantía de devolución</p>
        </div>
      </div>
      <div className="feature-item">
        <FaHeadset className="feature-icon" />
        <div className="feature-text-content">
          <h3>Atención 24/7</h3>
          <p>Canales de comunicación siempre activos</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
