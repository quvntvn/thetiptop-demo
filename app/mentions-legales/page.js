"use client";

import ClientLayout from '@/components/ClientLayout';
import styles from '../components/styles/cgu.module.css';

export default function MentionsLegalesPage() {
  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.cguContainer}>
          <h1 className="text-4xl font-bold mb-4 mt-8 text-black">Mentions Légales</h1>

          <section className={styles.section}>
            <h2 className="text-2xl font-bold mb-4 text-black">Article 1 : Informations légales</h2>
            <p className="text-black">
              Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance 
              dans l'économie numérique, dite L.C.E.N., nous informons les utilisateurs du site <strong>Thé Tip Top</strong> de l'identité des 
              différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <p className="text-black">
              <strong>Propriétaire du site :</strong> Thé Tip Top - SAS au capital de 150 000€ - 18 rue Léon Frot, 75011 Paris
            </p>
            <p className="text-black">
              <strong>Responsable de la publication :</strong> Eric Bourdon - contact@thetiptop.com
            </p>
            <p className="text-black">
              <strong>Hébergeur :</strong> OVH - 2 rue Kellermann, 59100 Roubaix - France.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className="text-2xl font-bold mb-4 text-black">Article 2 : Accès au site</h2>
            <p className="text-black">
              Le site <strong>Thé Tip Top</strong> est accessible à tous les utilisateurs ayant un accès à internet. Tous les coûts afférents 
              à l'accès au site, qu'ils soient matériels, logiciels ou d'accès à internet, sont à la charge de l'utilisateur. 
              Ce dernier est seul responsable du bon fonctionnement de son équipement informatique ainsi que de son accès à internet.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className="text-2xl font-bold mb-4 text-black">Article 3 : Collecte des données</h2>
            <p className="text-black">
              Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l'éditeur 
              pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos commandes. Elles sont 
              conservées dans le respect des règles prescrites par le RGPD.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className="text-2xl font-bold mb-4 text-black">Article 4 : Propriété intellectuelle</h2>
            <p className="text-black">
              L'ensemble des éléments graphiques, structurels, et les contenus du site <strong>Thé Tip Top</strong> (textes, logos, images, etc.) 
              sont la propriété exclusive de Thé Tip Top, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés 
              partenaires ou auteurs.
            </p>
            <p className="text-black">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces 
              différents éléments est strictement interdite sans l'accord exprès par écrit de Thé Tip Top. Cette représentation ou 
              reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants 
              du Code de la propriété intellectuelle.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className="text-2xl font-bold mb-4 text-black">Article 5 : Limitation de responsabilité</h2>
            <p className="text-black">
              Thé Tip Top s'efforce de fournir sur le site <strong>Thé Tip Top</strong> des informations aussi précises que possible. Toutefois, 
              la société ne pourra être tenue pour responsable des omissions, des inexactitudes et des carences dans la mise à jour, 
              qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p className="text-black">
              Toutes les informations proposées sur le site <strong>Thé Tip Top</strong> sont données à titre indicatif, sont non exhaustives, et 
              sont susceptibles d'évoluer. Elles sont données sous réserve de modifications ayant été apportées depuis leur mise en ligne.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className="text-2xl font-bold mb-4 text-black">Article 6 : Liens hypertextes</h2>
            <p className="text-black">
              Le site <strong>Thé Tip Top</strong> peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
              Les liens vers ces autres ressources vous font quitter le site <strong> Thé Tip Top</strong>.
            </p>
            <p className="text-black">
              Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de Thé Tip Top. 
              Aucune autorisation ou demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite 
              établir un lien vers le site de l'éditeur. Toutefois, ce site doit être affiché dans une nouvelle fenêtre du navigateur. 
              Toutefois, Thé Tip Top se réserve le droit de demander la suppression d'un lien qu'il estime non conforme à l'objet du site 
              <strong>Thé Tip Top</strong>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className="text-2xl font-bold mb-4 text-black">Article 7 : Droit applicable et attribution de juridiction</h2>
            <p className="text-black">
              Tout litige en relation avec l'utilisation du site <strong>Thé Tip Top</strong> est soumis au droit français. 
              Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className="text-2xl font-bold mb-4 text-black">Article 8 : Protection des données personnelles</h2>
            <p className="text-black">
              L'utilisateur est informé que lors de ses visites sur le site <strong>Thé Tip Top</strong>, un ou des cookies sont susceptibles 
              de s'installer automatiquement sur son logiciel de navigation. Un cookie est un bloc de données qui ne permet pas d'identifier 
              l'utilisateur, mais qui enregistre des informations relatives à la navigation de celui-ci sur le site. Le paramétrage du logiciel 
              de navigation permet d'informer de la présence de cookies et éventuellement de les refuser. L'utilisateur peut configurer son 
              navigateur pour accepter ou refuser les cookies. Aucun cookie ne sera déposé sans votre consentement.
            </p>
            <p className="text-black">
              En naviguant sur le site, l'utilisateur accepte l'installation de ce type de cookies sur son équipement.
            </p>
          </section>
        </div>
      </div>
    </ClientLayout>
  );
}
