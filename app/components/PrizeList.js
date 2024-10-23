import React from 'react';
import styles from './styles/PrizeList.module.css';
import Carousel from './Carousel';

const PrizeList = () => (
  <div className={styles.prizeList}>
    <h2>Liste des lots :</h2>
    <ul>
      <br />
      <li>Lot 1: Infuseur à thé</li>
      <li>Lot 2: 100g de thé Detox</li>
      <li>Lot 3: 100g de thé Signature</li>
      <li>Lot 4: Coffret Découverte 39€</li>
      <li>Lot 5: Coffret Découverte 69€</li>
      <br />
    </ul>
    <Carousel />
  </div>
);

export default PrizeList;
