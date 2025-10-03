import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
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
      {children}
    </CartContext.Provider>
  );
};