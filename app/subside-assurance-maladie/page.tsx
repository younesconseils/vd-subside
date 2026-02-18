import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Subside Assurance Maladie 2026 : Primes LAMal, Franchise et Caisses Maladie',
  description: 'Subside assurance maladie : comment réduire vos primes LAMal grâce au subside. Impact sur votre franchise, choix de caisse maladie, modèle d\'assurance et économies possibles en 2026 dans le Canton de Vaud.',
  keywords: [
    'subside assurance maladie',
    'subside assurance maladie vaud',
    'subside lamal',
    'subside prime assurance maladie',
    'réduction prime assurance maladie',
    'subside caisse maladie',
    'subside franchise assurance',
    'demande subside assurance maladie',
    'aide assurance maladie',
    'subside assurance obligatoire',
  ],
  alternates: {
    canonical: '/subside-assurance-maladie',
  },
  openGraph: {
    title: 'Subside Assurance Maladie 2026 : Primes, Franchise et Caisses Maladie',
    description: 'Comment le subside réduit vos primes d\'assurance maladie. Impact sur franchise, choix d\'assureur et économies possibles.',
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
        headline: 'Subside Assurance Maladie : Primes LAMal, Franchise et Caisses Maladie',
        description: 'Comment le subside réduit vos primes d\'assurance maladie obligatoire et son impact sur votre contrat.',
        datePublished: '2025-01-01',
        dateModified: '2026-01-15',
        author: { '@type': 'Organization', name: 'VD-Subside' },
        publisher: { '@id': 'https://vd-subside.ch/#organization' },
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
            name: 'Le subside réduit-il directement ma prime d\'assurance maladie ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, le subside est versé directement à votre caisse maladie par l\'OVAM. Votre facture mensuelle de prime est automatiquement réduite du montant du subside. Vous ne payez que la différence.',
            },
          },
          {
            '@type': 'Question',
            name: 'Dois-je changer de caisse maladie pour avoir un subside ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, le subside est compatible avec toutes les caisses maladie reconnues en Suisse (CSS, Helsana, Swica, Assura, Groupe Mutuel, etc.). Vous gardez votre assureur actuel.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le subside couvre-t-il les assurances complémentaires ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, le subside couvre uniquement l\'assurance de base obligatoire (LAMal). Les complémentaires (hospitalisation privée, dentaire, médecines alternatives) restent entièrement à votre charge.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel impact a ma franchise sur le montant du subside ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le montant du subside est calculé sur la base de la prime standard (franchise de CHF 300 pour les adultes). Si vous choisissez une franchise plus élevée (1\'000, 1\'500 ou 2\'500 CHF), votre prime baisse mais le subside reste calculé sur la prime de référence.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je cumuler subside et modèle alternatif (médecin de famille, HMO, telmed) ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, vous pouvez parfaitement combiner le subside avec un modèle alternatif (médecin de famille, HMO, telmed). C\'est même recommandé car ces modèles réduisent encore plus votre prime, et le subside vient en déduction du solde restant.',
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Assurance maladie & subside
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Subside Assurance Maladie :
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Primes, Franchise</span> et Caisses Maladie
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comment le subside réduit concrètement votre prime d'assurance maladie ?
              Impact sur votre franchise, compatibilité avec votre caisse et optimisation de votre couverture LAMal.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/demande" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-green-600/20 hover:shadow-xl">
                Demande de subside gratuite
              </a>
              <a href="/assurance" className="border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-medium transition-all">
                Conseil assurance gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 : Comment le subside réduit votre prime */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Comment le subside réduit votre prime d'assurance maladie
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Le <strong>subside d'assurance maladie</strong> agit comme une <strong>réduction directe sur votre prime mensuelle</strong>.
              Contrairement à une allocation que vous recevriez sur votre compte, le subside est versé par l'OVAM
              directement à votre caisse maladie. Résultat : votre facture mensuelle est automatiquement allégée.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Exemple concret de réduction</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-2">Votre prime mensuelle</div>
                  <div className="text-3xl font-bold text-red-600">450 CHF</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-green-300">
                  <div className="text-sm text-gray-500 mb-2">Subside mensuel</div>
                  <div className="text-3xl font-bold text-green-600">- 300 CHF</div>
                </div>
                <div className="bg-green-600 rounded-xl p-6 text-white">
                  <div className="text-sm text-green-100 mb-2">Vous payez</div>
                  <div className="text-3xl font-bold">150 CHF</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Soit une économie de <strong>3'600 CHF par an</strong> sur votre assurance maladie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : LAMal vs Complémentaires */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Assurance de base LAMal vs complémentaires : que couvre le subside ?
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              C'est une question essentielle : le <strong>subside assurance maladie</strong> ne couvre <strong>que l'assurance de base
              obligatoire (LAMal)</strong>. Voici la distinction :
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-green-500 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600">Couvert par le subside</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span><strong>Assurance de base LAMal</strong> (obligatoire)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span>Consultations médicales</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span>Hospitalisation en division commune</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span>Médicaments sur la liste des spécialités</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span>Maternité</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span>Urgences et ambulance (partiel)</span></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-red-400 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-red-500">NON couvert par le subside</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">-</span><span>Hospitalisation privée/semi-privée</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">-</span><span>Soins dentaires</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">-</span><span>Médecines alternatives (ostéo, acupuncture)</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">-</span><span>Lunettes et lentilles</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">-</span><span>Transport et sauvetage (au-delà LAMal)</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">-</span><span>Voyage à l'étranger</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Franchise et modèle */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Subside, franchise et modèle d'assurance : ce qu'il faut savoir
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Impact de la franchise sur le subside</h3>
              <p className="mb-4">
                Le subside est calculé sur la base de la <strong>prime standard (franchise CHF 300)</strong>.
                Votre choix de franchise n'affecte pas le montant du subside :
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold">Franchise</th>
                      <th className="px-6 py-3 text-left font-semibold">Prime indicative</th>
                      <th className="px-6 py-3 text-left font-semibold">Subside (fixe)</th>
                      <th className="px-6 py-3 text-left font-semibold">Vous payez</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="px-6 py-3">CHF 300 (standard)</td><td className="px-6 py-3">~450 CHF</td><td className="px-6 py-3 text-green-600 font-semibold">300 CHF</td><td className="px-6 py-3 font-semibold">150 CHF</td></tr>
                    <tr className="border-b bg-gray-50"><td className="px-6 py-3">CHF 1'000</td><td className="px-6 py-3">~400 CHF</td><td className="px-6 py-3 text-green-600 font-semibold">300 CHF</td><td className="px-6 py-3 font-semibold">100 CHF</td></tr>
                    <tr className="border-b"><td className="px-6 py-3">CHF 1'500</td><td className="px-6 py-3">~370 CHF</td><td className="px-6 py-3 text-green-600 font-semibold">300 CHF</td><td className="px-6 py-3 font-semibold">70 CHF</td></tr>
                    <tr className="bg-gray-50"><td className="px-6 py-3">CHF 2'500</td><td className="px-6 py-3">~330 CHF</td><td className="px-6 py-3 text-green-600 font-semibold">300 CHF</td><td className="px-6 py-3 font-semibold">30 CHF</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-3">*Primes indicatives pour un adulte en région 1 (Lausanne). Montants approximatifs.</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Combiner subside + modèle alternatif = économie maximale</h3>
              <p className="mb-4">
                Vous pouvez <strong>cumuler le subside avec un modèle d'assurance alternatif</strong> pour réduire encore plus votre prime :
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Médecin de famille</h4>
                  <p className="text-sm text-gray-600">Réduction de 10-15% sur la prime. Vous consultez d'abord votre médecin traitant.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">HMO</h4>
                  <p className="text-sm text-gray-600">Réduction de 15-20%. Vous consultez dans un centre médical partenaire.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Telmed</h4>
                  <p className="text-sm text-gray-600">Réduction de 10-15%. Premier contact par téléphone avant consultation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 : Compatibilité caisses maladie */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Caisses maladie et subside : compatibilité totale
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Le <strong>subside assurance maladie</strong> est compatible avec <strong>toutes les caisses maladie reconnues</strong> en Suisse.
              Vous n'avez pas besoin de changer d'assureur pour bénéficier du subside. Voici les principales caisses
              maladie actives dans le Canton de Vaud :
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {['CSS', 'Helsana', 'Swica', 'Assura', 'Groupe Mutuel', 'Concordia', 'Visana', 'Sanitas', 'KPT', 'Atupri', 'EGK', 'ÖKK'].map((caisse) => (
                <div key={caisse} className="bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-gray-900 hover:border-green-500 transition-colors">
                  {caisse}
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Changer de caisse maladie avec un subside</h3>
              <p>
                Si vous bénéficiez déjà d'un subside et souhaitez changer de caisse maladie (possible jusqu'au 30 novembre
                pour l'année suivante), votre <strong>subside sera automatiquement transféré</strong> à votre nouvelle caisse.
                Pensez simplement à informer l'OVAM de votre changement d'assureur.
              </p>
            </div>

            <div className="text-center mt-4">
              <a href="/assurance" className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-medium transition-all">
                Comparer les caisses maladie gratuitement
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 : Optimiser sa couverture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Optimiser sa couverture assurance maladie avec un subside
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Bénéficier d'un <strong>subside assurance maladie</strong> ne signifie pas se contenter d'une couverture minimale.
              Voici nos conseils pour optimiser votre assurance maladie :
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Choisissez la bonne franchise</h3>
                <p>Si vous consultez peu le médecin, une <strong>franchise élevée (CHF 2'500)</strong> combinée au subside peut ramener votre prime mensuelle à quelques dizaines de francs seulement. Si vous avez des traitements réguliers, la franchise à CHF 300 est plus avantageuse.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Adoptez un modèle alternatif</h3>
                <p>Le modèle <strong>médecin de famille, HMO ou telmed</strong> réduit votre prime de 10 à 20% supplémentaires. Combiné au subside, vous obtenez la meilleure économie possible sur votre assurance maladie.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Comparez chaque année</h3>
                <p>Les primes changent chaque année. Même avec un subside, il vaut la peine de <strong>comparer les offres</strong> entre caisses maladie. Le subside suivra automatiquement si vous changez d'assureur.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Réévaluez vos complémentaires</h3>
                <p>Le subside ne couvrant pas les complémentaires, c'est le moment de <strong>réévaluer si vos assurances complémentaires sont vraiment nécessaires</strong>. Notre service de conseil en assurance peut vous aider gratuitement.</p>
              </div>
            </div>

            <div className="text-center mt-4">
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

      {/* Section 6 : FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur le subside et l'assurance maladie
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Le subside réduit-il directement ma facture d\'assurance maladie ?',
                a: 'Oui, le subside est versé directement à votre caisse maladie. Votre facture mensuelle est automatiquement réduite. Vous ne payez que la différence entre votre prime totale et le montant du subside.',
              },
              {
                q: 'Dois-je changer de caisse maladie pour bénéficier du subside ?',
                a: 'Non. Le subside est compatible avec toutes les caisses maladie reconnues en Suisse : CSS, Helsana, Swica, Assura, Groupe Mutuel, Concordia, et toutes les autres. Vous gardez votre assureur actuel.',
              },
              {
                q: 'Ma franchise influence-t-elle le montant du subside ?',
                a: 'Non, le subside est calculé sur la prime de référence (franchise CHF 300). Si vous choisissez une franchise plus élevée, votre prime diminue mais le subside reste identique, ce qui augmente votre économie nette.',
              },
              {
                q: 'Puis-je avoir un subside et des assurances complémentaires ?',
                a: 'Oui, le fait d\'avoir un subside ne vous empêche pas de souscrire des complémentaires. Simplement, les complémentaires ne sont pas couvertes par le subside et restent à votre charge.',
              },
              {
                q: 'Le subside assurance maladie est-il imposable ?',
                a: 'Non, le subside n\'est pas un revenu et n\'est pas imposable. Il n\'apparaît pas dans votre déclaration fiscale et n\'affecte pas votre situation fiscale.',
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pages liées</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/subside-vaud" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Subside Vaud</h3>
              <p className="text-gray-600 text-sm">Spécificités cantonales : OVAM, barèmes RDU, régions de primes et délai de carence.</p>
            </a>
            <a href="/assurance" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">Conseil Assurance Gratuit</h3>
              <p className="text-gray-600 text-sm">Comparez les caisses maladie et optimisez votre couverture avec un conseiller agréé FINMA.</p>
            </a>
            <a href="/guide/economiser-prime-assurance-maladie-vaud" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Économiser sur vos Primes</h3>
              <p className="text-gray-600 text-sm">Toutes les astuces pour réduire le coût de votre assurance maladie dans le Canton de Vaud.</p>
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
