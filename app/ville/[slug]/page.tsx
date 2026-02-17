import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

const cityData: { [key: string]: { name: string; population: string; canton: string; district: string } } = {
  // Grandes villes (>10k habitants)
  'lausanne': { name: 'Lausanne', population: '140\'000', canton: 'Vaud', district: 'Lausanne' },
  'yverdon-les-bains': { name: 'Yverdon-les-Bains', population: '30\'000', canton: 'Vaud', district: 'Jura-Nord vaudois' },
  'montreux': { name: 'Montreux', population: '26\'000', canton: 'Vaud', district: 'Riviera-Pays-d\'Enhaut' },
  'renens': { name: 'Renens', population: '21\'000', canton: 'Vaud', district: 'Ouest lausannois' },
  'nyon': { name: 'Nyon', population: '21\'000', canton: 'Vaud', district: 'Nyon' },
  'vevey': { name: 'Vevey', population: '20\'000', canton: 'Vaud', district: 'Riviera-Pays-d\'Enhaut' },
  'pully': { name: 'Pully', population: '18\'000', canton: 'Vaud', district: 'Lavaux-Oron' },
  'morges': { name: 'Morges', population: '16\'000', canton: 'Vaud', district: 'Morges' },
  'prilly': { name: 'Prilly', population: '12\'000', canton: 'Vaud', district: 'Ouest lausannois' },
  'ecublens': { name: 'Écublens', population: '13\'000', canton: 'Vaud', district: 'Ouest lausannois' },

  // Villes moyennes (5k-10k habitants)
  'la-tour-de-peilz': { name: 'La Tour-de-Peilz', population: '12\'000', canton: 'Vaud', district: 'Riviera-Pays-d\'Enhaut' },
  'aigle': { name: 'Aigle', population: '10\'500', canton: 'Vaud', district: 'Aigle' },
  'gland': { name: 'Gland', population: '13\'500', canton: 'Vaud', district: 'Nyon' },
  'bussigny': { name: 'Bussigny', population: '8\'500', canton: 'Vaud', district: 'Ouest lausannois' },
  'crissier': { name: 'Crissier', population: '7\'500', canton: 'Vaud', district: 'Ouest lausannois' },
  'chavannes-pres-renens': { name: 'Chavannes-près-Renens', population: '7\'000', canton: 'Vaud', district: 'Ouest lausannois' },
  'villeneuve': { name: 'Villeneuve', population: '5\'500', canton: 'Vaud', district: 'Aigle' },
  'epalinges': { name: 'Épalinges', population: '9\'500', canton: 'Vaud', district: 'Lausanne' },
  'lutry': { name: 'Lutry', population: '10\'000', canton: 'Vaud', district: 'Lavaux-Oron' },
  'payerne': { name: 'Payerne', population: '10\'000', canton: 'Vaud', district: 'Broye-Vully' },

  // Villes importantes (3k-5k habitants)
  'aubonne': { name: 'Aubonne', population: '3\'400', canton: 'Vaud', district: 'Morges' },
  'orbe': { name: 'Orbe', population: '7\'000', canton: 'Vaud', district: 'Jura-Nord vaudois' },
  'saint-prex': { name: 'Saint-Prex', population: '6\'000', canton: 'Vaud', district: 'Morges' },
  'rolle': { name: 'Rolle', population: '5\'800', canton: 'Vaud', district: 'Nyon' },
  'moudon': { name: 'Moudon', population: '5\'800', canton: 'Vaud', district: 'Broye-Vully' },
  'le-mont-sur-lausanne': { name: 'Le Mont-sur-Lausanne', population: '8\'500', canton: 'Vaud', district: 'Lausanne' },
  'cheseaux-sur-lausanne': { name: 'Cheseaux-sur-Lausanne', population: '5\'000', canton: 'Vaud', district: 'Gros-de-Vaud' },
  'romanel-sur-lausanne': { name: 'Romanel-sur-Lausanne', population: '5\'000', canton: 'Vaud', district: 'Lausanne' },
  'penthalaz': { name: 'Penthalaz', population: '3\'000', canton: 'Vaud', district: 'Gros-de-Vaud' },
  'bex': { name: 'Bex', population: '7\'500', canton: 'Vaud', district: 'Aigle' },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const city = cityData[slug];
  if (!city) {
    return { title: 'Ville non trouvée' };
  }

  return {
    metadataBase: new URL('https://vd-subside.ch'),
    title: `Subside Assurance Maladie ${city.name} 2025 | VD-Subside`,
    description: `Subside assurance maladie à ${city.name} : calculateur gratuit, accompagnement, conditions 2025. Habitants de ${city.name}, économisez jusqu'à 8'400 CHF/an. Réponse sous 24h.`,
    keywords: [
      // Mots-clés locaux principaux
      `subside ${city.name.toLowerCase()}`,
      `subside assurance maladie ${city.name.toLowerCase()}`,
      `subside vaud ${city.name.toLowerCase()}`,
      `subside lamal ${city.name.toLowerCase()}`,

      // Longue traîne locale
      `demande subside ${city.name.toLowerCase()}`,
      `calculateur subside ${city.name.toLowerCase()}`,
      `aide assurance ${city.name.toLowerCase()}`,
      `réduction prime ${city.name.toLowerCase()}`,
      `économiser assurance maladie ${city.name.toLowerCase()}`,

      // District
      `subside ${city.district.toLowerCase()}`,
      `aide assurance ${city.district.toLowerCase()}`,

      // Questions locales
      `comment obtenir subside ${city.name.toLowerCase()}`,
      `ai-je droit subside ${city.name.toLowerCase()}`,
      `montant subside ${city.name.toLowerCase()}`,
      `formulaire subside ${city.name.toLowerCase()}`,
    ],
    openGraph: {
      title: `Subside Assurance Maladie ${city.name} 2025`,
      description: `Calculateur gratuit et accompagnement pour obtenir votre subside à ${city.name}. Réponse sous 24h.`,
      url: `https://vd-subside.ch/ville/${params.slug}`,
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
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
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
              📍 {city.canton}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Subside d'assurance maladie à {city.name}
            </h1>
            <p className="text-xl text-green-50 mb-6">
              Habitants de {city.name} : calculez gratuitement votre droit au subside d'assurance maladie. 
              Économisez jusqu'à 7'500 CHF par an sur vos primes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#demande" className="btn-primary bg-white text-green-600 hover:bg-green-50 font-bold shadow-xl inline-block text-center">
                Faire ma demande
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
                3'500 CHF
              </div>
              <div className="text-gray-600">Subside moyen/an</div>
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
              Remplissez le formulaire ci-dessous. Notre équipe vous contactera par téléphone dans les 24 heures
              pour vous accompagner dans votre demande de subside.
            </p>
          </div>
          <ContactForm source={`ville-${slug}`} />
        </div>
      </section>

      {/* Info section */}
      <section id="info" className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Tout savoir sur les subsides à {city.name}
          </h2>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
            <h3 className="text-2xl font-bold text-gray-900">
              Qui peut bénéficier d'un subside à {city.name} ?
            </h3>
            <p>
              Tous les habitants de <strong>{city.name}</strong> domiciliés dans le canton de Vaud peuvent 
              bénéficier d'un subside d'assurance maladie s'ils remplissent les conditions de revenu. 
              Le montant du subside dépend de votre situation familiale et de vos revenus.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              Montants des subsides 2024 pour {city.name}
            </h3>
            <p>
              Les montants des subsides pour les habitants de {city.name} sont identiques à ceux du reste 
              du canton de Vaud. Ils peuvent aller de quelques centaines à plusieurs milliers de francs par an :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personne seule : jusqu'à 5'000 CHF/an</li>
              <li>Couple : jusqu'à 8'000 CHF/an</li>
              <li>Famille avec enfants : jusqu'à 12'000 CHF/an</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">
              Comment faire sa demande à {city.name} ?
            </h3>
            <p>
              Les habitants de {city.name} doivent faire leur demande auprès du <strong>Service des subsides 
              de l'assurance-maladie du canton de Vaud</strong>. La demande peut se faire :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>En ligne via notre plateforme (recommandé)</li>
              <li>Par courrier postal</li>
              <li>En se rendant à l'Agence régionale de {city.name}</li>
            </ul>

            <div className="bg-green-600/10 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
              <h4 className="font-bold text-green-600 mb-2">💡 Conseil pour les habitants de {city.name}</h4>
              <p className="text-sm text-gray-700">
                N'attendez pas ! Faites votre demande dès maintenant. Le subside peut être rétroactif 
                jusqu'au 1er janvier de l'année en cours si vous déposez votre demande avant le 31 décembre.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Délais de traitement à {city.name}
            </h3>
            <p>
              Une fois votre dossier complet déposé, le délai de traitement est généralement de 
              <strong> 4 à 6 semaines</strong>. Les demandes déposées en début d'année sont traitées 
              en priorité.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="#demande" className="btn-primary inline-block font-semibold">
              Faire ma demande maintenant
            </Link>
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
            Des milliers d'habitants de {city.name} économisent déjà sur leurs primes d'assurance maladie
          </p>
          <Link href="#demande" className="btn-primary bg-white text-green-600 hover:bg-green-50 font-semibold shadow-lg">
            Faire ma demande
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
