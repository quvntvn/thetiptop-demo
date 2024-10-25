"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleLogin } from '@react-oauth/google';
import styles from '../components/styles/login.module.css';
import ClientLayout from '@/components/ClientLayout';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    age: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const router = useRouter();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      if (response.ok) {
        const data = await response.json();
        document.cookie = `SESSION=${data.token}; path=/`;
        const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });
        const userData = await user.json();
        localStorage.setItem('userData', JSON.stringify(userData));

        if (userData.roles.includes('ROLE_ADMIN')) {
          router.push('/admin');
        } else if (userData.roles.includes('ROLE_EMPLOYEE')) {
          router.push('/employe');
        } else {
          router.push('/');
        }
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Erreur de connexion.';
        setError(errorMessage);
      }
    } catch (error) {
      setError('Erreur de connexion.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!acceptedTerms) {
      setError('Vous devez accepter la Politique de confidentialité et les Conditions Générales d\'Utilisation.');
      setIsLoading(false);
      return;
    }
    
    if (!passwordRegex.test(formData.password)) {
      setError('Mot de passe trop faible.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess('Inscription réussie ! Connexion en cours...');
        await handleLogin();
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Une erreur est survenue lors de l\'inscription.');
      }
    } catch (error) {
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (response) => {
    const token = response.credential;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login/oauth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, provider: 'google' }),
    })
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          document.cookie = `SESSION=${data.token}; path=/`;
          const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          });
          const userData = await user.json();
          localStorage.setItem('userData', JSON.stringify(userData));

          if (userData.roles.includes('ROLE_ADMIN')) {
            router.push('/admin');
          } else if (userData.roles.includes('ROLE_EMPLOYEE')) {
            router.push('/employe');
          } else {
            router.push('/');
          }
        } else {
          const errorData = await res.json();
          setError(errorData.message || 'Erreur lors de la connexion avec Google.');
        }
      })
      .catch(() => {
        setError('Erreur lors de la connexion avec Google.');
      });
  };

  const handleFacebookSuccess = async (response) => {
    const { accessToken, userID } = response;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login/oauth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: accessToken, provider: 'facebook', userID }),
      });

      if (res.ok) {
        const data = await res.json();
        document.cookie = `SESSION=${data.token}; path=/`;

        const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });
        const userData = await user.json();
        localStorage.setItem('userData', JSON.stringify(userData));

        if (userData.roles.includes('ROLE_ADMIN')) {
          router.push('/admin');
        } else if (userData.roles.includes('ROLE_EMPLOYEE')) {
          router.push('/employe');
        } else {
          router.push('/');
        }
      } else {
        const errorData = await res.json();
        setError(errorData.message || 'Une erreur est survenue.');
      }
    } catch (error) {
      setError('Erreur lors de la connexion avec Facebook');
    }
  };

  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Inscription</h1>
          {error && <p className={styles.errorRed}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
          <form onSubmit={handleRegister}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="name">Nom d'utilisateur:</label>
              <input 
                className={styles.input} 
                type="text" 
                name="name" 
                id="name"
                required 
                onChange={handleChange} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email">Email:</label>
              <input 
                className={styles.input} 
                type="email" 
                name="email" 
                id="email"
                required 
                onChange={handleChange} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="password">Mot de passe:</label>
              <div className={styles.passwordContainer}>
                <input
                  className={styles.input}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  required
                  onChange={handleChange}
                />
                <span
                  className={styles.eyeIcon}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </span>
              </div>
              <p className={styles.passwordRequirements}>
                Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.
              </p>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="gender">Sexe:</label>
              <select 
                className={styles.input} 
                name="gender" 
                id="gender"
                required 
                onChange={handleChange}
              >
                <option value="">Sélectionnez...</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="age">Âge:</label>
              <input 
                className={styles.input} 
                type="number" 
                name="age" 
                id="age"
                min="18" 
                required 
                onChange={handleChange} 
              />
            </div>
             <div className={styles.inputGroup}>
              <label className={styles.passwordRequirements}>
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={() => setAcceptedTerms(!acceptedTerms)}
                />
                J'accepte la <a href="/politique-de-confidentialite" className={styles.link}>Politique de confidentialité</a> et les <a href="/cgu" className={styles.link}>Conditions Générales d'Utilisation</a>.
              </label>
            </div>
            <button type="submit" className={styles.submitButton} disabled={isLoading}>
              {isLoading ? (
                <>
                  Chargement...
                  <span className={styles.spinner}></span>
                </>
              ) : "S'inscrire"}
            </button>
          </form>

          <div className={styles.divider}>
            <span>ou</span>
          </div>
          <div className={styles.socialLogin}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError('Erreur lors de la connexion avec Google')}
            />
          </div>

          <p className={styles.loginLink}>
            Vous avez déjà un compte ? <a href="/login" className={styles.link}>Se connecter</a>
          </p>
        </div>
      </div>
    </ClientLayout>
  );
}
