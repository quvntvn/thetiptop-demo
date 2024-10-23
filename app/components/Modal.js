import React from 'react';
import styles from './styles/Modal.module.css';

const Modal = ({ winner, isOpen, onClose }) => {
  if (!isOpen) return null;

  let imagePath = '';

  switch (winner) {
    case 'Thé détox ou infusion 100g':
      imagePath = '/images/100gdetox.png';
      break;
    case 'Thé signature 100g':
      imagePath = '/images/100gsignature.png';
      break;
    case 'Coffret découverte 39€':
      imagePath = '/images/coffretdecouverte39.png';
      break;
    case 'Coffret découverte 69€':
      imagePath = '/images/coffretdecouverte69.png';
      break;
    case 'Infuseur à thé':
      imagePath = '/images/infuseur.png';
      break;
    default:
      imagePath = '';
  }

  const goProfile = () => {
    window.location.href = '/profile';
  };

  const goGoogleMap = () => {
    window.open('https://maps.app.goo.gl/jyByPEmq9AbrgeZDA', '_blank');
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.titre}>{winner}</h2>
        <img src={imagePath} alt={winner} className={styles.prizeImage} />
        <p className={styles.ptext}>
          Pour récupérer votre lot, veuillez vous rendre à <a href="#" onClick={goGoogleMap} className={styles.shopLink}>notre boutique</a> avec votre code de participation et une pièce d'identité.
        </p>
        <button onClick={goProfile} className={styles.linkButton}>Voir mes lots</button>
        <button onClick={onClose} className={styles.closeButton}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;
