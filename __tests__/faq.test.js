import { render, screen } from '@testing-library/react';
import FAQ from '../app/faq/page.js';

describe('FAQ', () => {
  it('renders the page heading', () => {
    render(<FAQ />);
    
    // Vérifie que le titre principal "FAQ - Questions Fréquentes" est présent
    const heading = screen.getByRole('heading', { name: /FAQ - Questions Fréquentes/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders all FAQ questions', () => {
    render(<FAQ />);
    
    // Vérifie que toutes les questions sont présentes
    const question1 = screen.getByRole('heading', { name: /Comment puis-je participer au jeu-concours ?/i });
    const question2 = screen.getByRole('heading', { name: /Comment puis-je réclamer mon lot ?/i });
    const question3 = screen.getByRole('heading', { name: /Est-ce que tous les participants gagnent un lot ?/i });
    const question4 = screen.getByRole('heading', { name: /Combien de temps ai-je pour réclamer mon lot ?/i });
    const question5 = screen.getByRole('heading', { name: /Que se passe-t-il si je perds mon ticket de caisse ?/i });
    const question6 = screen.getByRole('heading', { name: /Puis-je participer plusieurs fois au jeu-concours ?/i });
    const question7 = screen.getByRole('heading', { name: /Est-ce que le fait de participer plusieurs fois augmente mes chances de gagner le grand lot ?/i });
    const question8 = screen.getByRole('heading', { name: /Que faire si mon code ne fonctionne pas ?/i });
    const question9 = screen.getByRole('heading', { name: /Où puis-je consulter le règlement complet du jeu-concours ?/i });

    expect(question1).toBeInTheDocument();
    expect(question2).toBeInTheDocument();
    expect(question3).toBeInTheDocument();
    expect(question4).toBeInTheDocument();
    expect(question5).toBeInTheDocument();
    expect(question6).toBeInTheDocument();
    expect(question7).toBeInTheDocument();
    expect(question8).toBeInTheDocument();
    expect(question9).toBeInTheDocument();
  });

  it('renders the correct answers for each question', () => {
    render(<FAQ />);
    
    // Vérifie que les réponses aux questions sont présentes
    const answer1 = screen.getByText(/Pour participer, vous devez effectuer un achat d'au moins 49€/i);
    const answer2 = screen.getByText(/Vous pouvez réclamer votre lot en ligne ou en vous rendant en boutique/i);
    const answer3 = screen.getByText(/100% des participants remportent un lot/i);
    const answer4 = screen.getByText(/Vous avez 30 jours à compter de la fin du jeu-concours/i);
    const answer5 = screen.getByText(/vous ne pourrez pas participer au jeu-concours ni réclamer votre lot/i);
    const answer6 = screen.getByText(/Oui, vous pouvez participer plusieurs fois/i);
    const answer7 = screen.getByText(/Chaque participant a une seule chance égale lors du tirage au sort final/i);
    const answer8 = screen.getByText(/Si votre code ne fonctionne pas, veuillez vérifier que vous l'avez bien entré/i);
    const answer9 = screen.getByText(/Le règlement complet du jeu-concours est disponible sur notre site internet/i);

    expect(answer1).toBeInTheDocument();
    expect(answer2).toBeInTheDocument();
    expect(answer3).toBeInTheDocument();
    expect(answer4).toBeInTheDocument();
    expect(answer5).toBeInTheDocument();
    expect(answer6).toBeInTheDocument();
    expect(answer7).toBeInTheDocument();
    expect(answer8).toBeInTheDocument();
    expect(answer9).toBeInTheDocument();
  });
});
