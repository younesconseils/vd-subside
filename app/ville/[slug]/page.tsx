import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

const cityData: { [key: string]: { name: string; population: string; canton: string; district: string; npa: string; agence: string } } = {
  // Grandes villes (>10k habitants)
  'lausanne': { name: 'Lausanne', population: '140\'000', canton: 'Vaud', district: 'Lausanne', npa: '1000', agence: 'Agence d\'assurances sociales de Lausanne' },
  'yverdon-les-bains': { name: 'Yverdon-les-Bains', population: '30\'000', canton: 'Vaud', district: 'Jura-Nord vaudois', npa: '1400', agence: 'Agence d\'assurances sociales d\'Yverdon-les-Bains' },
  'montreux': { name: 'Montreux', population: '26\'000', canton: 'Vaud', district: 'Riviera-Pays-d\'Enhaut', npa: '1820', agence: 'Agence d\'assurances sociales de Vevey' },
  'renens': { name: 'Renens', population: '21\'000', canton: 'Vaud', district: 'Ouest lausannois', npa: '1020', agence: 'Agence d\'assurances sociales de Renens' },
  'nyon': { name: 'Nyon', population: '21\'000', canton: 'Vaud', district: 'Nyon', npa: '1260', agence: 'Agence d\'assurances sociales de Nyon' },
  'vevey': { name: 'Vevey', population: '20\'000', canton: 'Vaud', district: 'Riviera-Pays-d\'Enhaut', npa: '1800', agence: 'Agence d\'assurances sociales de Vevey' },
  'pully': { name: 'Pully', population: '18\'000', canton: 'Vaud', district: 'Lavaux-Oron', npa: '1009', agence: 'Agence d\'assurances sociales de Lausanne' },
  'morges': { name: 'Morges', population: '16\'000', canton: 'Vaud', district: 'Morges', npa: '1110', agence: 'Agence d\'assurances sociales de Morges' },
  'prilly': { name: 'Prilly', population: '12\'000', canton: 'Vaud', district: 'Ouest lausannois', npa: '1008', agence: 'Agence d\'assurances sociales de Renens' },
  'ecublens': { name: 'Écublens', population: '13\'000', canton: 'Vaud', district: 'Ouest lausannois', npa: '1024', agence: 'Agence d\'assurances sociales de Renens' },

  // Villes moyennes (5k-10k habitants)
  'la-tour-de-peilz': { name: 'La Tour-de-Peilz', population: '12\'000', canton: 'Vaud', district: 'Riviera-Pays-d\'Enhaut', npa: '1814', agence: 'Agence d\'assurances sociales de Vevey' },
  'aigle': { name: 'Aigle', population: '10\'500', canton: 'Vaud', district: 'Aigle', npa: '1860', agence: 'Agence d\'assurances sociales d\'Aigle' },
  'gland': { name: 'Gland', population: '13\'500', canton: 'Vaud', district: 'Nyon', npa: '1196', agence: 'Agence d\'assurances sociales de Nyon' },
  'bussigny': { name: 'Bussigny', population: '8\'500', canton: 'Vaud', district: 'Ouest lausannois', npa: '1030', agence: 'Agence d\'assurances sociales de Renens' },
  'crissier': { name: 'Crissier', population: '7\'500', canton: 'Vaud', district: 'Ouest lausannois', npa: '1023', agence: 'Agence d\'assurances sociales de Renens' },
  'chavannes-pres-renens': { name: 'Chavannes-près-Renens', population: '7\'000', canton: 'Vaud', district: 'Ouest lausannois', npa: '1022', agence: 'Agence d\'assurances sociales de Renens' },
  'villeneuve': { name: 'Villeneuve', population: '5\'500', canton: 'Vaud', district: 'Aigle', npa: '1844', agence: 'Agence d\'assurances sociales d\'Aigle' },
  'epalinges': { name: 'Épalinges', population: '9\'500', canton: 'Vaud', district: 'Lausanne', npa: '1066', agence: 'Agence d\'assurances sociales de Lausanne' },
  'lutry': { name: 'Lutry', population: '10\'000', canton: 'Vaud', district: 'Lavaux-Oron', npa: '1095', agence: 'Agence d\'assurances sociales de Lausanne' },
  'payerne': { name: 'Payerne', population: '10\'000', canton: 'Vaud', district: 'Broye-Vully', npa: '1530', agence: 'Agence d\'assurances sociales de Payerne' },

  // Villes importantes (3k-5k habitants)
  'aubonne': { name: 'Aubonne', population: '3\'400', canton: 'Vaud', district: 'Morges', npa: '1170', agence: 'Agence d\'assurances sociales de Morges' },
  'orbe': { name: 'Orbe', population: '7\'000', canton: 'Vaud', district: 'Jura-Nord vaudois', npa: '1350', agence: 'Agence d\'assurances sociales d\'Yverdon-les-Bains' },
  'saint-prex': { name: 'Saint-Prex', population: '6\'000', canton: 'Vaud', district: 'Morges', npa: '1162', agence: 'Agence d\'assurances sociales de Morges' },
  'rolle': { name: 'Rolle', population: '5\'800', canton: 'Vaud', district: 'Nyon', npa: '1180', agence: 'Agence d\'assurances sociales de Nyon' },
  'moudon': { name: 'Moudon', population: '5\'800', canton: 'Vaud', district: 'Broye-Vully', npa: '1510', agence: 'Agence d\'assurances sociales de Payerne' },
  'le-mont-sur-lausanne': { name: 'Le Mont-sur-Lausanne', population: '8\'500', canton: 'Vaud', district: 'Lausanne', npa: '1052', agence: 'Agence d\'assurances sociales de Lausanne' },
  'cheseaux-sur-lausanne': { name: 'Cheseaux-sur-Lausanne', population: '5\'000', canton: 'Vaud', district: 'Gros-de-Vaud', npa: '1033', agence: 'Agence d\'assurances sociales de Lausanne' },
  'romanel-sur-lausanne': { name: 'Romanel-sur-Lausanne', population: '5\'000', canton: 'Vaud', district: 'Lausanne', npa: '1032', agence: 'Agence d\'assurances sociales de Lausanne' },
  'penthalaz': { name: 'Penthalaz', population: '3\'000', canton: 'Vaud', district: 'Gros-de-Vaud', npa: '1305', agence: 'Agence d\'assurances sociales de Lausanne' },
  'bex': { name: 'Bex', population: '7\'500', canton: 'Vaud', district: 'Aigle', npa: '1880', agence: 'Agence d\'assurances sociales d\'Aigle' },
};

