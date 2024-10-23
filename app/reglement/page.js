"use client";

import React from 'react';
import '../globals.css';
import styles from '../components/styles/Reglement.module.css';
import ClientLayout from '../components/ClientLayout';

const Reglement = () => {
  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.reglementContainer}>
          <h1 className="text-4xl font-bold mb-4 mt-8 text-black">Règlement du Jeu-Concours "Thé Tip Top"</h1>

          <p className="text-lg mb-4 text-black">
            Ce règlement détermine les règles de participation au jeu-concours organisé par la société Thé Tip Top dans le cadre de l’ouverture de leur 10ème boutique à Nice.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-black">Article 1 : Organisation du Jeu</h2>
          <p className="text-black">
            Le jeu-concours est organisé par la société Thé Tip Top, société anonyme au capital social de 150 000€, dont le siège social est situé au 18 rue Léon Frot, 75011 Paris, représentée par son gérant, Mr Eric Bourdon.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-black">Article 2 : Conditions de Participation</h2>
          <p className="text-black">
            Le jeu-concours est ouvert à toute personne physique majeure résidant en France, ayant effectué un achat d'un montant minimum de 49€ dans l'une des boutiques Thé Tip Top pendant la période du jeu-concours. Chaque achat donne droit à un ticket de caisse ou une facture sur lequel est inscrit un code unique de 10 caractères alphanumériques permettant de participer au tirage au sort.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-black">Article 3 : Durée du Jeu-Concours</h2>
          <p className="text-black">
            Le jeu-concours se déroulera sur une période de 30 jours, à compter de la date d’ouverture de la 10ème boutique à Nice. Un maximum de 500 000 tickets pourra être distribué durant cette période. Les participants auront ensuite 30 jours supplémentaires pour valider leur code sur le site dédié et réclamer leur lot.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-black">Article 4 : Description des Lots</h2>
          <p className="text-black">
            100% des participants remporteront un lot. Les lots sont répartis de la manière suivante :
          </p>
          <ul className="list-disc ml-6 text-black">
            <li>60% des participants remporteront un infuseur à thé.</li>
            <li>20% des participants remporteront une boite de 100g de thé détox ou d’infusion.</li>
            <li>10% des participants remporteront une boite de 100g de thé signature.</li>
            <li>6% des participants remporteront un coffret découverte d’une valeur de 39€.</li>
            <li>4% des participants remporteront un coffret découverte d’une valeur de 69€.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-black">Article 5 : Modalités de Participation</h2>
          <p className="text-black">
            Pour participer, les clients doivent se rendre sur le site dédié au jeu-concours, créer un compte (via Google, Facebook ou formulaire classique), et entrer le code inscrit sur leur ticket de caisse. Les participants pourront consulter l’historique de leurs gains et réclamer leur lot en ligne ou en magasin.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-black">Article 6 : Tirage au Sort du Grand Lot</h2>
          <p className="text-black">
            À l’issue du jeu-concours, un tirage au sort sera effectué parmi tous les participants pour désigner le gagnant d’une année de thé gratuit, d’une valeur de 360€. Le tirage au sort sera réalisé sous le contrôle de Maître Arnaud Rick, huissier de justice.
          </p>
          <p className="text-black">
            La participation multiple n’augmente pas les chances de gagner ce lot.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-black">Article 7 : Dépôt et Consultation du Règlement</h2>
          <p className="text-black">
            Le présent règlement a été déposé auprès de Maître Arnaud Rick, huissier de justice, et peut être consulté gratuitement sur le site internet dédié au jeu-concours.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-black">Article 8 : Protection des Données Personnelles</h2>
          <p className="text-black">
            Les informations collectées lors de la participation au jeu-concours sont destinées à la société Thé Tip Top, à des fins de gestion du jeu et de communication avec les participants. Elles seront conservées pendant une durée de 1 an à compter de la fin du jeu-concours. Conformément à la réglementation en vigueur, les participants disposent d’un droit d’accès, de rectification et de suppression de leurs données personnelles.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-black">Article 9 : Responsabilité</h2>
          <p className="text-black">
            La société Thé Tip Top ne saurait être tenue pour responsable en cas de force majeure ou d’événements indépendants de sa volonté qui empêcheraient la bonne exécution du jeu-concours.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-black">Article 10 : Loi Applicable</h2>
          <p className="text-black">
            Le présent règlement est soumis à la loi française. Tout litige relatif à l'application ou à l'interprétation du règlement sera soumis aux tribunaux compétents.
          </p>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Reglement;
