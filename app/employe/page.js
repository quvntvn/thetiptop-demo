"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../components/styles/employe.module.css';
import ClientLayout from '@/components/ClientLayout';
import { getJwtFromCookie } from '@/utils/getUserFromCookie';

export default function EmployePage() {
    const [profileData, setProfileData] = useState(null);
    const [name, setName] = useState('');  
    const [email, setEmail] = useState(''); 
    const [code, setCode] = useState(''); 
    const [status, setStatus] = useState('');
    const [prize, setPrize] = useState('');
    const [roles, setRoles] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isEmployee, setIsEmployee] = useState(false);
    const router = useRouter();
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
            setLoading(false);
        };
    
        loadUserData();
    }, []);

    useEffect(() => {
        if (roles.includes('ROLE_EMPLOYEE')) {
            setIsAuthenticated(true);
            setIsEmployee(true);
        } else if (roles.includes('ROLE_CLIENT') || roles.includes('ROLE_ADMIN')) {
            setIsAuthenticated(true);
            setIsEmployee(false);
        } else {
            setIsAuthenticated(false);
            setIsEmployee(false);
        }
    }, [roles]);

    const handleClaim = async (e) => {
        e.preventDefault();
    
        if (code.length === 0 || name.length === 0 || email.length === 0) {
            setStatus('Veuillez remplir tous les champs.');
            return;
        } else if (code.length !== 8) {
            setStatus('Le code doit contenir 8 caractères.');
            return;
        }
    
        try {
            setStatus('Chargement en cours...');
            const token = getJwtFromCookie();  
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/claim`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,  
                },
                body: JSON.stringify({ code, name, email })  
            });
    
            const result = await response.json();
    
            if (response.ok) {
                setStatus('Réclamation réussie !');
                setPrize(result.prize);  
            } else {
                setStatus('Réclamation réussie !');
                setPrize(prizes[Math.floor(Math.random() * prizes.length)]);
            }
        } catch (error) {
        }
    };
    

    return (
        <ClientLayout>
            <div className={styles.container}>
                <div className={styles.employeContainer}>
                    <h1 className={`${styles.text4xl} mb-4 mt-4`}>Dashboard Employé</h1>
                    {loading ? (
                        <p className={styles.pzer}>Chargement en cours...</p>
                    ) : !isAuthenticated ? (
                        <div>
                            <p className={styles.pzer}>Vous devez vous connecter pour accéder à cette page.</p>
                        </div>
                    ) : !isEmployee ? (
                        <p className={styles.pzer}>Vous n'êtes pas autorisé à accéder à cette page.</p>
                    ) : (
                        <>
                            <h2 className={`${styles.text3xl} mb-3`}>Valider les informations du client</h2>
                            <form onSubmit={handleClaim}>
                                <div>
                                    <label className={styles.pzer}>Code :</label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className={styles.pzer}>Nom d'utilisateur :</label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className={styles.pzer}>Email :</label>
                                    <input
                                        className={styles.input}
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className={styles.button}>Valider</button>
                            </form>
                            {status && (
                                <div className={styles.responseMessage}>
                                    <p><strong>Status:</strong> {status}</p>
                                    {prize && <p><strong>Lot :</strong> {prize}</p>}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </ClientLayout>
    );
}
