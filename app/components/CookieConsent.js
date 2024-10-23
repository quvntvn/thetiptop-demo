"use client";

import React, { useState, useEffect } from 'react';
import styles from './styles/CookieConsent.module.css';

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowPopup(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className={styles.cookiePopup}>
      <div className={styles.cookieContent}>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer sur ce site, vous acceptez notre utilisation des cookies.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.acceptButton} onClick={handleAccept}>
            Accepter
          </button>
          <button className={styles.declineButton} onClick={handleDecline}>
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
