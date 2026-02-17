import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Subside Assurance Maladie Vaud 2026 : Tout Savoir | Conditions, Montants, Démarches',
  description: 'Tout savoir sur le subside assurance maladie dans le Canton de Vaud en 2026. Conditions d\'éligibilité, montants selon votre situation, démarches OVAM et accompagnement gratuit.',
};

export default function EnSavoirPlusPage() {
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
              Tout Savoir sur les Subsides d'Assurance Maladie
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Comprendre le système de subsides dans le Canton de Vaud pour faire valoir vos droits simplement.
            </p>
          </div>
        </div>
      </section>

      {/* Qu'est-ce qu'un subside */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Qu'est-ce qu'un subside d'assurance maladie ?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le <strong>subside à l'assurance maladie</strong> est une aide financière mensuelle versée par le Canton de Vaud
              pour réduire vos primes d'assurance-maladie. L'objectif est de limiter votre charge de primes à <strong>maximum 10%
              de votre revenu déterminant</strong>.
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
              <p className="text-green-900 font-semibold mb-2">💡 Le saviez-vous ?</p>
              <p className="text-green-800">
                Plus de 250'000 Vaudois bénéficient déjà d'un subside. C'est un droit, pas une faveur !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Montants 2026 */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Montants des Subsides 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-100">
              <div className="text-green-600 font-bold text-sm mb-2">MINIMUM</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">30 CHF</div>
              <div className="text-gray-600">par mois et par personne</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-xl shadow-lg text-white">
              <div className="font-bold text-sm mb-2 opacity-90">MAXIMUM</div>
              <div className="text-4xl font-bold mb-2">331 CHF</div>
              <div className="opacity-90">par mois et par personne</div>
            </div>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <p className="text-blue-900">
              <strong>📊 Exemple :</strong> Une famille de 4 personnes peut recevoir jusqu'à <strong>1'324 CHF par mois</strong>
              (4 × 331 CHF), soit <strong>15'888 CHF par an</strong> d'économies !
            </p>
          </div>
        </div>
      </section>

      {/* Conditions principales */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Qui Peut Bénéficier d'un Subside ?
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-green-900 mb-2">✅ Domicilié dans le Canton de Vaud</h3>
              <p className="text-green-800">Vous devez avoir votre résidence officielle dans le canton.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-green-900 mb-2">✅ Revenu déterminant sous les limites</h3>
              <p className="text-green-800">
                Le calcul prend en compte vos revenus nets, votre fortune (au-dessus de 59'000 CHF pour une personne seule)
                et des déductions spécifiques selon votre situation.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-green-900 mb-2">✅ Assurance-maladie obligatoire souscrite</h3>
              <p className="text-green-800">Vous devez être assuré auprès d'une caisse-maladie reconnue en Suisse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Situations spécifiques */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Situations Particulières
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Chaque situation bénéficie de déductions spécifiques qui augmentent vos droits
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/situation/etudiant" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-green-100 hover:border-green-300">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Étudiants</h3>
              <p className="text-gray-600 text-sm">Droits spécifiques selon vos revenus et ceux de vos parents</p>
            </Link>
            <Link href="/situation/chomage" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-green-100 hover:border-green-300">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chômage</h3>
              <p className="text-gray-600 text-sm">Indemnités chômage prises en compte dans le calcul</p>
            </Link>
            <Link href="/situation/retraite" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-green-100 hover:border-green-300">
              <div className="text-4xl mb-3">👴</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Retraités</h3>
              <p className="text-gray-600 text-sm">Calcul basé sur votre rente AVS et 2e pilier</p>
            </Link>
            <Link href="/situation/famille-monoparentale" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-green-100 hover:border-green-300">
              <div className="text-4xl mb-3">👨‍👧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Famille Monoparentale</h3>
              <p className="text-gray-600 text-sm">Déductions renforcées pour parents seuls</p>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/situation"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Voir toutes les situations
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Faire Votre Demande ?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Notre équipe vous accompagne gratuitement dans toutes vos démarches. Réponse sous 24h garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demande"
              className="bg-white text-green-600 font-bold py-4 px-10 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg inline-block"
            >
              Demander mon subside
            </Link>
            <Link
              href="/#faq"
              className="bg-green-700 text-white font-bold py-4 px-10 rounded-xl hover:bg-green-800 transition-all duration-300 shadow-lg inline-block border-2 border-white"
            >
              Questions fréquentes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
