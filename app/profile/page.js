"use client";

import React, { useEffect, useState } from 'react';
import '../globals.css';
import styles from '../components/styles/Profile.module.css';
import ClientLayout from '../components/ClientLayout';
import Carousel from '../components/Carousel';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [historiqueData, setHistoriqueData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [roles, setRoles] = useState([]);
  const prizes = ["Infuseur à thé", "Coffret découverte 39€", "Thé signature 100g", "Thé détox ou infusion 100g", "Coffret découverte 69€"];

  useEffect(() => {
    const loadUserData = async () => {
      const userDataJSON = localStorage.getItem('userData');
      if (userDataJSON) {
        try {
          const parsedUserData = JSON.parse(userDataJSON);
          setProfileData(parsedUserData);
          setRoles(parsedUserData.roles || []);
        } catch (error) {
          console.error('Failed to parse user data from localStorage:', error);
        }
      }
      const historique = JSON.parse(localStorage.getItem('historique')) || [];
      setHistoriqueData(historique);
      setLoading(false);
    };

    loadUserData();
  }, []);

  useEffect(() => {
    if (roles.includes('ROLE_CLIENT') || roles.includes('ROLE_ADMIN') || roles.includes('ROLE_EMPLOYEE')) {
      setIsAuthenticated(true);
      switch (roles[0]) {
        case 'ROLE_CLIENT':
          setProfileData({
            name: 'Client Exemple',
            email: 'client@example.com',
            gender: 'male',
            age: 30,
            roles: ['ROLE_CLIENT']
          });
          setHistoriqueData([
            { code: Math.random().toString(36).substr(2, 8).toUpperCase(), prize: prizes[Math.floor(Math.random() * prizes.length)], is_claimed: true },
            { code: Math.random().toString(36).substr(2, 8).toUpperCase(), prize: prizes[Math.floor(Math.random() * prizes.length)], is_claimed: false },
          ]);
          break;
        case 'ROLE_ADMIN':
          setProfileData({
            name: 'Admin Exemple',
            email: 'admin@example.com',
            gender: 'female',
            age: 35,
            roles: ['ROLE_ADMIN']
          });
          setHistoriqueData([
            { code: Math.random().toString(36).substr(2, 8).toUpperCase(), prize: prizes[Math.floor(Math.random() * prizes.length)], is_claimed: true },
            { code: Math.random().toString(36).substr(2, 8).toUpperCase(), prize: prizes[Math.floor(Math.random() * prizes.length)], is_claimed: false },
          ]);
          break;
        case 'ROLE_EMPLOYEE':
          setProfileData({
            name: 'Employé Exemple',
            email: 'employee@example.com',
            gender: 'other',
            age: 28,
            roles: ['ROLE_EMPLOYEE']
          });
          setHistoriqueData([
            { code: Math.random().toString(36).substr(2, 8).toUpperCase(), prize: prizes[Math.floor(Math.random() * prizes.length)], is_claimed: true },
            { code: Math.random().toString(36).substr(2, 8).toUpperCase(), prize: prizes[Math.floor(Math.random() * prizes.length)], is_claimed: false },
          ]);
          break;
        default:
          break;
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [roles]);

  const getRoleLabel = (role) => {
    switch (role) {
      case 'ROLE_CLIENT':
        return 'Client';
      case 'ROLE_ADMIN':
        return 'Admin';
      case 'ROLE_EMPLOYEE':
        return 'Employé';
      default:
        return role;
    }
  };

  const getGenderLabel = (gender) => {
    switch (gender) {
      case 'male':
        return 'Homme';
      case 'female':
        return 'Femme';
      case 'other':
        return 'Autre';
      default:
        return gender;
    }
  };

  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.column_l}>
          <Carousel />
          <div className={styles.recoveryInfo}>
            <h2 className="text-2xl font-bold mb-4 mt-8">Comment récupérer vos lots ?</h2>
            <p className="text-lg mb-4">
              Pour récupérer vos lots, veuillez vous rendre à <a href="https://maps.app.goo.gl/jyByPEmq9AbrgeZDA" className={styles.shopLink} target="_blank" rel="noopener noreferrer">notre boutique</a> avec votre code de participation et une pièce d'identité.
            </p>
          </div>
        </div>
        <div className={styles.column_r}>
          {loading ? (
            <div className={styles.profileContainer}>
              <h1 className="text-black">Profile</h1>
              <h2 className="text-black">Information du compte</h2>
              <p className="text-black">Chargement en cours ...</p>
            </div>
          ) : !isAuthenticated ? (
            <div className={styles.profileContainer}>
              <h1 className="text-black">Profile</h1>
              <h2 className="text-black">Information du compte</h2>
              <p className="text-black">Veuillez vous connecter</p>
            </div>
          ) : (
            <>
              <div className={styles.profileContainer}>
                <h1 className="text-black">Profile</h1>
                <h2 className="text-black">Information du compte</h2>
                <p className="text-black"><strong>Nom d'utilisateur :</strong> {profileData?.name}</p>
                <p className="text-black"><strong>Adresse email :</strong> {profileData?.email}</p>
                <p className="text-black"><strong>Genre :</strong> {getGenderLabel(profileData?.gender)}</p>
                <p className="text-black"><strong>Age :</strong> {profileData?.age}</p>
                <p className="text-black"><strong>Compte :</strong> {roles.map(getRoleLabel).join(', ')}</p>
              </div>
              <div className={styles.historiqueContainer}>
                <h1 className="text-black">Historique des gains</h1>
                {historiqueData.length === 0 ? (
                  <p className="text-black">Vous n'avez encore rien gagné</p>
                ) : (
                  <ul>
                    {historiqueData.map((item, index) => (
                      <li key={index}>
                        <p className="text-black"><strong>Code :</strong> {item.code}</p>
                        <p className="text-black"><strong>Lot :</strong> {item.prize}</p>
                        <p className="text-black"><strong>Récupéré :</strong> {item.is_claimed ? 'Oui' : 'Non'}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </ClientLayout>
  );
};

export default Profile;
