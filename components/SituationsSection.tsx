import Link from 'next/link';

const situations = [
  { slug: 'etudiant', title: 'Étudiants', icon: '🎓', color: 'from-blue-500 to-blue-600' },
  { slug: 'chomage', title: 'Chômage', icon: '💼', color: 'from-orange-500 to-orange-600' },
  { slug: 'retraite', title: 'Retraités', icon: '👴', color: 'from-purple-500 to-purple-600' },
  { slug: 'famille-monoparentale', title: 'Famille Monoparentale', icon: '👨‍👧', color: 'from-pink-500 to-pink-600' },
  { slug: 'apprenti', title: 'Apprentis', icon: '🔧', color: 'from-green-500 to-green-600' },
  { slug: 'independant', title: 'Indépendants', icon: '💼', color: 'from-indigo-500 to-indigo-600' },
  { slug: 'temps-partiel', title: 'Temps Partiel', icon: '⏰', color: 'from-teal-500 to-teal-600' },
  { slug: 'famille-nombreuse', title: 'Famille Nombreuse', icon: '👨‍👩‍👧‍👦', color: 'from-red-500 to-red-600' },
];

export default function SituationsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trouvez le Subside Adapté à Votre Situation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chaque situation a ses spécificités. Découvrez les conditions d'éligibilité, montants et démarches pour votre cas particulier.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {situations.map((situation) => (
            <Link
              key={situation.slug}
              href={`/situation/${situation.slug}`}
              className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 hover:scale-105 flex flex-col items-center text-center"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${situation.color} flex items-center justify-center mb-4 text-3xl md:text-4xl group-hover:scale-110 transition-transform shadow-lg`}>
                {situation.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                {situation.title}
              </h3>

              {/* Arrow indicator */}
              <svg
                className="w-5 h-5 text-green-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </div>

        {/* CTA vers page complète */}
        <div className="text-center">
          <Link
            href="/situation"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Voir toutes les situations en détail
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
