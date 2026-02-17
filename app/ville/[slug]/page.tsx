import type { Metadata } from 'next';
import Calculator from '@/components/Calculator';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

const cityData: { [key: string]: { name: string; population: string; canton: string } } = {
  'lausanne': { name: 'Lausanne', population: '140\'000', canton: 'Vaud' },
  'yverdon-les-bains': { name: 'Yverdon-les-Bains', population: '30\'000', canton: 'Vaud' },
  'montreux': { name: 'Montreux', population: '26\'000', canton: 'Vaud' },
  'renens': { name: 'Renens', population: '21\'000', canton: 'Vaud' },
  'nyon': { name: 'Nyon', population: '21\'000', canton: 'Vaud' },
  'vevey': { name: 'Vevey', population: '20\'000', canton: 'Vaud' },
  'pully': { name: 'Pully', population: '18\'000', canton: 'Vaud' },
  'morges': { name: 'Morges', population: '16\'000', canton: 'Vaud' },
  'prilly': { name: 'Prilly', population: '12\'000', canton: 'Vaud' },
  'ecublens': { name: 'Écublens', population: '13\'000', canton: 'Vaud' },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cityData[params.slug];
  if (!city) {
    return { title: 'Ville non trouvée' };
  }

  return {
    title: `Subside Assurance Maladie ${city.name} | Calculateur Gratuit`,
    description: `Calculez votre subside d'assurance maladie à ${city.name}. Guide complet, montants 2024, conditions d'éligibilité et démarches pour les habitants de ${city.name}.`,
    keywords: [
      `subside assurance maladie ${city.name.toLowerCase()}`,
      `aide assurance ${city.name.toLowerCase()}`,
      `subside lamal ${city.name.toLowerCase()}`,
      `réduction prime ${city.name.toLowerCase()}`,
    ],
  };
}

export default function CityPage({ params }: Props) {
  const city = cityData[params.slug];

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
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-4">
              📍 {city.canton}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Subside d'assurance maladie à {city.name}
            </h1>
            <p className="text-xl text-blue-50 mb-6">
              Habitants de {city.name} : calculez gratuitement votre droit au subside d'assurance maladie. 
              Économisez jusqu'à 7'500 CHF par an sur vos primes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#calculateur" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                Calculer mon subside
              </Link>
              <Link href="#info" className="btn-secondary border-white text-white hover:bg-white/10">
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
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {city.population}
              </div>
              <div className="text-gray-600">Habitants à {city.name}</div>
            </div>
            <div className="card">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ~30%
              </div>
              <div className="text-gray-600">Éligibles au subside</div>
            </div>
            <div className="card">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                3'500 CHF
              </div>
              <div className="text-gray-600">Subside moyen/an</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <div id="calculateur">
        <Calculator />
      </div>

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

            <div className="bg-blue-600/10 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
              <h4 className="font-bold text-blue-600 mb-2">💡 Conseil pour les habitants de {city.name}</h4>
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
            <Link href="/calculateur" className="btn-primary inline-block">
              Calculer mon subside maintenant
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Habitants de {city.name}, ne passez pas à côté de votre subside !
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Des milliers d'habitants de {city.name} économisent déjà sur leurs primes d'assurance maladie
          </p>
          <Link href="/demande" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
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
