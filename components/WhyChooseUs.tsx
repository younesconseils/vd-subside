'use client';

export default function WhyChooseUs() {
  const comparisons = [
    {
      feature: 'Temps de réponse',
      us: '24 heures',
      others: '2-4 semaines',
      highlight: true
    },
    {
      feature: 'Accompagnement personnalisé',
      us: 'Expert dédié gratuit',
      others: 'Formulaire seul',
      highlight: true
    },
    {
      feature: 'Taux d\'acceptation',
      us: '85%',
      others: '60-70%',
      highlight: true
    },
    {
      feature: 'Constitution du dossier',
      us: 'Nous nous en chargeons',
      others: 'À votre charge',
      highlight: false
    },
    {
      feature: 'Suivi de la demande',
      us: 'Suivi complet inclus',
      others: 'Limité ou absent',
      highlight: false
    },
    {
      feature: 'Frais de service',
      us: '0 CHF',
      others: '0 CHF',
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-800 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Notre différence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pourquoi VD-Subside ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comparaison avec les autres services de demande de subside
          </p>
        </div>

        {/* Comparison table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-600">Critère</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg shadow-lg">
                  <span className="text-white font-bold text-sm">VD-Subside</span>
                </div>
              </div>
              <div className="text-center text-sm font-medium text-gray-600">Autres services</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors ${
                    item.highlight ? 'bg-green-50/30' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900">{item.feature}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-green-700">{item.us}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-600 text-center">{item.others}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">12k+</div>
              <div className="text-sm text-gray-600">Familles accompagnées</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Taux d'acceptation</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">3.2M CHF</div>
              <div className="text-sm text-gray-600">Économisés en 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
