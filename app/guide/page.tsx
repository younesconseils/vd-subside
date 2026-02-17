import { Metadata } from 'next';
import Link from 'next/link';
import { guides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'Guides Subside Assurance Maladie Vaud 2026 | VD-Subside',
  description: 'Tous nos guides pratiques sur le subside assurance maladie dans le Canton de Vaud. Démarches, calcul, situations spécifiques, montants 2026.',
};

export default function GuidesIndexPage() {
  const categories = [
    { title: 'Démarches & Processus', slugs: ['comment-faire-demande-subside-vaud', 'documents-necessaires-subside-vaud', 'delai-subside-vaud-combien-temps', 'renouvellement-subside-vaud', 'actualisation-financiere-subside-vaud', 'recours-refus-subside-vaud'] },
    { title: 'Calcul & Montants', slugs: ['calculer-subside-vaud-rdu', 'bareme-subside-vaud-2026', 'plafond-revenu-subside-vaud', 'fortune-subside-vaud-impact', 'subside-vaud-couple-marie', 'subside-vaud-nouveau-resident'] },
    { title: 'Situations Spécifiques', slugs: ['subside-vaud-perte-emploi', 'subside-vaud-divorce-separation', 'subside-vaud-jeune-26-ans', 'subside-vaud-femme-enceinte-maternite', 'subside-vaud-permis-b-c-etranger', 'subside-vaud-travailleur-frontalier', 'subside-vaud-invalide-ai', 'subside-vaud-revenu-insertion-ri'] },
    { title: 'Questions Pratiques', slugs: ['ovam-contact-telephone-horaires', 'changer-assurance-maladie-subside-vaud', 'subside-vaud-enfant-mineur', 'subside-vaud-prestations-complementaires', 'economiser-prime-assurance-maladie-vaud', 'subside-vaud-remboursement-trop-percu'] },
    { title: 'Comparaisons & Analyses', slugs: ['combien-subside-vaud-par-mois', 'subside-vaud-region-1-region-2', 'subside-vaud-vs-autres-cantons', 'hausse-primes-assurance-maladie-vaud-2026'] },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Bouton Accueil */}
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
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20 md:py-28 pt-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Guides Subside Vaud 2026
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            Tout ce que vous devez savoir sur le subside assurance maladie dans le Canton de Vaud. {guides.length} guides pratiques avec des données officielles vérifiées.
          </p>
        </div>
      </section>

      {/* Liste des guides par catégorie */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          {categories.map((category) => (
            <div key={category.title} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-green-200">
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.slugs.map((slug) => {
                  const guide = guides.find((g) => g.slug === slug);
                  if (!guide) return null;
                  return (
                    <Link
                      key={guide.slug}
                      href={`/guide/${guide.slug}`}
                      className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-green-400 hover:shadow-xl transition-all group"
                    >
                      <div className="text-3xl mb-3">{guide.icon}</div>
                      <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2 text-lg leading-tight">
                        {guide.h1.length > 55 ? guide.h1.substring(0, 55) + '...' : guide.h1}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{guide.metaDescription}</p>
                      <span className="inline-flex items-center gap-1 text-green-600 font-medium text-sm">
                        Lire le guide
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Faire Votre Demande ?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Notre équipe vous accompagne gratuitement. Réponse sous 24h garantie.
          </p>
          <Link
            href="/demande"
            className="bg-white text-green-600 font-bold py-4 px-12 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg inline-block text-lg"
          >
            Faire ma demande de subside
          </Link>
        </div>
      </section>
    </main>
  );
}
