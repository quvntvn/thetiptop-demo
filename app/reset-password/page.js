"use client";

import { useState, useEffect, Suspense } from 'react'; 
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '../components/styles/ResetPassword.module.css';
import ClientLayout from '@/components/ClientLayout';

function ResetPasswordContent() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const router = useRouter();
  const searchParams = useSearchParams(); 

  
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setError('Jeton de réinitialisation manquant. Veuillez réessayer.');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token, 
          newPassword,
        }),
      });

      if (response.ok) {
        window.alert('Votre mot de passe a été réinitialisé avec succès.'); 
        router.push('/login'); 
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Réinitialiser votre mot de passe</h1>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Nouveau mot de passe:</label>
            <div className={styles.passwordContainer}>
              <input
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <span
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Confirmer le mot de passe:</label>
            <div className={styles.passwordContainer}>
              <input
                className={styles.input}
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                className={styles.eyeIcon}
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Réinitialisation en cours...' : 'Réinitialiser le mot de passe'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <ClientLayout>
      <Suspense fallback={<div>Chargement...</div>}>
        <ResetPasswordContent />
      </Suspense>
    </ClientLayout>
  );
}
