import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se podría procesar el pago
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Información de Envío</h2>
      <div className="form-group">
        <label htmlFor="name">Nombre Completo</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="address">Dirección</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="city">Ciudad</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="zip">Código Postal</label>
        <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
      </div>
      <button type="submit" className="submit-button">Realizar Pedido</button>
    </form>
  );
};

export default CheckoutForm;
