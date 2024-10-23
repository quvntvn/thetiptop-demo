"use client";

import React from 'react';
import styles from '../components/styles/Contact.module.css';
import ClientLayout from '@/components/ClientLayout';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mdknbppp");

  if (state.succeeded) {
    return (
      <ClientLayout>
        <div className={styles.container}>
          <div className={styles.successContainer}>
          <div className={styles.containerContact}>
            <p className={styles.successMessage}>Merci pour votre message ! Nous vous répondrons dès que possible.</p>
            <Link href="/" passHref>
              <button className={styles.submitButton}>Retour à l'accueil</button>
            </Link>
            </div>
          </div>
        </div>
      </ClientLayout>
    );
  }

  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.containerContact}>
          <h1 className={styles.title}>Contactez-nous</h1>
          <p className={styles.description}>
            Vous avez des questions concernant notre jeu-concours "Roue de la Chance, Thé Tip Top" ou besoin d'aide pour réclamer votre lot ? 
            N'hésitez pas à nous contacter via le formulaire ci-dessous, ou utilisez l'une des méthodes de contact alternatives.
          </p>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Nom:</label>
                <input type="text" id="name" name="name" className={styles.input} required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={styles.input} 
                  required 
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="subject" className={styles.label}>Sujet:</label>
                <input type="text" id="subject" name="subject" className={styles.input} required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Message:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className={styles.textarea} 
                  required
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button 
                type="submit" 
                className={styles.submitButton} 
                disabled={state.submitting}
              >
                Envoyer
              </button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <h2 className={styles.subtitle}>Informations de Contact</h2>
            <p><strong>Adresse :</strong> 18 rue Léon Frot, 75011 Paris</p>
            <p><strong>Email :</strong> <a href="mailto:tiptopthetiptop@gmail.com" className={styles.link}>tiptopthetiptop@gmail.com</a></p>
            <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          </div>

          <div className={styles.socialMedia}>
            <h2 className={styles.subtitle}>Suivez-nous sur les réseaux sociaux</h2>
            <p>Restez à jour avec les dernières nouvelles et annonces en nous suivant sur :</p>
            <ul className={styles.socialList}>
              <li><a href="https://www.facebook.com/profile.php?id=61565449136554" target="_blank" rel="noopener noreferrer" className={styles.link}>Facebook</a></li>
              <li><a href="https://www.instagram.com/thetiptopnice/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a></li>
              <li><a href="https://x.com/TheTipTopNice" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default ContactPage;
