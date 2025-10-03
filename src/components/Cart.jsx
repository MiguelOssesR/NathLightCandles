import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const getTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.name} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.name, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.name)}>Eliminar</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${getTotal()}</h3>
            <button className="checkout-button">Proceder al Pago</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
