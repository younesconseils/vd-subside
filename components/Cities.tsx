import Link from 'next/link';

export default function Cities() {
  const cities = [
    { name: 'Lausanne', population: '140k', slug: 'lausanne' },
    { name: 'Yverdon-les-Bains', population: '30k', slug: 'yverdon-les-bains' },
    { name: 'Montreux', population: '26k', slug: 'montreux' },
    { name: 'Renens', population: '21k', slug: 'renens' },
    { name: 'Nyon', population: '21k', slug: 'nyon' },
    { name: 'Vevey', population: '20k', slug: 'vevey' },
    { name: 'Pully', population: '18k', slug: 'pully' },
    { name: 'Morges', population: '16k', slug: 'morges' },
    { name: 'Prilly', population: '12k', slug: 'prilly' },
    { name: 'Écublens', population: '13k', slug: 'ecublens' },
    { name: 'La Tour-de-Peilz', population: '12k', slug: 'la-tour-de-peilz' },
    { name: 'Aigle', population: '10k', slug: 'aigle' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Subsides par ville du canton de Vaud
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculez votre subside selon votre commune de résidence
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/ville/${city.slug}`}
              className="card hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-600 border-2 border-transparent"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {city.population} habitants
                  </p>
                </div>
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous ne trouvez pas votre commune ?
          </p>
          <Link href="/communes" className="btn-secondary inline-block">
            Voir toutes les communes du canton
          </Link>
        </div>
      </div>
    </section>
  );
}
