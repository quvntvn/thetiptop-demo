"use client";

import React from 'react';
import '../globals.css';
import styles from '../components/styles/Lots.module.css';
import ClientLayout from '../components/ClientLayout';
import Carousel from '../components/Carousel';

const Lots = () => {
  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.profileContainer}>
          <h1 className="text-4xl font-bold mb-4 mt-8">Découvrez nos lots incroyables !</h1>
          <p className="text-lg mb-4">
            Participez à notre jeu concours pour tenter de remporter l'un des lots suivants :
          </p>
          <ul >
            <li>Infuseur à thé de qualité</li>
            <li>100g de thé Detox pour une cure bien-être</li>
            <li>100g de thé Signature, une expérience gustative unique</li>
            <li>Coffret Découverte à 39€, parfait pour les amateurs de thé</li>
            <li>Coffret Découverte à 69€, une sélection premium de nos meilleurs thés</li>
          </ul>
          <div className={styles.recoveryInfo}>
            <h2 className="text-2xl font-bold mb-4 mt-8">Comment récupérer vos lots ?</h2>
            <p className="text-lg mb-4">
              Pour récupérer vos lots, veuillez vous rendre à <a href="https://maps.app.goo.gl/jyByPEmq9AbrgeZDA" className={styles.shopLink} target="_blank">notre boutique</a> avec votre code de participation et une pièce d'identité.
            </p>
          </div>
          <h2 className={styles.grandTirage}>
            Grand Tirage au Sort :
          </h2>
          <p className="text-lg">
            À la fin du concours, tous les participants seront inscrits à un tirage au sort pour tenter de remporter notre méga-lot :
          </p>
          <p className="text-xl font-semibold mt-2 text-center mt-6 mb-4">
            Une année de thé gratuit !
          </p>
        </div>
        <div className={styles.column_r}>
          <Carousel />
        </div>
      </div>
    </ClientLayout>
  );
};

export default Lots;
