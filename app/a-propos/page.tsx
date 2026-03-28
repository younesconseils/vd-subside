import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À propos — VD-Subside | Qui sommes-nous ?',
  description:
    'VD-Subside est un service d\'accompagnement gratuit pour les demandes de subside assurance maladie dans le Canton de Vaud. Conseillers certifiés FINMA et CICERO.',
  alternates: { canonical: '/a-propos' },
};

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-600 transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">À propos</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          À propos de VD-Subside
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">

          {/* Intro */}
          <p className="text-lg leading-relaxed">
            <strong>VD-Subside</strong> est un service d&apos;accompagnement spécialisé dans les
            demandes de subside d&apos;assurance maladie dans le Canton de Vaud. Notre mission :
            aider les résidents vaudois à faire valoir leurs droits et à bénéficier des réductions
            de primes auxquelles ils sont éligibles.
          </p>

          {/* Notre expertise */}
          <h2>Notre expertise</h2>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-gray-900 mb-1">Agréés FINMA</h3>
              <p className="text-sm text-gray-600">
                Intermédiaires d&apos;assurance agréés par l&apos;Autorité fédérale de surveillance
                des marchés financiers, conformément à la LSA (art. 40-45).
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-2xl mb-2">📋</div>
              <h3 className="font-bold text-gray-900 mb-1">Certifiés CICERO</h3>
              <p className="text-sm text-gray-600">
                Inscrits au registre ASA de formation continue CICERO, garantissant une mise à jour
                permanente de nos connaissances en assurance maladie.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-bold text-gray-900 mb-1">Spécialistes du Canton de Vaud</h3>
              <p className="text-sm text-gray-600">
                Connaissance approfondie des barèmes OVAM, du calcul du RDU et des spécificités
                vaudoises en matière de subside assurance maladie.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-bold text-gray-900 mb-1">Service 100% gratuit</h3>
              <p className="text-sm text-gray-600">
                Notre accompagnement est entièrement gratuit pour le demandeur. Aucun frais caché,
                aucune commission sur le subside obtenu.
              </p>
            </div>
          </div>

          {/* Ce que nous faisons */}
          <h2>Ce que nous faisons</h2>

          <p>
            Chaque année, des milliers de Vaudois passent à côté de leur subside d&apos;assurance
            maladie, soit par méconnaissance de leurs droits, soit par difficulté face aux démarches
            administratives. Notre service vise à combler ce manque :
          </p>

          <ul>
            <li>
              <strong>Vérification d&apos;éligibilité</strong> — nous analysons votre situation
              (revenus, composition familiale, commune) pour déterminer votre droit au subside.
            </li>
            <li>
              <strong>Calcul du montant</strong> — nous estimons le montant de subside auquel vous
              pouvez prétendre selon les barèmes OVAM 2026.
            </li>
            <li>
              <strong>Accompagnement dans la demande</strong> — nous vous guidons dans la constitution
              de votre dossier et les démarches auprès de l&apos;OVAM.
            </li>
            <li>
              <strong>Optimisation de la prime</strong> — si vous le souhaitez, nous pouvons également
              analyser votre contrat d&apos;assurance maladie pour identifier des économies potentielles.
            </li>
          </ul>

          {/* Nos engagements */}
          <h2>Nos engagements</h2>

          <div className="not-prose bg-gray-50 rounded-xl p-6 border border-gray-200 my-6">
            <div className="space-y-4">
              {[
                { icon: '✅', text: 'Réponse personnalisée sous 24 heures' },
                { icon: '✅', text: 'Données protégées et strictement confidentielles' },
                { icon: '✅', text: 'Conseils basés sur les barèmes officiels de l\'OVAM' },
                { icon: '✅', text: 'Aucune obligation — vous restez libre de vos choix' },
                { icon: '✅', text: 'Service gratuit, sans frais cachés' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <h2>Mention importante</h2>

          <div className="not-prose bg-amber-50 rounded-xl p-5 border border-amber-200 my-6">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>VD-Subside est une entité privée indépendante.</strong> Nous ne sommes ni
              affiliés ni mandatés par le Canton de Vaud, l&apos;OVAM (Office Vaudois de l&apos;Assurance
              Maladie) ou toute autre autorité publique. Notre service d&apos;accompagnement est proposé
              à titre privé et gratuit. Les informations publiées sur ce site sont fournies à titre
              indicatif et ne se substituent pas aux communications officielles de l&apos;OVAM.
            </p>
          </div>

          {/* CTA */}
          <div className="not-prose bg-green-600 rounded-2xl p-8 text-center my-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Vérifiez votre éligibilité au subside
            </h3>
            <p className="text-green-100 mb-6">
              Réponse personnalisée sous 24h — 100% gratuit
            </p>
            <Link
              href="/demande"
              className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors"
            >
              Faire ma demande
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
