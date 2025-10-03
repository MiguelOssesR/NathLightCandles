import React, { useState, useEffect } from 'react';
import './Marquee.css';

const Marquee = () => {
  const messages = [
    "¡Envío gratis en pedidos superiores a $50!",
    "Nuevas velas de temporada ya disponibles.",
    "Suscríbete a nuestro boletín y obtén un 10% de descuento."
  ];

  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setMessage(messages[i]);
    }, 10000); // Change message every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee-content" key={message}>
        {message}
      </div>
    </div>
  );
};

export default Marquee;
