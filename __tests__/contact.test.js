import { render, screen } from '@testing-library/react';
import ContactPage from '../app/contact/page.js';

describe('ContactPage', () => {
  it('renders the contact heading', () => {
    render(<ContactPage />);
    
    // Vérifie que le titre "Contactez-nous" est présent
    const heading = screen.getByRole('heading', { name: /Contactez-nous/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    render(<ContactPage />);
    
    // Vérifie que les champs du formulaire sont présents
    const nameInput = screen.getByLabelText(/Nom:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const subjectInput = screen.getByLabelText(/Sujet:/i);
    const messageTextarea = screen.getByLabelText(/Message:/i);

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
  });

  it('renders the contact information', () => {
    render(<ContactPage />);
    
    // Vérifie que les informations de contact sont présentes
    const contactAddress = screen.getByText(/18 rue Léon Frot, 75011 Paris/i);
    const contactEmail = screen.getByText(/tiptopthetiptop@gmail.com/i);
    const contactPhone = screen.getByText(/\+33 1 23 45 67 89/i);

    expect(contactAddress).toBeInTheDocument();
    expect(contactEmail).toBeInTheDocument();
    expect(contactPhone).toBeInTheDocument();
  });

  it('renders the social media links', () => {
    render(<ContactPage />);
    
    // Vérifie que les liens vers les réseaux sociaux sont présents
    const facebookLink = screen.getByRole('link', { name: /Facebook/i });
    const instagramLink = screen.getByRole('link', { name: /Instagram/i });
    const twitterLink = screen.getByRole('link', { name: /Twitter/i });

    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
  });
});
