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
  return (
    <main className="min-h-screen">
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
