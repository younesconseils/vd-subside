import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hausse des primes 2026 : comment le subside compense l\'augmentation',
  description: 'Les primes d\'assurance maladie augmentent de 6% en 2026 dans le Canton de Vaud. Le subside permet de compenser cette hausse. Vérifiez votre éligibilité.',
  alternates: { canonical: '/blog/primes-assurance-maladie-vaud-2026' },
};

export default function Article() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-600 transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-green-600 transition-colors">Actualités</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Hausse des primes 2026</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700">Primes</span>
          <span className="text-xs text-gray-400">1 mars 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
          Hausse des primes 2026 : comment le subside compense l&apos;augmentation
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            En 2026, les primes d&apos;assurance maladie augmentent en moyenne de <strong>6%</strong> dans
            le Canton de Vaud. Pour de nombreux ménages, cette hausse représente plusieurs centaines
            de francs supplémentaires par an. Le subside cantonal permet de compenser cette augmentation.
          </p>

          <h2>L&apos;impact de la hausse sur votre budget</h2>
          <p>
            Pour une personne seule avec une prime moyenne de 450 CHF/mois, la hausse de 6% représente
            environ <strong>27 CHF de plus par mois</strong>, soit 324 CHF par an. Pour une famille
            de quatre personnes, l&apos;impact peut dépasser 1&apos;000 CHF annuels.
          </p>

          <h2>Le subside : un amortisseur efficace</h2>
          <p>
            Le subside d&apos;assurance maladie vaudois est justement conçu pour aider les ménages
            dont la charge de primes est disproportionnée par rapport à leurs revenus. En 2026, avec
            la hausse des barèmes, davantage de personnes peuvent en bénéficier.
          </p>
          <p>
            Selon votre situation, le subside peut couvrir <strong>de 30 à 331 CHF par mois</strong> de
            votre prime, compensant largement la hausse de 2026.
          </p>

          <h2>Que faire concrètement ?</h2>
          <ul>
            <li>
              <Link href="/calculateur">Calculez votre subside</Link> en 2 minutes avec notre outil gratuit
            </li>
            <li>
              Consultez les <Link href="/guide/bareme-subside-vaud-2026">barèmes 2026</Link> pour
              connaître les plafonds exacts
            </li>
            <li>
              <Link href="/demande">Faites votre demande</Link> — accompagnement gratuit, réponse sous 24h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
