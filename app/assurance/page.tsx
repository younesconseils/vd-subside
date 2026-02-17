import type { Metadata } from 'next';
import Link from 'next/link';
import AssuranceForm from '@/components/AssuranceForm';

export const metadata: Metadata = {
  title: 'Conseil Assurance Maladie Vaud 2026 | Conseiller Agréé FINMA Gratuit',
  description: 'Conseil gratuit en assurance maladie dans le Canton de Vaud par un conseiller agréé FINMA et certifié CICERO. Comparaison des caisses, offre personnalisée, sans engagement.',
  keywords: [
    'conseil assurance maladie vaud',
    'changer caisse maladie vaud',
    'comparaison assurance maladie vaud',
    'courtier assurance maladie vaud',
    'conseiller FINMA assurance vaud',
    'meilleure caisse maladie vaud 2026',
    'réduire prime assurance maladie vaud',
    'offre assurance maladie gratuite',
  ],
  openGraph: {
    title: 'Conseil Assurance Maladie Gratuit | Conseiller Agréé FINMA',
    description: 'Comparez les caisses maladie et trouvez la meilleure offre pour votre situation. Service 100% gratuit par un conseiller agréé FINMA.',
    url: 'https://vd-subside.ch/assurance',
    siteName: 'VD-Subside',
    locale: 'fr_CH',
    type: 'website',
  },
};

