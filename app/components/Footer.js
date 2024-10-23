import React from 'react';
import styles from './styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.newsletter}>
      <div id="mc_embed_signup">
        <form action="https://gmail.us12.list-manage.com/subscribe/post?u=460161199443d851291d1b43d&amp;id=6d34a56c21&amp;f_id=007156e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_self" noValidate className={styles.newsletterForm}>
          <div id="mc_embed_signup_scroll">
            <input type="email" name="EMAIL" className={styles.newsletterInput} id="mce-EMAIL" placeholder="Votre adresse email" required />
            <input type="submit" value="S'abonner" name="subscribe" id="mc-embedded-subscribe" className={styles.newsletterButton} />
          </div>
        </form>
      </div>
    </div>
    <div className={styles.footerLinks}>
      <Link href="/politique-de-confidentialite" className={styles.link}>Politique de confidentialité</Link>
      {' '} - {' '}
      <Link href="/cgu" className={styles.link}>CGU</Link>
      {' '} - {' '}
      <Link href="/mentions-legales" className={styles.link}>Mentions légales</Link>
      {' '} - Powered by Furious Duck
    </div>
    <div className={styles.disclaimer}>
      Il s'agit d'un projet étudiant fictif.
    </div>
  </footer>
);

export default Footer;
