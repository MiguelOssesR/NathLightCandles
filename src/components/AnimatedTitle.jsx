import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = ({ text, className }) => {
  return (
    <motion.h2
      className={className}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.h2>
  );
};

export default AnimatedTitle;
