import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // Reemplaza con tu número de teléfono
  const message = 'Hola, estoy interesado en sus productos.'; // Mensaje predeterminado

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      className="whatsapp-button"
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { delay: 1.5, duration: 0.5 } }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
      >
        <FaWhatsapp size={40} />
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
