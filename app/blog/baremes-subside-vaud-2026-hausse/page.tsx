import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Barèmes subside Vaud 2026 : plafonds revus à la hausse',
  description: 'Les barèmes 2026 de l\'OVAM élargissent l\'accès au subside assurance maladie. Plus de ménages vaudois sont éligibles grâce à des plafonds de revenu rehaussés.',
  alternates: { canonical: '/blog/baremes-subside-vaud-2026-hausse' },
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
          <span className="text-gray-700">Barèmes 2026</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700">Barèmes</span>
          <span className="text-xs text-gray-400">15 mars 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
          Barèmes 2026 : les plafonds de subside revus à la hausse dans le Canton de Vaud
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            L&apos;OVAM (Office Vaudois de l&apos;Assurance Maladie) a publié les nouveaux barèmes
            de subside pour l&apos;année 2026. Les plafonds de revenu déterminant (RDU) ont été
            rehaussés, ce qui élargit l&apos;accès au subside à davantage de ménages vaudois.
          </p>

          <h2>Ce qui change en 2026</h2>
          <p>
            Les principaux changements concernent les plafonds de revenu pour chaque catégorie
            de ménage. Concrètement, des personnes dont la demande avait été refusée en 2025
            pourraient désormais être éligibles avec les mêmes revenus.
          </p>

          <ul>
            <li><strong>Personne seule</strong> : subside possible jusqu&apos;à un RDU de 52&apos;000 CHF environ</li>
            <li><strong>Couple sans enfant</strong> : plafond relevé d&apos;environ 3%</li>
            <li><strong>Famille avec enfants</strong> : subside pouvant atteindre 700 CHF/mois</li>
          </ul>

          <p>
            Retrouvez tous les détails des barèmes dans notre{' '}
            <Link href="/guide/bareme-subside-vaud-2026">guide complet des barèmes 2026</Link>.
          </p>

          <h2>Comment vérifier votre éligibilité ?</h2>
          <p>
            Utilisez notre <Link href="/calculateur">calculateur gratuit</Link> pour estimer votre
            droit au subside en quelques minutes, ou{' '}
            <Link href="/demande">faites une demande d&apos;accompagnement</Link> pour recevoir
            une analyse personnalisée sous 24h.
          </p>
        </div>
      </div>
    </div>
  );
}
