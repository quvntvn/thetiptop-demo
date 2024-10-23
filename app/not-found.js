import ClientLayout from '@/components/ClientLayout';
import Link from 'next/link';
import Image from 'next/image';
import styles from './components/styles/NotFound.module.css';

export default function NotFound() {
  return (
    <ClientLayout>
      <div className={styles.container}>
        <div className={styles.NotfoundContainer}>
        <h1 className={styles.errorTitle}>404 - Page non trouvée</h1>
        <Image
            src="/images/wow.png"
            alt="Wow"
            width={150}
            height={150}
            className={styles.wowImage}
          />
        <p className={styles.errorMessage}>
          Oups, il semble que cette page n'existe pas.
        </p>
        <Link href="/" className={styles.homeLink}>
          Retour à la page d'accueil
        </Link>
        </div>
      </div>
    </ClientLayout>
  );
}
