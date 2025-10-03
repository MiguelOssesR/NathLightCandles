import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import './TestimonialCard.css';

const TestimonialCard = ({ name, rating, review, image, index }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} color={i < rating ? '#ffc107' : '#e4e5e9'} />
      );
    }
    return stars;
  };

  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="testimonial-header">
        <img src={image} alt={name} className="testimonial-image" />
        <div className="testimonial-info">
          <h4>{name}</h4>
          <div className="testimonial-rating">{renderStars()}</div>
        </div>
      </div>
      <p className="testimonial-review">"{review}"</p>
    </motion.div>
  );
};

export default TestimonialCard;
