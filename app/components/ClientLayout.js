"use client";

import React from 'react';
import Head from 'next/head';  
import Header from './Header'; 
import Footer from './Footer'; 
import styles from './styles/ClientLayout.module.css';
import CookieConsent from './CookieConsent'; 

export default function ClientLayout({ children }) {
    return (
        <>
            <Head>
                <meta name="description" content="Thé Tip Top - Découvrez notre sélection de thés de qualité supérieure, y compris des mélanges signatures, des thés détox, des thés blancs et bien plus encore. 100% bio et handmade." />
                <title>Thé Tip Top</title>
            </Head>
            <div className={styles.ClientLayout}>
                <Header />
                <main className="page-container">{children}</main>
                <Footer />
                <CookieConsent />
            </div>
        </>
    );
}
