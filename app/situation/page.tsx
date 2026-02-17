import { Metadata } from 'next';
import Link from 'next/link';
import { situations } from '@/data/situations';

export const metadata: Metadata = {
  title: 'Subsides par Situation | Trouvez Votre Cas Spécifique | VD-Subside',
  description: 'Découvrez le subside d\'assurance-maladie adapté à votre situation : étudiant, chômage, retraite, famille monoparentale, apprenti, indépendant, temps partiel. Canton de Vaud 2026.',
  openGraph: {
    title: 'Subsides par Situation | Trouvez Votre Cas Spécifique',
    description: 'Découvrez le subside adapté à votre situation dans le Canton de Vaud.',
    type: 'website',
    locale: 'fr_CH',
    url: 'https://vd-subside.ch/situation',
  },
};

export default function SituationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Bouton Accueil */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-50 transition-all duration-300 hover:shadow-xl inline-flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Accueil
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20 md:py-32 pt-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trouvez le Subside Adapté à Votre Situation
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Chaque situation a ses spécificités. Découvrez les conditions, montants et démarches pour votre cas particulier dans le Canton de Vaud.
            </p>
          </div>
        </div>
      </section>

      {/* Liste des Situations */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sélectionnez Votre Situation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cliquez sur votre situation pour découvrir les informations spécifiques, fact-checkées depuis les sources officielles du Canton de Vaud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((situation) => (
              <Link
                key={situation.slug}
                href={`/situation/${situation.slug}`}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 hover:scale-105"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {situation.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {situation.title.replace('Subside Assurance Maladie pour ', '').replace('Subside Assurance Maladie ', '')}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {situation.introduction}
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:gap-3 transition-all">
                  En savoir plus
                  <svg
                    className="w-5 h-5 ml-2 group-hover:ml-0 transition-all"
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Général */}
      <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous ne trouvez pas votre situation ?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Pas de problème ! Contactez-nous directement et notre équipe vous guidera vers le subside adapté à votre cas particulier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demande"
              className="bg-white text-green-600 font-bold py-4 px-10 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg inline-block"
            >
              Faire une demande générale
            </Link>
            <a
              href="mailto:info@vd-subside.ch"
              className="bg-green-700 text-white font-bold py-4 px-10 rounded-xl hover:bg-green-800 transition-all duration-300 shadow-lg inline-block border-2 border-white"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Infos Officielles */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Informations Officielles 2026
            </h3>
            <p className="text-blue-900 mb-4 leading-relaxed">
              Toutes les informations présentées sur cette page sont fact-checkées depuis les sources officielles du Canton de Vaud :
            </p>
            <ul className="space-y-2 text-blue-900">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <a
                  href="https://www.vd.ch/sante-soins-et-handicap/assurance-maladie/subside-a-lassurance-maladie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-700"
                >
                  Office Vaudois de l'Assurance-Maladie (OVAM)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <a
                  href="https://www.vd.ch/sante-soins-et-handicap/assurance-maladie/subside-a-lassurance-maladie/conditions-doctroi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-700"
                >
                  Conditions d'octroi officielles
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Notice explicative subsides 2026 (PDF officiel)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
