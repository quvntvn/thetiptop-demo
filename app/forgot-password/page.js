"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../components/styles/ForgotPassword.module.css';
import ClientLayout from '@/components/ClientLayout';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/password-reset-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Un email a été envoyé pour réinitialiser votre mot de passe.');
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Mot de passe oublié</h1>
          {message && <p className={styles.successMessage}>{message}</p>}
          {error && <p className={styles.errorMessage}>{error}</p>}
          {!isSubmitted && (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email:</label>
                <input
                  className={styles.input}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton} disabled={isLoading}>
                {isLoading ? 'Envoi en cours...' : 'Réinitialiser le mot de passe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </ClientLayout>
  );
}
