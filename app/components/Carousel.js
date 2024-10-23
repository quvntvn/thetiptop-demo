"use client";

import React, { useState, useEffect } from 'react';
import styles from './styles/Carousel.module.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const lots = [
    { src: '/images/infuseur.png', description: 'Lot 1: Infuseur à thé' },
    { src: '/images/100gdetox.png', description: 'Lot 2: 100g de thé Detox' },
    { src: '/images/100gsignature.png', description: 'Lot 3: 100g de thé Signature' },
    { src: '/images/coffretdecouverte39.png', description: 'Lot 4: Coffret Découverte 39€' },
    { src: '/images/coffretdecouverte69.png', description: 'Lot 5: Coffret Découverte 69€' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % lots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, lots.length]);

  const showPrevImage = () => {
    const newIndex = (currentIndex - 1 + lots.length) % lots.length;
    setCurrentIndex(newIndex);
  };

  const showNextImage = () => {
    const newIndex = (currentIndex + 1) % lots.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.carousel}>
      <button className={`${styles.carouselButton} ${styles.prev}`} onClick={showPrevImage}>&#10094;</button>
      {lots.map((lot, index) => (
        <div key={index} className={index === currentIndex ? styles.active : ''}>
          <img src={lot.src} alt={`Lot ${index + 1}`} className={index === currentIndex ? styles.active : ''} />
          <div className={`${styles.description} ${index === currentIndex ? styles.active : ''}`}>
            {lot.description}
          </div>
        </div>
      ))}
      <button className={`${styles.carouselButton} ${styles.next}`} onClick={showNextImage}>&#10095;</button>
    </div>
  );
};

export default Carousel;
