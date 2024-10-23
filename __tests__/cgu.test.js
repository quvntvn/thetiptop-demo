import { render, screen } from '@testing-library/react';
import CguPage from '../app/cgu/page.js';

describe('CguPage', () => {
  it('renders the page heading', () => {
    render(<CguPage />);
    
    // Vérifie que le titre principal "Conditions Générales d'Utilisation" est présent
    const heading = screen.getByRole('heading', { name: /Conditions Générales d'Utilisation/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the articles', () => {
    render(<CguPage />);

    // Vérifie que les titres des différents articles sont présents
    const article1 = screen.getByRole('heading', { name: /Article 1 : Objet/i });
    const article2 = screen.getByRole('heading', { name: /Article 2 : Participation/i });
    const article3 = screen.getByRole('heading', { name: /Article 3 : Inscription au jeu-concours/i });
    const article4 = screen.getByRole('heading', { name: /Article 4 : Fonctionnement du jeu/i });
    const article5 = screen.getByRole('heading', { name: /Article 5 : Lots/i });
    const article6 = screen.getByRole('heading', { name: /Article 6 : Tirage au sort/i });
    const article7 = screen.getByRole('heading', { name: /Article 7 : Responsabilité/i });
    const article8 = screen.getByRole('heading', { name: /Article 8 : Protection des données personnelles/i });
    const article9 = screen.getByRole('heading', { name: /Article 9 : Modification des CGU/i });
    const article10 = screen.getByRole('heading', { name: /Article 10 : Loi applicable et juridiction compétente/i });

    expect(article1).toBeInTheDocument();
    expect(article2).toBeInTheDocument();
    expect(article3).toBeInTheDocument();
    expect(article4).toBeInTheDocument();
    expect(article5).toBeInTheDocument();
    expect(article6).toBeInTheDocument();
    expect(article7).toBeInTheDocument();
    expect(article8).toBeInTheDocument();
    expect(article9).toBeInTheDocument();
    expect(article10).toBeInTheDocument();
  });

  it('renders the lots details in article 5', () => {
    render(<CguPage />);

    // Vérifie que la liste des lots est présente dans l'article 5
    const lotsList = screen.getByText(/60% des participants gagnent un infuseur à thé/i);
    expect(lotsList).toBeInTheDocument();
  });
});
