"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleLogin } from '@react-oauth/google';
import styles from '../components/styles/login.module.css';
import ClientLayout from '@/components/ClientLayout';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [refreshHeader, setRefreshHeader] = useState(false);  

  useEffect(() => {
    const sessionCookie = document.cookie.split('; ').find(row => row.startsWith('SESSION='));
    if (sessionCookie) {
      router.push('/');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
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

        redirectUserBasedOnRole(userData);
        setRefreshHeader(!refreshHeader);  
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Une erreur est survenue');
      }
    } catch (error) {
      setError('Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const redirectUserBasedOnRole = (userData) => {
    if (userData.roles.includes('ROLE_ADMIN')) {
      router.push('/admin');
    } else if (userData.roles.includes('ROLE_EMPLOYEE')) {
      router.push('/employe');
    } else {
      router.push('/');
    }
  };

  const handleFakeLogin = (role) => {
    setIsLoading(true);
    setTimeout(() => {
      const fakeToken = 'fake-token';
      document.cookie = `SESSION=${fakeToken}; path=/`;
      const userData = { roles: [role], username: 'adminUser' };
      localStorage.setItem('userData', JSON.stringify(userData));
  
      redirectUserBasedOnRole(userData);
      setIsLoading(false);
      setRefreshHeader(!refreshHeader);  
    }, 1000);
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

          redirectUserBasedOnRole(userData);
          setRefreshHeader(!refreshHeader);  
        } else {
          const errorData = await res.json();
          setError(errorData.message || 'Une erreur est survenue');
        }
      })
      .catch(() => {
        setError('Une erreur est survenue');
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

        redirectUserBasedOnRole(userData);
        setRefreshHeader(!refreshHeader);  
      } else {
        const errorData = await res.json();
        setError(errorData.message || 'Une erreur est survenue.');
      }
    } catch (error) {
      setError('Erreur lors de la connexion avec Facebook');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Connexion</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email:</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Mot de passe:</label>
              <div className={styles.passwordContainer}>
                <input
                  className={styles.input}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <div className={styles.forgotPassword}>
              <a href="/forgot-password" className={styles.link}>Mot de passe oublié ?</a>
            </div>
            <button type="submit" className={styles.submitButton} disabled={isLoading}>
              {isLoading ? 'Chargement...' : 'Se connecter'}
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
          <div className={styles.divider}>
            <span>ou</span>
          </div>

          <button onClick={() => handleFakeLogin('ROLE_ADMIN')} className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Chargement...' : 'Admin'}
          </button>
          <button onClick={() => handleFakeLogin('ROLE_EMPLOYEE')} className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Chargement...' : 'Employé'}
          </button>
          <button onClick={() => handleFakeLogin('ROLE_CLIENT')} className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Chargement...' : 'Client'}
          </button>
          <p className={styles.registerLink}>
            Vous n'avez pas de compte ? <a href="/register" className={styles.link}>S'inscrire</a>
          </p>
        </div>
      </div>
    </ClientLayout>
  );
}
