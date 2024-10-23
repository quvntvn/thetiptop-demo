"use client";

import React from 'react';
import '../globals.css';
import styles from '../components/styles/FAQ.module.css';
import ClientLayout from '../components/ClientLayout';

const FAQ = () => {
  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.faqContainer}>
          <h1 className="text-4xl font-bold mb-4 mt-8 text-black">FAQ - Questions Fréquentes</h1>
          
          <h3 className="text-xl font-bold mb-2 text-black">Comment puis-je participer au jeu-concours ?</h3>
          <p className="text-black">Pour participer, vous devez effectuer un achat d'au moins 49€ dans l'une de nos boutiques Thé Tip Top ou sur notre site internet, puis entrer le code unique qui figure sur votre ticket de caisse sur notre site dédié au jeu-concours.</p>

          <h3 className="text-xl font-bold mb-2 text-black">Comment puis-je réclamer mon lot ?</h3>
          <p className="text-black">Une fois que vous avez entré votre code sur le site, vous pourrez voir immédiatement si vous avez gagné un lot. Vous pouvez réclamer votre lot en ligne ou en vous rendant en boutique avec votre ticket de caisse.</p>

          <h3 className="text-xl font-bold mb-2 text-black">Est-ce que tous les participants gagnent un lot ?</h3>
          <p className="text-black">Oui, 100% des participants remportent un lot. La nature du lot dépend du tirage et des pourcentages de répartition définis dans le règlement.</p>

          <h3 className="text-xl font-bold mb-2 text-black">Combien de temps ai-je pour réclamer mon lot ?</h3>
          <p className="text-black">Vous avez 30 jours à compter de la fin du jeu-concours pour réclamer votre lot en ligne ou en magasin.</p>

          <h3 className="text-xl font-bold mb-2 text-black">Que se passe-t-il si je perds mon ticket de caisse ?</h3>
          <p className="text-black">Malheureusement, sans votre ticket de caisse et le code unique qui y est inscrit, vous ne pourrez pas participer au jeu-concours ni réclamer votre lot.</p>

          <h3 className="text-xl font-bold mb-2 text-black">Puis-je participer plusieurs fois au jeu-concours ?</h3>
          <p className="text-black">Oui, vous pouvez participer plusieurs fois en effectuant plusieurs achats de 49€ ou plus. Chaque achat vous donnera un nouveau code unique à utiliser pour participer.</p>

          <h3 className="text-xl font-bold mb-2 text-black">Est-ce que le fait de participer plusieurs fois augmente mes chances de gagner le grand lot ?</h3>
          <p className="text-black">Non, le nombre de participations n'augmente pas vos chances de gagner le grand lot. Chaque participant a une seule chance égale lors du tirage au sort final pour le grand lot.</p>

          <h3 className="text-xl font-bold mb-2 text-black">Que faire si mon code ne fonctionne pas ?</h3>
          <p className="text-black">Si votre code ne fonctionne pas, veuillez vérifier que vous l'avez bien entré. Si le problème persiste, contactez notre service client pour obtenir de l'aide.</p>

          <h3 className="text-xl font-bold mb-2 text-black">Où puis-je consulter le règlement complet du jeu-concours ?</h3>
          <p className="text-black">Le règlement complet du jeu-concours est disponible sur notre site internet, dans la section dédiée au jeu-concours. Vous pouvez également le consulter en boutique sur simple demande.</p>
        </div>
      </div>
    </ClientLayout>
  );
};

export default FAQ;
