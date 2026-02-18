import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vd-subside.ch'),
  title: {
    default: 'Subside Vaud 2026 | Demande de Subside Assurance Maladie Vaud Gratuit',
    template: '%s | VD-Subside'
  },
  description: 'Subside assurance maladie Vaud : faites votre demande de subside gratuitement. Accompagnement personnalisé, réponse sous 24h, 85% de demandes acceptées. Économisez jusqu\'à 8\'400 CHF/an sur vos primes LAMal dans le Canton de Vaud.',
  keywords: [
    // Mots-clés principaux - Ciblage direct concurrent
    'subside vaud',
    'subside assurance maladie',
    'subside assurance maladie vaud',
    'demande de subside',
    'demande de subside vaud',
    'vd subside',
    'subside lamal vaud',
    'subside vd',

    // Variations 2026
    'subside vaud 2026',
    'subside assurance maladie vaud 2026',
    'subside lamal 2026 vaud',
    'barème subside vaud 2026',

    // Mots-clés longue traîne - Intention forte
    'demande subside vaud',
    'demande subside assurance maladie vaud',
    'faire demande subside vaud',
    'demande subside vaud en ligne',
    'formulaire subside vaud',
    'dossier subside vaud',

    // Calculateur - High intent
    'calculateur subside vaud',
    'calculer subside vaud',
    'calcul subside assurance maladie vaud',
    'simulateur subside vaud',
    'estimation subside vaud',

    // Éligibilité - Questions fréquentes
    'éligibilité subside vaud',
    'ai-je droit subside vaud',
    'condition subside vaud',
    'revenu maximum subside vaud',
    'RDU subside vaud',
    'revenu déterminant unifié vaud',

    // Termes officiels
    'OVAM subside',
    'office vaudois assurance maladie',
    'aide assurance maladie canton vaud',
    'réduction prime lamal vaud',
    'réduction primes assurance maladie vaud',

    // Villes principales (SEO local)
    'subside lausanne',
    'subside yverdon',
    'subside montreux',
    'subside vevey',
    'subside nyon',
    'subside morges',

    // Problématiques ciblées
    'économiser assurance maladie vaud',
    'baisser prime assurance vaud',
    'aide financière assurance maladie',
    'accompagnement subside gratuit',
    'aide remplissage formulaire subside',

    // Variations orthographiques
    'subsidie vaud',
    'subsides vaud',
    'subside canton de vaud',
    'subside canton vaud',
    'caisse maladie subside vaud',
  ],
  authors: [{ name: 'VD Subside' }],
  creator: 'VD Subside',
  publisher: 'VD Subside',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: 'https://vd-subside.ch',
    siteName: 'VD Subside',
    title: 'Subside Vaud 2026 | Demande de Subside Assurance Maladie Gratuit',
    description: 'Subside assurance maladie Vaud : demande de subside gratuite, accompagnement personnalisé, réponse sous 24h. 85% de demandes acceptées. Économisez jusqu\'à 8\'400 CHF/an.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VD Subside - Calculateur de subsides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subside Assurance Maladie Vaud',
    description: 'Calculez votre subside d\'assurance maladie instantanément',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://vd-subside.ch" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        {/* Données structurées JSON-LD pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://vd-subside.ch/#organization',
                  name: 'VD Subside',
                  url: 'https://vd-subside.ch',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://vd-subside.ch/og-image.jpg',
                  },
                  description: 'Accompagnement gratuit pour obtenir votre subside d\'assurance maladie dans le Canton de Vaud.',
                  areaServed: {
                    '@type': 'AdministrativeArea',
                    name: 'Canton de Vaud',
                    containedInPlace: {
                      '@type': 'Country',
                      name: 'Suisse',
                    },
                  },
                  serviceType: 'Aide au subside assurance maladie',
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://vd-subside.ch/#website',
                  url: 'https://vd-subside.ch',
                  name: 'VD Subside',
                  description: 'Subside Assurance Maladie Canton de Vaud 2026',
                  publisher: { '@id': 'https://vd-subside.ch/#organization' },
                  inLanguage: 'fr-CH',
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://vd-subside.ch/#webpage',
                  url: 'https://vd-subside.ch',
                  name: 'Subside Assurance Maladie Vaud 2026 | VD-Subside',
                  isPartOf: { '@id': 'https://vd-subside.ch/#website' },
                  about: { '@id': 'https://vd-subside.ch/#organization' },
                  description: 'Obtenez votre subside d\'assurance maladie dans le Canton de Vaud. Accompagnement gratuit, réponse sous 24h.',
                  inLanguage: 'fr-CH',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-white">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
