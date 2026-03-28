import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Demande de subside en ligne OVAM — Guide étape par étape',
  description: 'Comment faire sa demande de subside en ligne auprès de l\'OVAM. Guide étape par étape pour soumettre votre dossier rapidement.',
  alternates: { canonical: '/blog/demande-subside-en-ligne-ovam' },
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
          <span className="text-gray-700">Demande en ligne OVAM</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700">Démarches</span>
          <span className="text-xs text-gray-400">15 février 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
          Comment faire sa demande de subside en ligne auprès de l&apos;OVAM
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            L&apos;OVAM (Office Vaudois de l&apos;Assurance Maladie) propose la possibilité de déposer
            sa demande de subside directement en ligne. Ce guide vous accompagne étape par étape dans
            cette démarche.
          </p>

          <h2>Les documents à préparer</h2>
          <p>
            Avant de commencer votre demande, assurez-vous d&apos;avoir les documents suivants à portée de main :
          </p>
          <ul>
            <li>Dernière <strong>taxation fiscale</strong> (avis de taxation définitif)</li>
            <li><strong>Pièce d&apos;identité</strong> valable (carte d&apos;identité ou permis de séjour)</li>
            <li><strong>Attestation d&apos;assurance maladie</strong> de votre caisse maladie</li>
            <li>Justificatifs de <strong>revenus actuels</strong> si votre situation a changé depuis la dernière taxation</li>
          </ul>
          <p>
            La liste complète est disponible dans notre guide{' '}
            <Link href="/guide/documents-necessaires-subside-vaud">documents nécessaires pour le subside</Link>.
          </p>

          <h2>Les étapes de la demande</h2>
          <ol>
            <li><strong>Vérifiez votre éligibilité</strong> avec notre <Link href="/calculateur">calculateur gratuit</Link></li>
            <li><strong>Rassemblez les documents</strong> listés ci-dessus</li>
            <li><strong>Remplissez le formulaire</strong> sur le site de l&apos;OVAM ou via notre <Link href="/demande">service d&apos;accompagnement gratuit</Link></li>
            <li><strong>Attendez la réponse</strong> — le délai est généralement de 4 à 6 semaines</li>
          </ol>

          <h2>Besoin d&apos;aide ?</h2>
          <p>
            Notre équipe de conseillers certifiés vous accompagne gratuitement dans votre demande.{' '}
            <Link href="/demande">Faites votre demande ici</Link> — réponse personnalisée sous 24h.
          </p>
        </div>
      </div>
    </div>
  );
}
