import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Subside Assurance Maladie 2026 : Guide, Conditions et Demande Gratuite (Vaud)',
  description: 'Subside assurance maladie : obtenez votre subside d\'assurance maladie dans le Canton de Vaud. Conditions d\'éligibilité, montants 2026, calcul RDU. Demande de subside gratuite, réponse sous 24h.',
  keywords: [
    'subside assurance maladie',
    'subside assurance maladie vaud',
    'subside assurance maladie 2026',
    'demande subside assurance maladie',
    'subside lamal',
    'subside lamal vaud',
    'aide assurance maladie vaud',
    'réduction prime assurance maladie',
    'subside caisse maladie',
    'prime assurance maladie subside',
  ],
  alternates: {
    canonical: '/subside-assurance-maladie',
  },
  openGraph: {
    title: 'Subside Assurance Maladie 2026 : Guide Complet (Canton de Vaud)',
    description: 'Tout savoir sur le subside assurance maladie dans le Canton de Vaud. Conditions, montants 2026, demande gratuite.',
    url: '/subside-assurance-maladie',
    type: 'article',
  },
};

export default function SubsideAssuranceMaladiePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://vd-subside.ch/subside-assurance-maladie#article',
        headline: 'Subside Assurance Maladie 2026 : Guide Complet pour le Canton de Vaud',
        description: 'Tout savoir sur le subside d\'assurance maladie dans le Canton de Vaud : conditions, montants, calcul et demande gratuite.',
        datePublished: '2025-01-01',
        dateModified: '2026-01-15',
        author: {
          '@type': 'Organization',
          name: 'VD-Subside',
        },
        publisher: {
          '@id': 'https://vd-subside.ch/#organization',
        },
        mainEntityOfPage: 'https://vd-subside.ch/subside-assurance-maladie',
        inLanguage: 'fr-CH',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://vd-subside.ch' },
          { '@type': 'ListItem', position: 2, name: 'Subside Assurance Maladie', item: 'https://vd-subside.ch/subside-assurance-maladie' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qu\'est-ce qu\'un subside d\'assurance maladie ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le subside d\'assurance maladie est une aide financière versée par le Canton pour réduire le coût de votre prime d\'assurance-maladie obligatoire (LAMal). Dans le Canton de Vaud, cette aide peut atteindre 331 CHF par mois.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qui a droit au subside d\'assurance maladie dans le Canton de Vaud ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Toute personne domiciliée dans le Canton de Vaud dont le Revenu Déterminant Unifié (RDU) ne dépasse pas les seuils fixés. Personnes seules, couples, familles, étudiants, chômeurs et retraités peuvent en bénéficier.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment faire une demande de subside assurance maladie ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vous pouvez faire votre demande gratuitement via notre formulaire en ligne ou auprès de l\'OVAM. Documents nécessaires : dernière taxation fiscale, pièce d\'identité, attestation d\'assurance maladie.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le subside couvre-t-il les assurances complémentaires ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, le subside assurance maladie couvre uniquement l\'assurance de base obligatoire (LAMal). Les complémentaires (hospitalisation, dentaire, etc.) restent à votre charge.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel est le montant du subside assurance maladie en 2026 ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le montant varie selon votre situation : personne seule 250-400 CHF/mois, couple 400-600 CHF/mois, famille avec enfants jusqu\'à 850 CHF/mois. L\'objectif est de limiter vos primes à 10% de votre revenu.',
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-800 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Guide complet 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Subside Assurance Maladie :
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Guide Complet</span> Canton de Vaud
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tout savoir sur le subside d'assurance maladie dans le Canton de Vaud en 2026.
              Conditions d'éligibilité, montants, démarches et demande de subside gratuite.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/demande" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-green-600/20 hover:shadow-xl">
                Demande de subside gratuite
              </a>
              <a href="/calculateur" className="border-2 border-gray-200 hover:border-green-600 text-gray-700 hover:text-green-600 px-8 py-4 rounded-xl font-medium transition-all">
                Calculer mon subside
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 : Définition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Qu'est-ce qu'un subside d'assurance maladie ?
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Le <strong>subside d'assurance maladie</strong> est une aide financière versée par les cantons suisses pour aider les
              résidents à payer leur prime d'assurance-maladie obligatoire (LAMal). Dans le <strong>Canton de Vaud</strong>,
              cette aide est gérée par l'<strong>OVAM</strong> (Office Vaudois de l'Assurance-Maladie).
            </p>
            <p>
              L'objectif du subside assurance maladie est simple : <strong>aucun ménage ne devrait consacrer plus de 10% de
              son revenu</strong> au paiement des primes d'assurance-maladie. Si vos primes dépassent ce seuil, le Canton
              de Vaud prend en charge la différence sous forme de subside.
            </p>
            <p>
              Le <strong>subside assurance maladie Vaud</strong> est versé directement à votre caisse maladie chaque mois.
              Vous ne recevez pas l'argent mais payez uniquement le solde restant de votre prime, ce qui simplifie
              considérablement les démarches.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">En résumé</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span><strong>Subside assurance maladie</strong> = aide financière pour réduire vos primes LAMal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span>Versé directement à votre caisse maladie par l'OVAM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span>Jusqu'à <strong>331 CHF/mois</strong> pour une personne dans le Canton de Vaud</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span>Renouvelé automatiquement tant que votre situation ne change pas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Qui a droit */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Qui a droit au subside d'assurance maladie dans le Canton de Vaud ?
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Le <strong>subside assurance maladie</strong> dans le Canton de Vaud est accessible à de nombreuses catégories
              de résidents. Voici les profils les plus courants :
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Familles', desc: 'Couples avec ou sans enfants dont les revenus ne permettent pas de supporter la totalité des primes d\'assurance maladie.', href: '/situation/couple-marie' },
                { title: 'Personnes seules', desc: 'Adultes vivant seuls avec un RDU inférieur à environ 35\'000 CHF/an.', href: '/demande' },
                { title: 'Étudiants', desc: 'Jeunes adultes de 18-25 ans en formation, indépendants financièrement de leurs parents.', href: '/situation/etudiant' },
                { title: 'Personnes au chômage', desc: 'Suite à une perte d\'emploi, réévaluation immédiate possible du droit au subside.', href: '/situation/chomage' },
                { title: 'Retraités', desc: 'Bénéficiaires AVS/AI avec des revenus modestes, souvent éligibles au subside maximum.', href: '/situation/retraite' },
                { title: 'Familles monoparentales', desc: 'Parents élevant seuls leurs enfants, avec des seuils d\'éligibilité favorables.', href: '/situation/famille-monoparentale' },
              ].map((item) => (
                <a key={item.title} href={item.href} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-green-500 transition-colors group">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Montants */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Montants du subside assurance maladie Vaud 2026
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Les montants du <strong>subside assurance maladie</strong> varient selon la composition de votre ménage et vos revenus.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Ménage</th>
                  <th className="px-6 py-4 text-left font-semibold">Subside / mois</th>
                  <th className="px-6 py-4 text-left font-semibold">Économie / an</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-6 py-4 font-medium">Personne seule</td>
                  <td className="px-6 py-4">250 - 400 CHF</td>
                  <td className="px-6 py-4 font-semibold text-green-600">3'000 - 4'800 CHF</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Couple</td>
                  <td className="px-6 py-4">400 - 600 CHF</td>
                  <td className="px-6 py-4 font-semibold text-green-600">4'800 - 7'200 CHF</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-6 py-4 font-medium">Famille 1 enfant</td>
                  <td className="px-6 py-4">450 - 700 CHF</td>
                  <td className="px-6 py-4 font-semibold text-green-600">5'400 - 8'400 CHF</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Famille 2+ enfants</td>
                  <td className="px-6 py-4">550 - 850 CHF</td>
                  <td className="px-6 py-4 font-semibold text-green-600">6'600 - 10'200 CHF</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4 : Demande */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Comment faire une demande de subside assurance maladie ?
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              La <strong>demande de subside assurance maladie</strong> est gratuite et peut être faite en ligne.
              Notre service d'accompagnement vous aide à constituer votre dossier pour maximiser vos chances d'acceptation.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Documents nécessaires pour votre demande de subside</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Dernière décision de taxation fiscale</strong> (document obligatoire)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Pièce d'identité ou permis de séjour</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Attestation d'assurance maladie</strong> (carte d'assuré)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Attestation de formation (si étudiant)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Attestations de salaire récentes (si changement de revenus &gt;20%)</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a href="/demande" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-green-600/20">
                Faire ma demande de subside assurance maladie
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 : FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur le subside assurance maladie
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Le subside assurance maladie est-il automatique ?',
                a: 'Non, vous devez faire une demande. Cependant, une fois accordé, le renouvellement est automatique tant que votre situation ne change pas significativement.',
              },
              {
                q: 'Puis-je garder mon assurance maladie actuelle avec un subside ?',
                a: 'Oui, le subside est compatible avec toutes les caisses maladie reconnues en Suisse. Vous n\'avez pas besoin de changer d\'assureur pour bénéficier du subside.',
              },
              {
                q: 'Le subside assurance maladie est-il imposable ?',
                a: 'Non, le subside n\'est pas considéré comme un revenu et n\'est donc pas imposable. Il n\'affecte pas votre déclaration fiscale.',
              },
              {
                q: 'Que se passe-t-il si j\'ai reçu trop de subside ?',
                a: 'Si votre situation financière s\'est améliorée, le Canton peut demander le remboursement du trop-perçu. Il est important de signaler tout changement de revenus supérieur à 20% dans les 30 jours.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pages liées</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/subside-vaud" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Subside Vaud</h3>
              <p className="text-gray-600 text-sm">Tout savoir sur le subside dans le Canton de Vaud : conditions, montants et demande gratuite.</p>
            </a>
            <a href="/demande" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Demande de Subside</h3>
              <p className="text-gray-600 text-sm">Formulaire de demande de subside gratuit avec accompagnement personnalisé.</p>
            </a>
            <a href="/calculateur" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Calculateur de Subside</h3>
              <p className="text-gray-600 text-sm">Estimez le montant de votre subside assurance maladie en 3 minutes.</p>
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
