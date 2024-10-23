import React, { useState, useEffect } from 'react';
import styles from './styles/login.module.css';

const Form = ({ onCodeSubmit, winner }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const prizes = ["Infuseur à thé", "Coffret découverte 39€", "Thé signature 100g", "Thé détox ou infusion 100g", "Coffret découverte 69€"];

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('SESSION='));
    setIsAuthenticated(!!token);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('SESSION=')).split('=')[1];

      
      if (code.length !== 8) {
        setError('Le code doit contenir exactement 8 caractères.');
        setIsLoading(false);
        return;
      }

      
      var prix = prizes[Math.floor(Math.random() * prizes.length)];
      onCodeSubmit(true, prix);
      data.status = "Ticket claimed!";
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/participate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ code }),
      });
      const historique = JSON.parse(localStorage.getItem('historique')) || [];
      historique.push({ code, prize: prix, is_claimed: false });
      localStorage.setItem('historique', JSON.stringify(historique));

      const data = await response.json();
      if (data.status === "Ticket claimed!") {
        onCodeSubmit(true, data.prize); 
        const historique = JSON.parse(localStorage.getItem('historique')) || [];
        historique.push({ code, prize: data.prize, is_claimed: false });
        localStorage.setItem('historique', JSON.stringify(historique));
     
      } else {
        setError('Le code est invalide. Veuillez réessayer.');
        onCodeSubmit(false);
      }
    } catch (error) {
      console.error('Erreur lors de la validation du code:', error);
      onCodeSubmit(false);
    } finally {
      setIsLoading(false);
    }
  };

  const generateRandomCode = () => {
    
    const randomCode = Math.random().toString(36).substr(2, 8).toUpperCase();
    setCode(randomCode); 
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.authMessage}>
        <p className={styles.error}>Vous devez être connecté pour valider un code.</p>
        <button
          className={styles.submitButton}
          onClick={() => window.location.href = '/login'}
        >
          Se connecter
        </button>
        <button
          className={styles.submitButton}
          onClick={() => window.location.href = '/register'}
        >
          Créer un compte
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h1 className={styles.title}>Validation du Code</h1>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Code:</label>
        <input
          className={styles.input}
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Entrez votre code"
          required
        />
      </div>
      <button
        type="button"
        className={styles.submitButton} 
        onClick={generateRandomCode} 
      >
        Générer un code aléatoire
      </button>
      <button
        type="submit"
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            Chargement...
            <span className={styles.spinner}></span>
          </>
        ) : 'Valider et tourner la roue'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
      {winner && <p className={styles.winnerMessage}>Félicitations ! Vous avez gagné : {winner}</p>}
    </form>
  );
};

export default Form;