// Villes à afficher dans le maillage interne (les plus importantes)
const linkedCities = [
  'lausanne', 'yverdon-les-bains', 'montreux', 'renens', 'nyon', 'vevey',
  'pully', 'morges', 'prilly', 'ecublens', 'la-tour-de-peilz', 'aigle',
  'gland', 'bex', 'payerne', 'rolle',
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const city = cityData[slug];
  if (!city) {
    return { title: 'Ville non trouvée' };
  }

  return {
    metadataBase: new URL('https://vd-subside.ch'),
    title: `Subside Assurance Maladie ${city.name} 2026 : Conditions et Montants`,
    description: `Habitants de ${city.name}, vérifiez votre droit au subside assurance maladie 2026. Barème, montants et démarches pour ${city.name} (Canton de Vaud).`,
    keywords: [
      `subside ${city.name.toLowerCase()}`,
      `subside assurance maladie ${city.name.toLowerCase()}`,
      `subside vaud ${city.name.toLowerCase()}`,
      `demande subside ${city.name.toLowerCase()}`,
      `subside lamal ${city.name.toLowerCase()}`,
      `aide assurance maladie ${city.name.toLowerCase()}`,
      `subside ${city.district.toLowerCase()}`,
      `montant subside ${city.name.toLowerCase()}`,
      `formulaire subside ${city.name.toLowerCase()}`,
    ],
    openGraph: {
      title: `Subside Assurance Maladie ${city.name} 2026 : Conditions et Montants`,
      description: `Habitants de ${city.name}, vérifiez votre droit au subside assurance maladie 2026. Barème, montants et démarches pour le district de ${city.district}.`,
      url: `https://vd-subside.ch/ville/${slug}`,
      siteName: 'VD-Subside',
      locale: 'fr_CH',
      type: 'website',
    },
    alternates: {
      canonical: `https://vd-subside.ch/ville/${slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await Promise.resolve(params);
  const city = cityData[slug];

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Ville non trouvée</h1>
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  // Autres villes à afficher (exclure la ville actuelle)
  const otherCities = linkedCities
    .filter((c) => c !== slug)
    .map((c) => ({ slug: c, ...cityData[c] }));

  // FAQ data pour le schema JSON-LD
  const faqItems = [
    {
      question: `Qui peut bénéficier d'un subside à ${city.name} ?`,
      answer: `Tous les habitants de ${city.name} domiciliés dans le canton de Vaud peuvent bénéficier d'un subside d'assurance maladie s'ils remplissent les conditions de revenu. Le montant du subside dépend de votre situation familiale et de vos revenus. Les personnes seules, couples et familles avec enfants résidant à ${city.name} (NPA ${city.npa}) sont éligibles.`,
    },
    {
      question: `Quel est le montant du subside à ${city.name} en 2026 ?`,
      answer: `Les montants des subsides 2026 pour les habitants de ${city.name} sont identiques à ceux du reste du canton de Vaud : jusqu'à 5'000 CHF/an pour une personne seule, jusqu'à 8'000 CHF/an pour un couple, et jusqu'à 12'000 CHF/an pour une famille avec enfants. Cela représente une économie pouvant aller jusqu'à 700 CHF par mois.`,
    },
    {
      question: `Comment faire une demande de subside à ${city.name} ?`,
      answer: `Les habitants de ${city.name} (district de ${city.district}) doivent faire leur demande auprès de l'Office vaudois de l'assurance-maladie (OVAM). Vous pouvez déposer votre demande en ligne via notre plateforme, par courrier postal, ou en vous rendant à l'${city.agence}. Le délai de traitement est de 4 à 6 semaines.`,
    },
    {
      question: `Quels documents faut-il pour demander un subside à ${city.name} ?`,
      answer: `Pour faire votre demande de subside à ${city.name}, vous aurez besoin de : votre dernière décision de taxation fiscale, une attestation de votre caisse maladie, une pièce d'identité valide, et un justificatif de domicile à ${city.name} (NPA ${city.npa}). Si votre situation a changé, des documents supplémentaires peuvent être demandés.`,
    },
    {
      question: `Le subside est-il rétroactif à ${city.name} ?`,
      answer: `Oui, le subside peut être rétroactif. Si vous déposez votre demande avant le 31 décembre 2026, le subside peut être versé rétroactivement depuis le 1er janvier 2026. Il est donc important de ne pas attendre pour faire votre demande, même si vous êtes en retard.`,
    },
  ];

  // Schema JSON-LD FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  // Schema JSON-LD LocalBusiness/Service
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Demande de subside assurance maladie à ${city.name}`,
    description: `Accompagnement gratuit pour la demande de subside d'assurance maladie à ${city.name} (${city.npa}), canton de Vaud.`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `District de ${city.district}`,
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'VD-Subside',
      url: 'https://vd-subside.ch',
    },
  };

  return (
    <main className="min-h-screen">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Bouton retour accueil */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-50 transition-all duration-300 hover:shadow-xl inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Accueil
        </Link>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-4">
              District de {city.district} &bull; {city.canton}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Subside d&apos;assurance maladie à {city.name}
            </h1>
            <p className="text-xl text-green-50 mb-6">
              Habitants de {city.name} ({city.npa}) : vérifiez gratuitement votre droit au subside
              d&apos;assurance maladie 2026. Économisez jusqu&apos;à 700 CHF par mois sur vos primes LAMal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#demande" className="btn-primary bg-white text-green-600 hover:bg-green-50 font-bold shadow-xl inline-block text-center">
                Faire ma demande gratuite
              </Link>
              <Link href="#info" className="bg-white text-green-600 border-2 border-white font-bold py-4 px-10 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg inline-block text-center">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="card">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {city.population}
              </div>
              <div className="text-gray-600">Habitants à {city.name}</div>
            </div>
            <div className="card">
              <div className="text-4xl font-bold text-green-600 mb-2">
                ~30%
              </div>
              <div className="text-gray-600">Éligibles au subside</div>
            </div>
            <div className="card">
              <div className="text-4xl font-bold text-green-600 mb-2">
                700 CHF
              </div>
              <div className="text-gray-600">Économie max/mois</div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de demande */}
      <section id="demande" className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Faites votre demande de subside à {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous. Notre équipe vous contactera par téléphone
              pour vous accompagner dans votre demande de subside.
            </p>
          </div>
          <ContactForm source={`ville-${slug}`} />
        </div>
      </section>

      {/* Info section avec FAQ */}
      <section id="info" className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Tout savoir sur les subsides à {city.name}
          </h2>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
            <h3 className="text-2xl font-bold text-gray-900">
              Qui peut bénéficier d&apos;un subside à {city.name} ?
            </h3>
            <p>
              Tous les habitants de <strong>{city.name}</strong> ({city.npa}) domiciliés dans le canton de Vaud peuvent
              bénéficier d&apos;un subside d&apos;assurance maladie s&apos;ils remplissent les conditions de revenu.
              Le montant du subside dépend de votre situation familiale et de vos revenus. La commune de {city.name},
              située dans le <strong>district de {city.district}</strong>, dépend de l&apos;{city.agence}.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              Montants des subsides 2026 pour {city.name}
            </h3>
            <p>
              Les montants des subsides pour les habitants de {city.name} sont fixés par le canton de Vaud
              et sont identiques pour toutes les communes du district de {city.district}.
              Ils peuvent aller de quelques centaines à plusieurs milliers de francs par an :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personne seule</strong> : jusqu&apos;à 5&apos;000 CHF/an (soit ~420 CHF/mois)</li>
              <li><strong>Couple</strong> : jusqu&apos;à 8&apos;000 CHF/an (soit ~670 CHF/mois)</li>
              <li><strong>Famille avec enfants</strong> : jusqu&apos;à 12&apos;000 CHF/an (soit ~1&apos;000 CHF/mois)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">
              Comment faire sa demande à {city.name} ?
            </h3>
            <p>
              Les habitants de {city.name} doivent faire leur demande auprès de
              l&apos;<strong>Office vaudois de l&apos;assurance-maladie (OVAM)</strong>. La demande peut se faire :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>En ligne via notre plateforme (recommandé)</li>
              <li>Par courrier postal</li>
              <li>En se rendant à l&apos;{city.agence}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">
              Documents nécessaires pour {city.name}
            </h3>
            <p>
              Pour compléter votre demande de subside à {city.name}, vous aurez besoin des documents suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dernière décision de taxation fiscale</li>
              <li>Attestation de votre caisse d&apos;assurance maladie</li>
              <li>Pièce d&apos;identité valide</li>
              <li>Justificatif de domicile à {city.name} ({city.npa})</li>
            </ul>

            <div className="bg-green-600/10 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
              <h4 className="font-bold text-green-600 mb-2">Conseil pour les habitants de {city.name}</h4>
              <p className="text-sm text-gray-700">
                N&apos;attendez pas ! Le subside peut être rétroactif jusqu&apos;au 1er janvier 2026 si vous
                déposez votre demande avant le 31 décembre 2026. Plus vous faites votre demande tôt,
                plus vite vous commencez à économiser.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Délais de traitement à {city.name}
            </h3>
            <p>
              Une fois votre dossier complet déposé auprès de l&apos;{city.agence}, le délai de traitement
              est généralement de <strong>4 à 6 semaines</strong>. Les demandes déposées en début d&apos;année
              sont traitées en priorité. Le subside prend effet le premier jour du deuxième mois
              suivant le dépôt de la demande.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="#demande" className="btn-primary inline-block font-semibold">
              Faire ma demande maintenant
            </Link>
          </div>
        </div>
      </section>

      {/* Guides utiles */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Guides utiles pour les habitants de {city.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/guide/comment-faire-demande-subside-vaud" className="card hover:shadow-lg transition-shadow p-6">
              <h3 className="font-bold text-gray-900 mb-2">Comment faire sa demande</h3>
              <p className="text-sm text-gray-600">Guide étape par étape pour obtenir votre subside dans le canton de Vaud.</p>
            </Link>
            <Link href="/guide/documents-necessaires-subside-vaud" className="card hover:shadow-lg transition-shadow p-6">
              <h3 className="font-bold text-gray-900 mb-2">Documents nécessaires</h3>
              <p className="text-sm text-gray-600">Liste complète des documents à fournir pour votre demande de subside.</p>
            </Link>
            <Link href="/guide/bareme-subside-vaud-2026" className="card hover:shadow-lg transition-shadow p-6">
              <h3 className="font-bold text-gray-900 mb-2">Barème des subsides 2026</h3>
              <p className="text-sm text-gray-600">Montants détaillés des subsides selon votre situation familiale et vos revenus.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Autres villes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Subside dans d&apos;autres villes vaudoises
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/ville/${c.slug}`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="font-semibold text-gray-900">{c.name}</div>
                <div className="text-sm text-gray-500">{c.population} hab.</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Habitants de {city.name}, ne passez pas à côté de votre subside !
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Chaque année, des milliers de Vaudois ne font pas leur demande de subside alors qu&apos;ils y ont droit.
            Vérifiez votre éligibilité gratuitement.
          </p>
          <Link href="#demande" className="btn-primary bg-white text-green-600 hover:bg-green-50 font-semibold shadow-lg">
            Vérifier mon éligibilité
          </Link>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((slug) => ({
    slug,
  }));
}
