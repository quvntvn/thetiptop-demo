"use client";

import ClientLayout from '@/components/ClientLayout';
import styles from '../components/styles/privacy.module.css';

export default function PrivacyPolicyPage() {
  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.privacyContainer}>
        <h1 className="text-4xl font-bold mb-4 mt-8 text-black">Politique de Confidentialité</h1>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 1 : Introduction</h2>
          <p className="text-black">
            La présente politique de confidentialité décrit comment Thé Tip Top, ci-après dénommée "la Société", collecte,
            utilise et protège les informations personnelles que vous fournissez lorsque vous utilisez notre site internet.
            En accédant à notre site, vous acceptez les pratiques décrites dans cette politique.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 2 : Collecte des données personnelles</h2>
          <p className="text-black">
            Nous collectons les informations suivantes : nom, prénom, adresse email, numéro de téléphone, adresse postale,
            ainsi que les données relatives à votre utilisation de notre site (adresse IP, cookies, etc.). Ces informations
            sont recueillies lorsque vous créez un compte, passez une commande ou participez à nos jeux-concours. Ces données 
            peuvent être utilisées à des fins de marketing et de communication.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 3 : Utilisation des données</h2>
          <p className="text-black">
            Les données collectées sont utilisées pour les finalités suivantes :
          </p>
          <ul className="list-disc ml-6 text-black">
            <li>Traitement de vos commandes et gestion de votre compte utilisateur.</li>
            <li>Participation à nos jeux-concours et campagnes promotionnelles.</li>
            <li>Amélioration de notre site internet et de l’expérience utilisateur.</li>
            <li>Envoi d'informations commerciales et marketing, sous réserve de votre consentement.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 4 : Partage des données</h2>
          <p className="text-black">
            Nous nous engageons à ne pas vendre, échanger ou transférer vos données personnelles à des tiers, sauf dans les
            cas suivants :
          </p>
          <ul className="list-disc ml-6 text-black">
            <li>Fournisseurs de services tiers agissant pour notre compte (paiements, livraison).</li>
            <li>Obligations légales et réglementaires (demandes gouvernementales, contentieux).</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 5 : Cookies</h2>
          <p className="text-black">
            Nous utilisons des cookies pour optimiser votre expérience sur notre site. Les cookies nous permettent de
            collecter des informations concernant votre navigation et de personnaliser le contenu affiché. Vous pouvez
            choisir de désactiver les cookies via les paramètres de votre navigateur, mais cela peut affecter certaines
            fonctionnalités du site.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 6 : Sécurité des données</h2>
          <p className="text-black">
            Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger vos données
            personnelles contre tout accès non autorisé, altération ou destruction. Toutefois, malgré nos efforts, aucun
            système n'est totalement sécurisé et nous ne pouvons garantir une sécurité absolue.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 7 : Vos droits</h2>
          <p className="text-black">
            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles : droit d'accès,
            de rectification, de suppression, et d'opposition au traitement de vos données. Pour exercer ces droits,
            veuillez nous contacter à l'adresse suivante : contact@thetiptop.fr.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 8 : Modifications de la politique de confidentialité</h2>
          <p className="text-black">
            La Société se réserve le droit de modifier cette politique de confidentialité à tout moment. Les modifications
            prendront effet dès leur publication sur le site. Nous vous recommandons de consulter cette page régulièrement
            pour être informé des éventuelles mises à jour.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 9 : Contact</h2>
          <p className="text-black">
            Pour toute question ou demande relative à notre politique de confidentialité, vous pouvez nous contacter à
            l'adresse suivante : Thé Tip Top, 4 rue Henry Barbusse, 75000 Paris ou par email à contact@thetiptop.fr.
          </p>
        </section>
      </div>
      </div>
    </ClientLayout>
  );
}
