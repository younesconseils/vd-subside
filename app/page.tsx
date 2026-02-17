import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import StatsSection from '@/components/StatsSection';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import WhatIsSubside from '@/components/WhatIsSubside';
import Eligibility from '@/components/Eligibility';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Cities from '@/components/Cities';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import InlineCTA from '@/components/InlineCTA';

export default function Home() {
  // Schema.org structured data pour SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization
      {
        '@type': 'Organization',
        '@id': 'https://vd-subside.ch/#organization',
        name: 'VD-Subside',
        url: 'https://vd-subside.ch',
        logo: {
          '@type': 'ImageObject',
          url: 'https://vd-subside.ch/logo.png',
        },
        description: 'Service d\'accompagnement gratuit pour obtenir votre subside d\'assurance maladie dans le Canton de Vaud',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Vaud',
          addressCountry: 'CH',
        },
        areaServed: {
          '@type': 'State',
          name: 'Canton de Vaud',
        },
      },
      // Website
      {
        '@type': 'WebSite',
        '@id': 'https://vd-subside.ch/#website',
        url: 'https://vd-subside.ch',
        name: 'VD-Subside',
        description: 'Calculateur et demande de subside assurance maladie pour le Canton de Vaud',
        publisher: {
          '@id': 'https://vd-subside.ch/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://vd-subside.ch/ville/{search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'fr-CH',
      },
      // Service
      {
        '@type': 'Service',
        '@id': 'https://vd-subside.ch/#service',
        serviceType: 'Accompagnement subside assurance maladie',
        provider: {
          '@id': 'https://vd-subside.ch/#organization',
        },
        areaServed: {
          '@type': 'State',
          name: 'Canton de Vaud',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'CHF',
          description: 'Service gratuit d\'accompagnement pour votre demande de subside',
        },
        audience: {
          '@type': 'Audience',
          geographicArea: {
            '@type': 'State',
            name: 'Vaud',
          },
        },
      },
      // FAQ Page
      {
        '@type': 'FAQPage',
        '@id': 'https://vd-subside.ch/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qui peut bénéficier d\'un subside d\'assurance maladie dans le Canton de Vaud ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Toute personne domiciliée dans le Canton de Vaud dont le revenu déterminant unifié (RDU) ne dépasse pas les limites fixées peut bénéficier d\'un subside. L\'objectif est de limiter la charge des primes à 10% du RDU.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment calculer mon RDU pour le subside vaudois ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le RDU se calcule sur la base de votre revenu net imposable avec des déductions forfaitaires : CHF 2\'200 (1 adulte), CHF 4\'400 (2 adultes), CHF 1\'300 par enfant pour les primes, plus CHF 6\'000 (1er enfant), CHF 13\'000 (2 enfants) pour les enfants à charge. La fortune au-dessus de CHF 59\'000 (personne seule) ou CHF 118\'000 (couple) est prise en compte à hauteur de 6.7%.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel est le montant maximum du subside assurance maladie vaudois ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le montant du subside varie selon votre situation familiale et votre RDU. Les familles peuvent économiser jusqu\'à 8\'400 CHF par an. Le subside est calculé pour que votre charge de prime ne dépasse pas 10% de votre RDU.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment faire ma demande de subside vaudois en ligne ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Remplissez le formulaire sur VD-Subside.ch. Notre équipe vous accompagne gratuitement dans votre demande auprès de l\'OVAM (Office Vaudois de l\'Assurance Maladie). Vous recevrez une réponse sous 24h.',
            },
          },
        ],
      },
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://vd-subside.ch/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: 'https://vd-subside.ch',
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen">
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section avec FORMULAIRE */}
      <Hero />

      {/* Trust indicators */}
      <TrustSection />

      {/* Stats with animations */}
      <StatsSection />

      {/* Process - How it works */}
      <ProcessSection />

      {/* Why choose us - Comparison */}
      <WhyChooseUs />

      {/* Section éducative 1 : Qu'est-ce qu'un subside ? */}
      <WhatIsSubside />

      {/* Section éducative 2 : Conditions d'éligibilité */}
      <Eligibility />

      {/* CTA 1 - Après contenu éducatif */}
      <InlineCTA />

      {/* Comment ça marche */}
      <HowItWorks />

      {/* Avantages */}
      <Benefits />

      {/* Témoignages */}
      <Testimonials />

      {/* CTA 2 - Après témoignages */}
      <InlineCTA />

      {/* Villes du canton de Vaud */}
      <Cities />

      {/* FAQ avec Schema.org */}
      <FAQ />

      {/* CTA Final */}
      <CTA />
    </main>
  );
}
