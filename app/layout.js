
import Head from 'next/head';
import './globals.css';
import { Poppins } from 'next/font/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Script from 'next/script';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Thé Tip Top - Jeu concours",
  description: "Participez au jeu concours Thé Tip Top et repartez avec l'un des nombreux lots en jeu. 100 % de gagnants et 500 000 lots à découvrir !",
  icons: {
    favicon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.favicon} sizes="any" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FDGP2ZJF2L"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FDGP22JF2L');
          `}}>
        </script>
      </Head>
      <body className={poppins.className}>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}