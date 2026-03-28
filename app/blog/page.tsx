import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Actualités — Subside Assurance Maladie Vaud 2026',
  description:
    'Actualités et informations sur les subsides d\'assurance maladie dans le Canton de Vaud. Barèmes 2026, changements OVAM, conseils pratiques.',
  alternates: { canonical: '/blog' },
};

const articles = [
  {
    slug: 'baremes-subside-vaud-2026-hausse',
    title: 'Barèmes 2026 : les plafonds de subside revus à la hausse dans le Canton de Vaud',
    date: '2026-03-15',
    excerpt:
      'Les nouveaux barèmes 2026 de l\'OVAM élargissent l\'accès au subside assurance maladie. Davantage de ménages vaudois sont désormais éligibles grâce à des plafonds de revenu rehaussés.',
    category: 'Barèmes',
  },
  {
    slug: 'primes-assurance-maladie-vaud-2026',
    title: 'Hausse des primes 2026 : comment le subside compense l\'augmentation',
    date: '2026-03-01',
    excerpt:
      'Les primes d\'assurance maladie augmentent en moyenne de 6% en 2026 dans le Canton de Vaud. Le subside cantonal permet de compenser partiellement ou totalement cette hausse pour les ménages éligibles.',
    category: 'Primes',
  },
  {
    slug: 'demande-subside-en-ligne-ovam',
    title: 'Comment faire sa demande de subside en ligne auprès de l\'OVAM',
    date: '2026-02-15',
    excerpt:
      'L\'OVAM permet désormais de déposer sa demande de subside en ligne. Guide étape par étape pour soumettre votre dossier rapidement et sans erreur.',
    category: 'Démarches',
  },
  {
    slug: 'changement-situation-subside-vaud',
    title: 'Changement de situation en cours d\'année : vos droits au subside',
    date: '2026-02-01',
    excerpt:
      'Divorce, perte d\'emploi, naissance : un changement de situation peut modifier votre droit au subside. Voici comment signaler un changement et obtenir un recalcul.',
    category: 'Droits',
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-600 transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Actualités</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Actualités
        </h1>
        <p className="text-lg text-gray-500 mb-12">
          Informations et mises à jour sur les subsides d&apos;assurance maladie dans le Canton de Vaud.
        </p>

        {/* Articles */}
        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-green-200 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700">
                  {article.category}
                </span>
                <span className="text-xs text-gray-400">
                  {formatDate(article.date)}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 mt-4">
                Lire l&apos;article
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
