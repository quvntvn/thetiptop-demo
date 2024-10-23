import React from 'react';
import styles from './styles/Presentation.module.css';
import Link from 'next/link';

const Presentation = () => {
  return (
    <div className={styles['contest-banner-container']}>
      <h1 className={styles['contest-title']}>GRAND JEU CONCOURS</h1>
      <p className={styles['contest-text']}>100% gagnant !!!</p>
      <div className={styles['contest-image']}></div>
      <button className={styles.contestButton} onClick={() => window.location.href = '/lots'}>Voir les lots</button>
    </div>
  );
};

export default Presentation;
