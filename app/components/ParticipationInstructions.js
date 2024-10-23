import React from 'react';
import styles from './styles/ParticipationInstructions.module.css';

const ParticipationInstructions = () => (
  <div className={styles.instructions}>
    <h2>Comment Participer :</h2>
    <ol>
      <li>Achat en Boutique : Faites un achat dans notre boutique Thé Tip Top.</li>
      <li>Recevez un Code : À chaque achat, recevez un code unique.</li>
      <li>Jouez en Ligne : Rendez-vous sur notre site web et entrez votre code pour jouer à la roue.</li>
    </ol>
    <h2>Gagnez des Prix :</h2>
    <p>Tournez la roue et tentez de gagner de nombreux prix fantastiques ! Des réductions exclusives, des produits gratuits, et bien plus encore.</p>
    <h2>Utilisation des Prix :</h2>
    <ol>
      <li>Recevez Votre Bon : Après avoir gagné, un bon électronique ou un code de confirmation vous sera envoyé.</li>
      <li>Utilisez en Boutique : Retournez en boutique avec votre bon pour échanger votre prix.</li>
    </ol>
  </div>
);

export default ParticipationInstructions;
