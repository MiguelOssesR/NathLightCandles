import React, { createContext, useState } from 'react';
import Notification from '../components/Notification';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState({ message: '', show: false });

  const showNotification = (message) => {
    setNotification({ message, show: true });
    setTimeout(() => {
      setNotification({ message: '', show: false });
    }, 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: quantity }];
      }
    });
    showNotification(`${product.name} ha sido añadido al carrito!`);
  };

  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  const updateQuantity = (productName, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === productName ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      <>{children}</>
      <Notification message={notification.message} show={notification.show} />
    </CartContext.Provider>
  );
};