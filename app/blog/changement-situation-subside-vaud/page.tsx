import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Changement de situation et subside Vaud — Vos droits',
  description: 'Divorce, perte d\'emploi, naissance : un changement de situation peut modifier votre droit au subside. Comment signaler un changement et obtenir un recalcul.',
  alternates: { canonical: '/blog/changement-situation-subside-vaud' },
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
          <span className="text-gray-700">Changement de situation</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700">Droits</span>
          <span className="text-xs text-gray-400">1 février 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
          Changement de situation en cours d&apos;année : vos droits au subside
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Votre situation a changé depuis votre dernière déclaration fiscale ? Un divorce, une perte
            d&apos;emploi, une naissance ou un déménagement peuvent modifier votre droit au subside
            d&apos;assurance maladie dans le Canton de Vaud. Voici comment faire valoir vos droits.
          </p>

          <h2>Quels changements impactent votre subside ?</h2>
          <ul>
            <li><strong>Divorce ou séparation</strong> — votre revenu déterminant est recalculé sur la base de vos revenus individuels. Voir notre guide <Link href="/guide/subside-vaud-divorce-separation">subside après divorce</Link>.</li>
            <li><strong>Perte d&apos;emploi</strong> — vos revenus baissent, ce qui peut ouvrir un droit au subside ou augmenter son montant. Voir <Link href="/guide/subside-vaud-perte-emploi">subside après perte d&apos;emploi</Link>.</li>
            <li><strong>Naissance d&apos;un enfant</strong> — la composition de votre ménage change, ce qui modifie les barèmes applicables.</li>
            <li><strong>Début d&apos;activité indépendante</strong> — votre revenu peut fluctuer, impactant votre éligibilité.</li>
            <li><strong>Déménagement</strong> — si vous changez de commune ou de canton, les conditions changent.</li>
          </ul>

          <h2>Comment signaler un changement ?</h2>
          <p>
            Vous devez informer l&apos;OVAM de tout changement de situation significatif. La procédure
            consiste à :
          </p>
          <ol>
            <li>Contacter l&apos;OVAM par courrier ou en ligne</li>
            <li>Fournir les justificatifs du changement (jugement de divorce, attestation de chômage, acte de naissance, etc.)</li>
            <li>Attendre le recalcul de votre subside</li>
          </ol>

          <h2>Ne passez pas à côté de vos droits</h2>
          <p>
            Un changement de situation peut vous rendre éligible à un subside même si votre demande
            avait été refusée auparavant. Notre équipe vérifie gratuitement votre nouvelle situation.{' '}
            <Link href="/demande">Faites votre demande ici</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
