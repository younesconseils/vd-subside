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
import SituationsSection from '@/components/SituationsSection';
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

      {/* Section Situations */}
      <SituationsSection />

      {/* Villes du canton de Vaud */}
      <Cities />

      {/* FAQ avec Schema.org */}
      <FAQ />

      {/* CTA Final */}
      <CTA />
    </main>
  );
}
