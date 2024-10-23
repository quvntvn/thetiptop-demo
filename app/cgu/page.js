"use client";

import ClientLayout from '@/components/ClientLayout';
import styles from '../components/styles/cgu.module.css';

export default function CguPage() {
  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.cguContainer}>
        <h1 className="text-4xl font-bold mb-4 mt-8 text-black">Conditions Générales d'Utilisation</h1>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 1 : Objet</h2>
          <p className="text-black">
            Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités de participation
            et les conditions d’utilisation des services proposés par la société Thé Tip Top, ci-après dénommée «
            l’Organisateur », à travers son site internet dédié au jeu-concours « Roue de la Chance, Thé Tip Top ».
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 2 : Participation</h2>
          <p className="text-black">
            La participation au jeu-concours est réservée aux personnes majeures, résidant en France métropolitaine, ayant
            effectué un achat d’un montant minimum de 49€ dans l’une des boutiques Thé Tip Top ou sur le site internet
            officiel de la marque. Chaque participant reçoit un code unique imprimé sur son ticket de caisse, lequel lui
            permet de participer au tirage au sort.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 3 : Inscription au jeu-concours</h2>
          <p className="text-black">
            Pour s'inscrire au jeu-concours, les participants doivent se connecter au site via leur compte Google ou
            Facebook, ou bien créer un compte en utilisant le formulaire d'inscription disponible sur le site. Chaque
            code de participation est utilisable une seule fois.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 4 : Fonctionnement du jeu</h2>
          <p className="text-black">
            Le jeu-concours se déroule sur une période de 30 jours, durant lesquels les participants peuvent entrer leur
            code unique sur le site pour tenter de gagner un des lots mis en jeu. Les participants ont 30 jours
            supplémentaires après la fin du concours pour réclamer leur gain. Passé ce délai, les gains non réclamés
            seront considérés comme abandonnés.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 5 : Lots</h2>
          <p className="text-black">
            Les lots sont répartis comme suit :
          </p>
          <ul className="list-disc ml-6 text-black">
            <li>60% des participants gagnent un infuseur à thé.</li>
            <li>20% gagnent une boîte de 100g de thé détox ou infusion.</li>
            <li>10% gagnent une boîte de 100g de thé signature.</li>
            <li>6% gagnent un coffret découverte d’une valeur de 39€.</li>
            <li>4% gagnent un coffret découverte d’une valeur de 69€.</li>
          </ul>
          <p className="text-black">
            Les lots doivent être réclamés en ligne ou en boutique en présentant le code gagnant. Les lots ne sont ni
            échangeables, ni remboursables.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 6 : Tirage au sort</h2>
          <p className="text-black">
            À la fin du jeu-concours, un tirage au sort sera organisé pour désigner le gagnant du grand lot : un an de thé
            d’une valeur de 360€. Ce tirage sera effectué sous le contrôle de Maître Arnaud Rick, huissier de justice.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 7 : Responsabilité</h2>
          <p className="text-black">
            L’Organisateur ne saurait être tenu responsable en cas de dysfonctionnement du site internet, d’interruption
            du jeu-concours pour des raisons techniques, ou de tout dommage direct ou indirect lié à l'utilisation des
            services du site.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 8 : Protection des données personnelles</h2>
          <p className="text-black">
            Les données personnelles collectées dans le cadre du jeu-concours sont traitées conformément à la
            réglementation en vigueur sur la protection des données personnelles (RGPD). Les participants disposent
            d'un droit d'accès, de rectification et de suppression des données les concernant.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 9 : Modification des CGU</h2>
          <p className="text-black">
            L’Organisateur se réserve le droit de modifier les présentes CGU à tout moment, sans préavis. Les
            modifications prendront effet dès leur publication sur le site.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="text-2xl font-bold mb-4 text-black">Article 10 : Loi applicable et juridiction compétente</h2>
          <p className="text-black">
            Les présentes CGU sont régies par la loi française. Tout litige relatif à leur interprétation ou à leur
            exécution sera de la compétence exclusive des tribunaux de Paris.
          </p>
        </section>
      </div>
      </div>
    </ClientLayout>
  );
}