export default function AssurancePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://vd-subside.ch/assurance/#service',
        serviceType: 'Conseil et courtage en assurance maladie',
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
          description: 'Conseil gratuit en assurance maladie par un conseiller agréé FINMA',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Le conseil en assurance maladie est-il vraiment gratuit ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, notre service de conseil est 100% gratuit pour vous. Notre conseiller est rémunéré par les commissions versées par les assureurs, ce qui garantit un service sans frais et sans engagement de votre part.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qu\'est-ce que l\'agrément FINMA pour un conseiller en assurance ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'L\'agrément FINMA signifie que notre conseiller est enregistré auprès de l\'Autorité fédérale de surveillance des marchés financiers. C\'est une garantie de compétence, de professionnalisme et de conformité aux normes suisses de conseil en assurance.',
            },
          },
          {
            '@type': 'Question',
            name: 'Suis-je obligé de changer de caisse après le conseil ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, absolument pas. Le conseil est sans engagement. Vous recevez une analyse personnalisée et des recommandations, mais la décision vous appartient entièrement. Aucune pression, aucune obligation.',
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Bouton Accueil */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-xl inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Accueil
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Conseiller agréé FINMA & certifié CICERO
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Conseil Assurance Maladie <span className="text-blue-200">Gratuit</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Un conseiller agréé FINMA compare toutes les caisses maladie pour vous et vous propose la meilleure offre. 100% gratuit, sans engagement.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-1">🏛️</div>
                <div className="text-sm font-semibold">Agréé FINMA</div>
                <div className="text-xs text-blue-200">Autorité fédérale</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-1">🎓</div>
                <div className="text-sm font-semibold">Certifié CICERO</div>
                <div className="text-xs text-blue-200">Formation continue</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-1">💰</div>
                <div className="text-sm font-semibold">100% Gratuit</div>
                <div className="text-xs text-blue-200">Sans frais cachés</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-1">🤝</div>
                <div className="text-sm font-semibold">Sans engagement</div>
                <div className="text-xs text-blue-200">Vous décidez</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-gray-600 text-center mb-14 text-lg max-w-2xl mx-auto">
            En 3 étapes simples, trouvez la caisse maladie idéale pour votre situation
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Remplissez le formulaire</h3>
              <p className="text-gray-600">Indiquez votre caisse actuelle et vos coordonnées. Cela prend moins d&apos;une minute.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analyse personnalisée</h3>
              <p className="text-gray-600">Notre conseiller FINMA analyse votre situation et compare toutes les offres du marché pour vous.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recevez votre offre</h3>
              <p className="text-gray-600">Vous recevez une recommandation claire avec les économies possibles. Vous décidez librement, sans pression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire + Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Colonne gauche : Avantages */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi faire appel à un conseiller agréé ?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Un conseiller agréé FINMA vous garantit un conseil professionnel, indépendant et conforme aux normes suisses.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Comparaison complète</h3>
                    <p className="text-gray-600 text-sm">Analyse de toutes les caisses maladie du marché suisse pour trouver la plus adaptée à votre profil et budget.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Économies garanties</h3>
                    <p className="text-gray-600 text-sm">En moyenne, nos clients économisent <strong>300 à 1&apos;200 CHF par an</strong> sur leurs primes après notre conseil.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Accompagnement complet</h3>
                    <p className="text-gray-600 text-sm">De l&apos;analyse à la résiliation de votre ancienne caisse, on s&apos;occupe de tout. Vous n&apos;avez rien à faire.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Suivi annuel</h3>
                    <p className="text-gray-600 text-sm">Chaque année, votre conseiller vérifie que vous êtes toujours chez la caisse la plus avantageuse pour vous.</p>
                  </div>
                </div>
              </div>

              {/* Subside + Assurance combo */}
              <div className="mt-10 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">💡 Subside + Conseil assurance = Double économie</h3>
                <p className="text-gray-600 text-sm">
                  Combinez votre demande de subside avec un conseil en assurance pour maximiser vos économies. Subside OVAM + caisse optimale = jusqu&apos;à <strong>8&apos;400 CHF + 1&apos;200 CHF d&apos;économies par an</strong>.
                </p>
                <Link href="/demande" className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm mt-3 hover:text-green-700">
                  Faire aussi une demande de subside
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Colonne droite : Formulaire */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Demandez votre offre gratuite
                </h3>
                <p className="text-gray-600">
                  Un conseiller agréé FINMA vous contacte sous 24h
                </p>
              </div>

              <AssuranceForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Le conseil est-il vraiment gratuit ?',
                a: 'Oui, 100% gratuit pour vous. Notre conseiller est rémunéré par les commissions versées par les assureurs. C\'est le modèle standard du courtage en assurance en Suisse. Vous ne payez rien, ni avant, ni après le conseil.',
              },
              {
                q: 'Qu\'est-ce que l\'agrément FINMA ?',
                a: 'La FINMA (Autorité fédérale de surveillance des marchés financiers) est l\'organisme qui régule et supervise les intermédiaires d\'assurance en Suisse. Être agréé FINMA signifie que notre conseiller respecte les normes légales de compétence, d\'intégrité et de transparence.',
              },
              {
                q: 'Qu\'est-ce que la certification CICERO ?',
                a: 'CICERO est le registre de formation continue de l\'Association Suisse d\'Assurances (ASA). La certification CICERO garantit que notre conseiller suit régulièrement des formations pour rester à jour sur les évolutions du marché de l\'assurance.',
              },
              {
                q: 'Suis-je obligé de changer de caisse après le conseil ?',
                a: 'Non, absolument pas. Vous recevez une analyse et des recommandations personnalisées, mais vous êtes entièrement libre de suivre ou non nos conseils. Aucune pression, aucune obligation contractuelle.',
              },
              {
                q: 'Combien puis-je économiser en changeant de caisse ?',
                a: 'Les économies varient selon votre situation, mais en moyenne nos clients économisent entre 300 et 1\'200 CHF par an. Certains profils (familles, jeunes) peuvent économiser encore davantage en combinant changement de caisse et optimisation du modèle.',
              },
              {
                q: 'Le changement de caisse affecte-t-il mon subside ?',
                a: 'Non, votre subside est versé quelle que soit votre caisse maladie. Si vous changez de caisse, l\'OVAM transfère automatiquement le versement du subside à votre nouvel assureur. Vous ne perdez rien.',
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à économiser sur votre assurance maladie ?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessus et recevez une offre personnalisée sous 24h. C&apos;est gratuit et sans engagement.
          </p>
          <a
            href="#ass-nom"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all shadow-lg text-lg"
          >
            Demander mon offre gratuite
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer disclaimer */}
      <div className="bg-gray-100 py-6 text-center">
        <p className="text-xs text-gray-500 max-w-3xl mx-auto px-4">
          VD-Subside.ch propose un service de conseil et courtage en assurance maladie par un conseiller agréé FINMA et certifié CICERO.
          Ce service est gratuit pour le client. Le conseiller est rémunéré par les commissions versées par les assureurs partenaires.
          <Link href="/mentions-legales" className="text-blue-600 hover:underline ml-1">Mentions légales</Link>
        </p>
      </div>
    </main>
  );
}
