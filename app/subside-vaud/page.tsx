import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Subside Vaud 2026 : Guide Complet, Conditions et Demande Gratuite',
  description: 'Subside Vaud : tout savoir sur le subside d\'assurance maladie dans le Canton de Vaud en 2026. Conditions, montants, barème RDU et demande de subside gratuite. Accompagnement personnalisé.',
  keywords: [
    'subside vaud',
    'subside vaud 2026',
    'subside canton de vaud',
    'subside assurance maladie vaud',
    'demande de subside vaud',
    'subside lamal vaud',
    'montant subside vaud',
    'barème subside vaud',
    'conditions subside vaud',
    'calculer subside vaud',
  ],
  alternates: {
    canonical: '/subside-vaud',
  },
  openGraph: {
    title: 'Subside Vaud 2026 : Guide Complet et Demande Gratuite',
    description: 'Tout savoir sur le subside assurance maladie dans le Canton de Vaud. Conditions d\'éligibilité, montants 2026, démarches OVAM.',
    url: '/subside-vaud',
    type: 'article',
  },
};

export default function SubsideVaudPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://vd-subside.ch/subside-vaud#article',
        headline: 'Subside Vaud 2026 : Guide Complet sur le Subside d\'Assurance Maladie',
        description: 'Tout savoir sur le subside dans le Canton de Vaud : conditions, montants, barème RDU et démarches pour faire votre demande de subside.',
        datePublished: '2025-01-01',
        dateModified: '2026-01-15',
        author: {
          '@type': 'Organization',
          name: 'VD-Subside',
        },
        publisher: {
          '@id': 'https://vd-subside.ch/#organization',
        },
        mainEntityOfPage: 'https://vd-subside.ch/subside-vaud',
        inLanguage: 'fr-CH',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://vd-subside.ch' },
          { '@type': 'ListItem', position: 2, name: 'Subside Vaud', item: 'https://vd-subside.ch/subside-vaud' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qui a droit au subside dans le Canton de Vaud ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Toute personne domiciliée dans le Canton de Vaud dont le revenu déterminant unifié (RDU) ne dépasse pas les seuils fixés peut obtenir un subside. Pour une personne seule, le seuil est d\'environ 35\'000 CHF/an, pour un couple environ 52\'000 CHF/an.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel est le montant du subside Vaud en 2026 ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le montant du subside varie selon votre situation. Une personne seule peut recevoir entre 250 et 400 CHF/mois. Un couple entre 400 et 600 CHF/mois. Une famille avec enfants peut atteindre 550 à 850 CHF/mois, soit jusqu\'à 10\'200 CHF/an d\'économie.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment faire une demande de subside dans le Canton de Vaud ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vous pouvez faire votre demande de subside en ligne via notre formulaire gratuit ou directement auprès de l\'OVAM (Office Vaudois de l\'Assurance-Maladie). Les documents nécessaires sont : dernière taxation fiscale, pièce d\'identité et attestation d\'assurance maladie.',
            },
          },
          {
            '@type': 'Question',
            name: 'Combien de temps pour recevoir le subside Vaud ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le droit au subside prend effet le 1er jour du 2ème mois suivant votre demande. Le délai de traitement administratif est de 4 à 8 semaines. Les bénéficiaires du RI ou des PC AVS/AI bénéficient d\'un traitement prioritaire.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment est calculé le subside dans le Canton de Vaud ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le subside Vaud est calculé en fonction du Revenu Déterminant Unifié (RDU), qui prend en compte votre revenu net imposable, votre fortune, et la composition de votre ménage. L\'objectif est de limiter la charge des primes à 10% maximum de votre RDU.',
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-800 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Canton de Vaud 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Subside Vaud : Tout Savoir sur le
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Subside d'Assurance Maladie</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Guide complet sur le subside dans le Canton de Vaud. Conditions d'éligibilité, montants 2026,
              démarches et demande de subside gratuite avec accompagnement personnalisé.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/demande" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-green-600/20 hover:shadow-xl">
                Faire ma demande de subside
              </a>
              <a href="/calculateur" className="border-2 border-gray-200 hover:border-green-600 text-gray-700 hover:text-green-600 px-8 py-4 rounded-xl font-medium transition-all">
                Calculer mon subside
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 : Qu'est-ce que le subside Vaud */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Qu'est-ce que le subside Vaud ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Le <strong>subside Vaud</strong> (ou subside d'assurance maladie) est une <strong>aide financière versée par le Canton de Vaud</strong> pour
              réduire le coût de votre prime d'assurance-maladie obligatoire (LAMal). Cette aide est destinée aux habitants du canton dont
              les revenus ne permettent pas de supporter la totalité des primes d'assurance maladie.
            </p>
            <p>
              En 2026, le <strong>subside assurance maladie Vaud</strong> peut représenter une économie allant jusqu'à <strong>10'200 CHF par an</strong> pour
              une famille. Le subside est versé directement à votre caisse maladie par l'<strong>OVAM</strong> (Office Vaudois de l'Assurance-Maladie),
              vous payez uniquement le solde restant de votre prime.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 not-prose">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Chiffres clés du subside Vaud 2026</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">331 CHF</div>
                  <div className="text-sm text-gray-600">Subside max / mois</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">10'200 CHF</div>
                  <div className="text-sm text-gray-600">Économie max / an (famille)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
                  <div className="text-sm text-gray-600">Demandes acceptées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Conditions d'éligibilité */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Conditions d'éligibilité au subside Vaud
          </h2>
          <div className="space-y-6 text-gray-700 text-lg">
            <p>
              Pour bénéficier du <strong>subside dans le Canton de Vaud</strong>, vous devez remplir les conditions suivantes :
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Domicile dans le Canton de Vaud</h3>
                <p className="text-gray-600">Vous devez être domicilié de manière permanente dans le Canton de Vaud.</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Assurance maladie LAMal</h3>
                <p className="text-gray-600">Être affilié à une caisse maladie reconnue pour l'assurance de base obligatoire.</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">RDU sous les seuils</h3>
                <p className="text-gray-600">Votre Revenu Déterminant Unifié ne doit pas dépasser les limites fixées par le Canton.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Montants */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Montants du subside Vaud 2026
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Le montant du <strong>subside assurance maladie Vaud</strong> dépend de vos revenus, de la composition
            de votre ménage et de votre région de domicile dans le canton.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Composition du ménage</th>
                  <th className="px-6 py-4 text-left font-semibold">Subside moyen / mois</th>
                  <th className="px-6 py-4 text-left font-semibold">Économie annuelle</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b">
                  <td className="px-6 py-4 text-gray-700 font-medium">Personne seule</td>
                  <td className="px-6 py-4 text-gray-700">250 - 400 CHF</td>
                  <td className="px-6 py-4 font-semibold text-green-600">3'000 - 4'800 CHF</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">Couple sans enfant</td>
                  <td className="px-6 py-4 text-gray-700">400 - 600 CHF</td>
                  <td className="px-6 py-4 font-semibold text-green-600">4'800 - 7'200 CHF</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 text-gray-700 font-medium">Famille avec 1 enfant</td>
                  <td className="px-6 py-4 text-gray-700">450 - 700 CHF</td>
                  <td className="px-6 py-4 font-semibold text-green-600">5'400 - 8'400 CHF</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 font-medium">Famille avec 2+ enfants</td>
                  <td className="px-6 py-4 text-gray-700">550 - 850 CHF</td>
                  <td className="px-6 py-4 font-semibold text-green-600">6'600 - 10'200 CHF</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4 : Comment faire sa demande */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Comment faire une demande de subside Vaud ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            La <strong>demande de subside</strong> dans le Canton de Vaud est simple. Voici les étapes à suivre :
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Remplissez le formulaire', desc: 'Complétez notre formulaire en ligne en 3 minutes avec vos informations personnelles.' },
              { step: '2', title: 'Préparez vos documents', desc: 'Dernière taxation fiscale, pièce d\'identité, attestation d\'assurance maladie.' },
              { step: '3', title: 'Vérification', desc: 'Notre équipe vérifie votre éligibilité et prépare votre dossier gratuitement.' },
              { step: '4', title: 'Subside accordé', desc: 'Vous recevez votre subside, versé directement à votre caisse maladie.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/demande" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-green-600/20">
              Faire ma demande de subside Vaud
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section 5 : RDU */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Le Revenu Déterminant Unifié (RDU) et le subside Vaud
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Le <strong>RDU</strong> est la base de calcul pour déterminer votre droit au <strong>subside Vaud</strong>.
              Il est calculé à partir de votre revenu net imposable et de votre fortune, selon la loi LHPS.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Seuils indicatifs du RDU pour le subside Vaud 2026</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">-</span>
                  <span><strong>Personne seule :</strong> RDU jusqu'à environ 35'000 CHF/an</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">-</span>
                  <span><strong>Couple sans enfant :</strong> RDU jusqu'à environ 52'000 CHF/an</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">-</span>
                  <span><strong>Famille avec enfants :</strong> seuils augmentés progressivement selon le nombre d'enfants</span>
                </li>
              </ul>
            </div>
            <p>
              L'objectif du subside est de <strong>limiter la charge des primes d'assurance-maladie à 10% maximum</strong> de votre
              revenu déterminant. Si vos primes dépassent ce seuil, le Canton de Vaud prend en charge la différence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 : FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur le subside Vaud
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Qui a droit au subside dans le Canton de Vaud ?',
                a: 'Toute personne domiciliée dans le Canton de Vaud dont le revenu déterminant unifié (RDU) ne dépasse pas les seuils fixés annuellement. Pour une personne seule : environ 35\'000 CHF/an, couple : environ 52\'000 CHF/an.',
              },
              {
                q: 'Quel est le montant du subside Vaud en 2026 ?',
                a: 'Le subside peut aller de 30 CHF à 331 CHF par mois selon votre situation. Une famille avec enfants peut économiser jusqu\'à 10\'200 CHF par an sur ses primes d\'assurance maladie.',
              },
              {
                q: 'Comment faire une demande de subside dans le Canton de Vaud ?',
                a: 'Remplissez notre formulaire en ligne gratuit ou contactez l\'OVAM directement. Les documents nécessaires : dernière taxation fiscale, pièce d\'identité, attestation d\'assurance maladie.',
              },
              {
                q: 'Combien de temps pour recevoir le subside Vaud ?',
                a: 'Le subside prend effet le 1er jour du 2ème mois suivant votre demande. Le traitement administratif prend 4 à 8 semaines. Les bénéficiaires du RI ou PC ont un traitement prioritaire.',
              },
              {
                q: 'Le subside Vaud couvre-t-il les assurances complémentaires ?',
                a: 'Non, le subside couvre uniquement l\'assurance de base obligatoire (LAMal). Les assurances complémentaires restent entièrement à votre charge.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">En savoir plus sur le subside Vaud</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/subside-assurance-maladie" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Subside Assurance Maladie</h3>
              <p className="text-gray-600 text-sm">Guide complet sur le subside d'assurance maladie en Suisse et dans le Canton de Vaud.</p>
            </a>
            <a href="/calculateur" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Calculateur de Subside</h3>
              <p className="text-gray-600 text-sm">Calculez gratuitement le montant de votre subside Vaud en 3 minutes.</p>
            </a>
            <a href="/en-savoir-plus" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Tout Savoir sur les Subsides</h3>
              <p className="text-gray-600 text-sm">Conditions, montants, démarches et accompagnement pour votre subside assurance maladie Vaud.</p>
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
