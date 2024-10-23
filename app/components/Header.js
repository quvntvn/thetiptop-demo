"use client";

import React, { useState, useEffect } from 'react';
import { getUserFromCookie } from '@/utils/getUserFromCookie';
import styles from './styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const clearSessionCookie = () => {
  document.cookie = "SESSION=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

const Header = () => {
  const [username, setUsername] = useState(null);
  const [userData, setUserData] = useState(null);
  const [roles, setRoles] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const userDataJSON = localStorage.getItem('userData');
    if (userDataJSON) {
      try {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);
        setRoles(parsedUserData.roles || []);
        setUsername(parsedUserData.username || '');
      } catch (error) {
        console.error('Failed to parse user data from localStorage:', error);
      }
    }
  }, []);

  const handleSignOut = () => {
    clearSessionCookie();
    localStorage.removeItem('userData');
    setUserData(null);
    setRoles([]);
    setUsername(null);
    window.location.href = '/login';
  };

  const handleProfile = () => {
    window.location.href = '/profile';
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="images/logo.png" alt="Thé Tip Top Logo" className={styles.logo} />
      </Link>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
        <Link href="/" className={styles.navLink}>Accueil</Link>
        <Link href="/lots" className={styles.navLink}>Lots</Link>
        <Link href="/reglement" className={styles.navLink}>Règlement</Link>
        <Link href="/faq" className={styles.navLink}>FAQ</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>

        {userData && (
          <>
            {roles.includes('ROLE_EMPLOYEE') && (
              <Link href="/employe" className={styles.navLink}>Espace Employé</Link>
            )}
            {roles.includes('ROLE_ADMIN') && (
              <Link href="/admin" className={styles.navLink}>Espace Admin</Link>
            )}
            <button className={styles.btnProfile} onClick={handleProfile}>Mon Profil</button>
            <button className={styles.btnProfile} onClick={handleSignOut}>Déconnexion</button>
          </>
        )}
        {!userData && (
          <div className={styles.authButtons}>
            <button className={styles.btnLogin} onClick={() => window.location.href = '/login'}>Connexion</button>
            <button className={styles.btnRegister} onClick={() => window.location.href = '/register'}>Créer un compte</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
