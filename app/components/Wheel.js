import React, { useState, useRef } from 'react';
import styles from './styles/Wheel.module.css';
import Form from './Form';
import Modal from './Modal';

const WheelComponent = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [prize, setPrize] = useState(null);
  const [rotationDegrees, setRotationDegrees] = useState(0); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const audioRefSpin = useRef(null);  
  const audioRefWin = useRef(null);   

  const prizes = ["Infuseur à thé", "Coffret découverte 39€", "Thé signature 100g", "Thé détox ou infusion 100g", "Coffret découverte 69€"];

  const handleCodeSubmit = (isValid, wonPrize) => {
    if (isValid) {
      
      if (audioRefSpin.current) {
        audioRefSpin.current.play();
      }
  
      
      const selectedPrize = wonPrize || prizes[Math.floor(Math.random() * prizes.length)];
  
      const prizeIndex = prizes.indexOf(selectedPrize);
      const segmentDegrees = 360 / prizes.length;
      const randomOffset = Math.random() * segmentDegrees;
      const newPrizeRotation = prizeIndex * segmentDegrees + randomOffset;
  
      const extraRotations = 360 * 5;
      const newRotation = extraRotations + newPrizeRotation;
  
      setRotationDegrees(newRotation);
      setIsSpinning(true);
  
      setTimeout(() => {
        setIsSpinning(false);
        setPrize(selectedPrize); 
        setIsModalOpen(true);
  
        
        if (audioRefSpin.current) {
          audioRefSpin.current.pause();
          audioRefSpin.current.currentTime = 0;
        }
  
        
        if (audioRefWin.current) {
          audioRefWin.current.play();
        }
      }, 4000);
    }
  };
  

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.wheelContainer}>
      {/* Add audio elements for the spinning and winning sounds */}
      <audio ref={audioRefSpin} src="./sounds/spin.mp3" preload="auto" />
      <audio ref={audioRefWin} src="./sounds/win.mp3" preload="auto" />
      <div className={styles.middle}>

      <div className={styles.indicatorContainer}>
        <img
          src="/images/Indicator.png"
          alt="Indicator"
          className={styles.indicator}
        />
      </div>

      <img
        src="/images/Wheel.png"
        alt="Wheel"
        style={{ transform: `rotate(${rotationDegrees}deg)` }} 
        className={`${styles.wheelImage} ${isSpinning ? styles.spin : ''}`}
      />
      </div>

      <Form onCodeSubmit={handleCodeSubmit} /> 

      {prize && (
        <Modal winner={prize} isOpen={isModalOpen} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default WheelComponent;
