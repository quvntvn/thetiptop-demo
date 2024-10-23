"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../components/styles/admin.module.css';
import ClientLayout from '@/components/ClientLayout';
import { getJwtFromCookie } from '@/utils/getUserFromCookie';
import * as XLSX from 'xlsx';


const generateRandomStats = () => {
    const totalTickets = Math.floor(Math.random() * 10000);
    const ticketsUsed = Math.floor(Math.random() * totalTickets);
    const ticketsClaimed = Math.floor(Math.random() * ticketsUsed);
    const genderDistribution = {
        male: Math.floor(Math.random() * 50) + 25,  
        female: Math.floor(Math.random() * 50) + 20,  
        other: Math.floor(Math.random() * 10) + 1   
    };
    const ageDistribution = {
        "18-25": Math.floor(Math.random() * 30) + 10, 
        "26-32": Math.floor(Math.random() * 30) + 10, 
        "33-46": Math.floor(Math.random() * 20) + 5,  
        "47-60": Math.floor(Math.random() * 15) + 5,  
        "60+": Math.floor(Math.random() * 10) + 1     
    };
    return { totalTickets, ticketsUsed, ticketsClaimed, genderDistribution, ageDistribution };
};

export default function AdminPage() {
    const [profileData, setProfileData] = useState(null);
    const [roles, setRoles] = useState([]);
    const [stats, setStats] = useState(null);
    const [userStats, setUserStats] = useState(null);
    const [userEmails, setUserEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [roleChangeEmail, setRoleChangeEmail] = useState('');
    const [roleUsers, setRoleUsers] = useState([]);
    const [randomWinner, setRandomWinner] = useState(null);
    const router = useRouter();

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

            const randomStats = generateRandomStats();
            setStats({
                total_tickets_available: randomStats.totalTickets,
                total_tickets_win: randomStats.ticketsUsed,
                total_tickets_claimed: randomStats.ticketsClaimed,
            });
            setUserStats({
                gender_percentage: randomStats.genderDistribution,
                age_distribution: randomStats.ageDistribution,
            });
            setUserEmails([
                'test1@example.com', 'user2@example.com', 'sample3@example.com',
                'demo4@example.com', 'email5@example.com'
            ]);

            setLoading(false);
        };

        loadUserData();
    }, []);

    useEffect(() => {
        if (roles.includes('ROLE_ADMIN')) {
            setIsAuthenticated(true);
            setIsAdmin(true);
        } else if (roles.includes('ROLE_CLIENT') || roles.includes('ROLE_EMPLOYEE')) {
            setIsAuthenticated(true);
            setIsAdmin(false);
        } else {
            setIsAuthenticated(false);
            setIsAdmin(false);
        }
    }, [roles]);

    const calculatePercentage = (value, total) => {
        return total > 0 ? ((value / total) * 100).toFixed(2) : '0.00';
    };

    const totalUsers = Object.values(userStats?.age_distribution || {}).reduce((sum, value) => sum + value, 0);

    const ageDistributionPercentages = {
        "18-25": calculatePercentage(userStats?.age_distribution["18-25"], totalUsers),
        "26-32": calculatePercentage(userStats?.age_distribution["26-32"], totalUsers),
        "33-46": calculatePercentage(userStats?.age_distribution["33-46"], totalUsers),
        "47-60": calculatePercentage(userStats?.age_distribution["47-60"], totalUsers),
        "60+": calculatePercentage(userStats?.age_distribution["60+"], totalUsers),
    };

    
    const handleDownloadEmails = () => {
        const worksheet = XLSX.utils.json_to_sheet(userEmails.map(email => ({ Email: email })));
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Emails');
        XLSX.writeFile(workbook, 'user_emails.csv');
    };

    
    const handleRoleChange = (newRole) => {
        
        console.log(`Changement du rôle de ${roleChangeEmail} à ${newRole}`);
    };

    
    const handleRoleUsersFetch = (role) => {
        
        console.log(`Fetch des utilisateurs pour le rôle : ${role}`);
        setRoleUsers([
            { email: 'admin1@example.com' },
            { email: 'employee1@example.com' },
        ]);
    };

    
    const handleDrawWinner = () => {
        const randomIndex = Math.floor(Math.random() * userEmails.length);
        setRandomWinner(userEmails[randomIndex]);
    };

    return (
        <ClientLayout>
            <div className={styles.container}>
                <div className={styles.adminContainer}>
                    <h1 className={`${styles.text4xl} mb-4 mt-4`}>Dashboard Administrateur</h1>
                    {loading ? (
                        <p className={styles.pzer}>Chargement en cours...</p>
                    ) : !isAuthenticated ? (
                        <div>
                            <p className={styles.pzer}>Vous devez vous connecter pour accéder à cette page.</p>
                        </div>
                    ) : !isAdmin ? (
                        <p className={styles.pzer}>Vous n'êtes pas autorisé à accéder à cette page.</p>
                    ) : (
                        <>
                            <div className={styles.stats}>
                                <h2 className={`${styles.text3xl} mb-3`}>Statistiques du jeu-concours</h2>
                                {stats ? (
                                    <table className={styles.statsTable}>
                                        <tbody>
                                            <tr>
                                                <th>Nombre de tickets fournis</th>
                                                <td>{stats.total_tickets_available || '0'}</td>
                                            </tr>
                                            <tr>
                                                <th>Nombre de tickets utilisés</th>
                                                <td>{stats.total_tickets_win || '0'}</td>
                                            </tr>
                                            <tr>
                                                <th>Nombre de lots déjà gagnés</th>
                                                <td>{stats.total_tickets_claimed || '0'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ) : (
                                    <p className={styles.pzer}>N/A</p>
                                )}
                            </div>
                            <div className={styles.userStats}>
                                <h2 className={`${styles.text3xl} mb-3`}>Informations Utilisateur Gagnant</h2>
                                <table className={styles.genderDistributionTable}>
                                    <thead>
                                        <tr>
                                            <th>Genre</th>
                                            <th>Pourcentage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Homme</td>
                                            <td>{userStats.gender_percentage.male || '0'}%</td>
                                        </tr>
                                        <tr>
                                            <td>Femme</td>
                                            <td>{userStats.gender_percentage.female || '0'}%</td>
                                        </tr>
                                        <tr>
                                            <td>Autre</td>
                                            <td>{userStats.gender_percentage.other || '0'}%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className={styles.ageDistributionTable}>
                                    <thead>
                                        <tr>
                                            <th>Tranche d'âge</th>
                                            <th>Pourcentage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>18-25</td>
                                            <td>{ageDistributionPercentages["18-25"] || '0'}%</td>
                                        </tr>
                                        <tr>
                                            <td>26-32</td>
                                            <td>{ageDistributionPercentages["26-32"] || '0'}%</td>
                                        </tr>
                                        <tr>
                                            <td>33-46</td>
                                            <td>{ageDistributionPercentages["33-46"] || '0'}%</td>
                                        </tr>
                                        <tr>
                                            <td>47-60</td>
                                            <td>{ageDistributionPercentages["47-60"] || '0'}%</td>
                                        </tr>
                                        <tr>
                                            <td>60+</td>
                                            <td>{ageDistributionPercentages["60+"] || '0'}%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.adminActions}>
                                <h2 className={`${styles.text3xl} mb-3`}>Téléchargement des emails utilisateurs</h2>
                                <button className={styles.downloadButton} onClick={handleDownloadEmails}>
                                    Télécharger les emails (.csv)
                                </button>
                                <h2 className={`${styles.text3xl} mb-3`}>Changer le rôle utilisateur</h2>
                                <div className={styles.roleChangeSection}>
                                    <input
                                        type="text"
                                        placeholder="Email de l'utilisateur"
                                        value={roleChangeEmail}
                                        onChange={(e) => setRoleChangeEmail(e.target.value)}
                                        className={styles.inputRole}
                                    />
                                    <button className={styles.roleChangeButton} onClick={() => handleRoleChange('ROLE_ADMIN')}>
                                        Attribuer rôle Admin
                                    </button>
                                    <button className={styles.roleChangeButton} onClick={() => handleRoleChange('ROLE_CLIENT')}>
                                        Attribuer rôle Client
                                    </button>
                                    <button className={styles.roleChangeButton} onClick={() => handleRoleChange('ROLE_EMPLOYEE')}>
                                        Attribuer rôle Employé
                                    </button>
                                </div>
                                <h2 className={`${styles.text3xl} mb-3`}>Obtenir utilisateurs par rôle</h2>
                                <div className={styles.roleFetchSection}>
                                    <button className={styles.roleFetchButton} onClick={() => handleRoleUsersFetch('ROLE_ADMIN')}>
                                        Voir les Admins
                                    </button>
                                    <button className={styles.roleFetchButton} onClick={() => handleRoleUsersFetch('ROLE_EMPLOYEE')}>
                                        Voir les Employés
                                    </button>
                                </div>
                                <ul className={styles.roleUsersList}>
                                    {roleUsers.map((user, index) => (
                                        <li key={index}>{user.email}</li>
                                    ))}
                                </ul>
                                <h2 className={`${styles.text3xl} mb-3`}>Tirage au sort d'un gagnant</h2>
                                <button className={styles.drawWinnerButton} onClick={handleDrawWinner}>
                                    Tirer un gagnant
                                </button>
                                {randomWinner && (
                                    <p>Le gagnant tiré au sort est : {randomWinner}</p>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </ClientLayout>
    );
}
