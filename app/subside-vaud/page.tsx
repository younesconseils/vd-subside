import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Subside Vaud 2026 : Barèmes, OVAM, Régions et Spécificités Cantonales',
  description: 'Subside Vaud : barèmes cantonaux 2026, calcul du RDU, régions 1 et 2, rôle de l\'OVAM, délai de carence et spécificités du Canton de Vaud. Guide officiel avec demande gratuite.',
  keywords: [
    'subside vaud',
    'subside vaud 2026',
    'subside canton de vaud',
    'OVAM subside',
    'barème subside vaud',
    'RDU vaud',
    'région 1 région 2 subside vaud',
    'demande de subside vaud',
    'délai carence subside vaud',
    'conditions subside vaud',
  ],
  alternates: {
    canonical: '/subside-vaud',
  },
  openGraph: {
    title: 'Subside Vaud 2026 : Barèmes, OVAM et Spécificités Cantonales',
    description: 'Guide complet sur les spécificités du subside dans le Canton de Vaud : OVAM, barèmes, régions, délais et démarches.',
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
        headline: 'Subside Vaud 2026 : Barèmes Cantonaux, OVAM et Spécificités',
        description: 'Guide complet sur les spécificités du subside dans le Canton de Vaud : barèmes, régions, OVAM, délai de carence.',
        datePublished: '2025-01-01',
        dateModified: '2026-01-15',
        author: { '@type': 'Organization', name: 'VD-Subside' },
        publisher: { '@id': 'https://vd-subside.ch/#organization' },
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
            name: 'Qu\'est-ce que l\'OVAM et quel est son rôle dans le subside Vaud ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'L\'OVAM (Office Vaudois de l\'Assurance-Maladie) est l\'organisme cantonal qui gère les subsides dans le Canton de Vaud. Il calcule votre droit, fixe le montant et verse le subside directement à votre caisse maladie. Contact : 021 557 47 47.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qu\'est-ce que les régions 1 et 2 du subside Vaud ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le Canton de Vaud est divisé en 2 régions de primes. La région 1 (Lausanne, Ouest lausannois, Riviera) a des primes plus élevées donc des subsides potentiellement plus importants. La région 2 (Nord vaudois, Broye, Chablais) a des primes légèrement inférieures.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel est le délai de carence pour le subside Vaud en 2026 ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Depuis 2026, un délai de carence de 2 mois s\'applique aux nouvelles demandes. Le subside prend effet le 1er jour du 2ème mois suivant le dépôt. Exception : les bénéficiaires du RI et des PC AVS/AI ont un droit immédiat sans délai.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment le Canton de Vaud calcule-t-il le subside ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le Canton de Vaud utilise le Revenu Déterminant Unifié (RDU) basé sur votre dernière taxation fiscale. Le RDU prend en compte vos revenus, votre fortune (1/15 au-delà de 59\'000 CHF), et applique des déductions forfaitaires selon la composition du ménage.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le subside Vaud est-il rétroactif ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le subside Vaud n\'est pas rétroactif pour les nouvelles demandes. En revanche, si vos revenus baissent de plus de 20% (perte d\'emploi, etc.), vous pouvez demander une actualisation financière et le nouveau montant peut être ajusté rétroactivement dans certains cas.',
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
              Spécificités cantonales 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Subside Vaud : OVAM, Barèmes et
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Spécificités Cantonales</span> 2026
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comment fonctionne le subside spécifiquement dans le Canton de Vaud ? Rôle de l'OVAM,
              régions de primes, barèmes RDU, délai de carence et actualisation financière.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/demande" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-green-600/20 hover:shadow-xl">
                Faire ma demande de subside Vaud
              </a>
              <a href="/calculateur" className="border-2 border-gray-200 hover:border-green-600 text-gray-700 hover:text-green-600 px-8 py-4 rounded-xl font-medium transition-all">
                Calculer mon subside
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 : L'OVAM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            L'OVAM : l'organisme qui gère le subside Vaud
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              L'<strong>OVAM (Office Vaudois de l'Assurance-Maladie)</strong> est l'organisme cantonal responsable de la gestion
              des <strong>subsides dans le Canton de Vaud</strong>. C'est l'OVAM qui :
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Missions de l'OVAM</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span>Réceptionne et traite les demandes de subside</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span>Calcule votre droit au subside selon le RDU</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span>Fixe le montant mensuel de votre subside</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span>Verse le subside directement à votre caisse maladie</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span>Gère les actualisations financières et renouvellements</span></li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact OVAM</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span><strong>Téléphone :</strong> 021 557 47 47</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span><strong>Horaires :</strong> Lundi-vendredi, 8h30-11h30 et 13h-16h</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">-</span><span><strong>Alternative :</strong> Agences d'assurances sociales (AAS) dans votre commune</span></li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Vous pouvez aussi passer par <strong>notre service gratuit</strong> pour un accompagnement personnalisé sans attente téléphonique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Régions 1 et 2 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Régions 1 et 2 : impact sur le subside Vaud
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Le Canton de Vaud est divisé en <strong>2 régions de primes d'assurance maladie</strong>, ce qui influence
              directement le montant de votre subside. Les primes de base varient selon votre région de domicile.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-green-500 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Région 1</h3>
                <p className="font-semibold text-gray-900 mb-3">Primes plus élevées = subside potentiellement plus important</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">-</span><span>Lausanne et agglomération</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">-</span><span>Ouest lausannois (Renens, Prilly, Écublens, Crissier)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">-</span><span>Riviera (Vevey, Montreux, La Tour-de-Peilz)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">-</span><span>Nyon et environs</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">-</span><span>Morges, Pully, Lutry</span></li>
                </ul>
              </div>
              <div className="bg-white border-2 border-blue-500 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Région 2</h3>
                <p className="font-semibold text-gray-900 mb-3">Primes légèrement inférieures</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">-</span><span>Nord vaudois (Yverdon-les-Bains, Orbe)</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">-</span><span>Broye (Payerne, Moudon)</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">-</span><span>Chablais (Aigle, Bex, Villeneuve)</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">-</span><span>Gros-de-Vaud</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">-</span><span>Vallée de Joux</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-gray-800">
                <strong>Bon à savoir :</strong> En cas de déménagement d'une région à l'autre dans le Canton de Vaud, votre subside
                sera automatiquement recalculé selon les primes de votre nouvelle région. Pensez à annoncer votre changement d'adresse à l'OVAM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Barèmes et RDU spécifiques Vaud */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Barèmes du subside Vaud 2026 et calcul du RDU
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Le <strong>Canton de Vaud</strong> utilise un système de calcul spécifique basé sur le <strong>Revenu Déterminant Unifié (RDU)</strong>,
              défini par la loi vaudoise LHPS. Voici les éléments clés du barème vaudois :
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Déductions forfaitaires vaudoises</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div><strong>Ménage d'un adulte :</strong> déduction de CHF 2'200</div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div><strong>Ménage de deux adultes :</strong> déduction de CHF 4'400</div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div><strong>Par enfant à charge :</strong> déduction de CHF 1'300</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Déductions selon le nombre d'enfants (spécifique Vaud)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold">Enfants à charge</th>
                      <th className="px-6 py-3 text-left font-semibold">Déduction RDU</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="px-6 py-3">1 enfant</td><td className="px-6 py-3 font-semibold">CHF 6'000</td></tr>
                    <tr className="border-b bg-gray-50"><td className="px-6 py-3">2 enfants</td><td className="px-6 py-3 font-semibold">CHF 13'000</td></tr>
                    <tr className="border-b"><td className="px-6 py-3">3 enfants</td><td className="px-6 py-3 font-semibold">CHF 20'000</td></tr>
                    <tr className="bg-gray-50"><td className="px-6 py-3">Chaque enfant supplémentaire</td><td className="px-6 py-3 font-semibold">+ CHF 7'000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Prise en compte de la fortune dans le Canton de Vaud</h3>
              <p className="mb-4">
                Le Canton de Vaud ajoute <strong>1/15ème (6,7%)</strong> de votre fortune au RDU, au-delà de ces seuils :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong>Personne seule / famille monoparentale</strong>
                  <p className="text-gray-600">Fortune au-delà de <strong>CHF 59'000</strong></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong>Couple avec ou sans enfants</strong>
                  <p className="text-gray-600">Fortune au-delà de <strong>CHF 118'000</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 : Délai de carence et rétroactivité */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Délai de carence, rétroactivité et prise d'effet du subside Vaud
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Le <strong>subside Vaud</strong> fonctionne avec un système de délai de carence spécifique au canton. Voici les règles à connaître :
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Règle générale : délai de 2 mois</h3>
                <p className="mb-3">Le subside prend effet le <strong>1er jour du 2ème mois</strong> suivant votre demande.</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm"><strong>Exemple :</strong> Demande déposée le 15 janvier → Subside effectif dès le 1er mars.</p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Exceptions : droit immédiat</h3>
                <p className="mb-3">Certaines situations donnent un droit <strong>sans délai de carence</strong> :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="text-green-600">-</span><span>Bénéficiaires du <strong>revenu d'insertion (RI)</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600">-</span><span>Bénéficiaires de <strong>prestations complémentaires (PC)</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600">-</span><span><strong>Renouvellement annuel</strong> automatique (aucun délai)</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Le subside Vaud est-il rétroactif ?</h3>
              <p className="mb-3">
                <strong>Non</strong>, le subside n'est pas rétroactif pour les nouvelles demandes. C'est pourquoi il est
                crucial de <strong>déposer votre demande le plus tôt possible</strong>.
              </p>
              <p>
                <strong>Exception :</strong> en cas de baisse de revenus de plus de 20% (perte d'emploi, divorce, etc.),
                vous pouvez demander une <strong>actualisation financière</strong> auprès de l'OVAM. Le nouveau montant
                prend alors effet le 1er du 2ème mois suivant votre annonce.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="/demande" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-green-600/20">
              Déposer ma demande maintenant
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section 5 : Vaud vs autres cantons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Le subside Vaud comparé aux autres cantons
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Chaque canton suisse a son propre système de subsides. Le <strong>Canton de Vaud</strong> se distingue par plusieurs spécificités :
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Critère</th>
                    <th className="px-6 py-4 text-left font-semibold">Vaud</th>
                    <th className="px-6 py-4 text-left font-semibold">Genève</th>
                    <th className="px-6 py-4 text-left font-semibold">Berne</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white">
                    <td className="px-6 py-4 font-medium">Base de calcul</td>
                    <td className="px-6 py-4 text-green-700 font-semibold">RDU (loi LHPS)</td>
                    <td className="px-6 py-4">Revenu fiscal</td>
                    <td className="px-6 py-4">Revenu imposable</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-6 py-4 font-medium">Objectif de charge</td>
                    <td className="px-6 py-4 text-green-700 font-semibold">10% du RDU max</td>
                    <td className="px-6 py-4">8-12% selon revenus</td>
                    <td className="px-6 py-4">Variable</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="px-6 py-4 font-medium">Organisme</td>
                    <td className="px-6 py-4 text-green-700 font-semibold">OVAM</td>
                    <td className="px-6 py-4">SAM</td>
                    <td className="px-6 py-4">Section des subsides</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Délai de carence</td>
                    <td className="px-6 py-4 text-green-700 font-semibold">2 mois</td>
                    <td className="px-6 py-4">Variable</td>
                    <td className="px-6 py-4">Variable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 : FAQ spécifiques Vaud */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur le subside Vaud
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Qu\'est-ce que l\'OVAM et comment le contacter ?',
                a: 'L\'OVAM (Office Vaudois de l\'Assurance-Maladie) gère les subsides dans le Canton de Vaud. Téléphone : 021 557 47 47 (lun-ven 8h30-11h30 et 13h-16h). Vous pouvez aussi vous rendre dans une agence d\'assurances sociales (AAS) de votre commune.',
              },
              {
                q: 'Je vis en région 2 (Nord vaudois), mon subside sera-t-il différent ?',
                a: 'Le calcul du subside est le même pour toute la population vaudoise, mais les primes de référence varient légèrement entre la région 1 (Lausanne, Riviera) et la région 2 (Nord vaudois, Broye, Chablais). L\'impact sur le montant final est généralement modeste.',
              },
              {
                q: 'Peut-on demander une actualisation financière du subside Vaud ?',
                a: 'Oui, si vos revenus ont changé de plus de 20% (perte d\'emploi, divorce, etc.), vous pouvez demander une actualisation financière auprès de l\'OVAM. Le nouveau montant prend effet le 1er du 2ème mois suivant votre annonce.',
              },
              {
                q: 'Le subside Vaud est-il renouvelé automatiquement ?',
                a: 'Oui, si votre situation ne change pas significativement, le subside est automatiquement reconduit chaque année. Vous recevrez une nouvelle attestation de droit sans avoir à refaire une demande.',
              },
              {
                q: 'Je déménage dans un autre canton, que devient mon subside Vaud ?',
                a: 'Votre subside vaudois prend fin le mois du déménagement. Vous devrez faire une nouvelle demande auprès de l\'organisme compétent de votre nouveau canton de domicile. Chaque canton a ses propres règles et barèmes.',
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Approfondir le sujet</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/subside-assurance-maladie" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Subside et Assurance Maladie</h3>
              <p className="text-gray-600 text-sm">Comment le subside réduit vos primes LAMal, impact sur votre franchise et choix d'assureur.</p>
            </a>
            <a href="/guide/delai-subside-vaud-combien-temps" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Délais de Traitement</h3>
              <p className="text-gray-600 text-sm">Guide détaillé sur les délais de traitement OVAM et les exceptions au délai de carence.</p>
            </a>
            <a href="/guide/bareme-subside-vaud-2026" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors group">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Barème Subside Vaud 2026</h3>
              <p className="text-gray-600 text-sm">Les montants exacts, les seuils de revenus et le barème officiel du subside vaudois.</p>
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
