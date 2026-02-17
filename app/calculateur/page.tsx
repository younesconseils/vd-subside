import type { Metadata } from 'next';
import Calculator from '@/components/Calculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculateur de Subside Assurance Maladie Vaud | Calcul Gratuit',
  description: 'Calculez gratuitement votre subside d\'assurance maladie dans le canton de Vaud. Résultat instantané en 3 minutes. Outil officiel et fiable.',
  keywords: ['calculateur subside vaud', 'calcul subside assurance maladie', 'simulateur subside lamal', 'calcul aide assurance vaud'],
};

export default function CalculateurPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Bouton retour accueil */}
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

      <div className="bg-green-600 text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Calculateur de Subside
          </h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto">
            Découvrez en quelques minutes si vous avez droit à un subside et estimez son montant
          </p>
        </div>
      </div>

      <Calculator />

      {/* Additional SEO content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comment fonctionne le calculateur de subside ?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Notre <strong>calculateur de subside d'assurance maladie</strong> pour le canton de Vaud fournit une estimation indicative
              basée sur la règle des 10% du RDU. L'outil prend en compte les critères principaux :
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Votre revenu déterminant unifié (RDU)</li>
              <li>La composition de votre ménage</li>
              <li>Votre commune de résidence dans le canton de Vaud</li>
              <li>L'âge des membres de votre famille</li>
              <li>Votre situation familiale</li>
            </ul>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-3">⚠️ Important : Estimation indicative</h4>
              <p className="text-sm text-gray-700">
                Ce calculateur fournit une estimation approximative. Le calcul réel du subside est effectué par l'OVAM
                (Office vaudois de l'assurance maladie) et dépend de nombreux facteurs : RDU exact calculé sur la base fiscale,
                fortune (avec seuils de CHF 59'000 ou CHF 118'000), déductions selon la composition du ménage, et prime de référence
                selon votre région et âge.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Principe du calcul du subside 2025
            </h3>

            <p>
              L'objectif du système de subside vaudois est de <strong>limiter la charge des primes à 10% du RDU</strong>.
              Le calcul tient compte de déductions forfaitaires :
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Déduction pour les primes :</strong> CHF 2'200 (1 adulte), CHF 4'400 (2 adultes), CHF 1'300 par enfant</li>
              <li><strong>Déduction par enfant à charge :</strong> CHF 6'000 (1er enfant), CHF 13'000 (2 enfants), +CHF 7'000 par enfant supplémentaire</li>
              <li><strong>Fortune :</strong> 6.7% (1/15) du montant dépassant CHF 59'000 (personne seule) ou CHF 118'000 (couple)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Pourquoi utiliser notre calculateur ?
            </h3>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-600 mb-2">✓ Estimation rapide</h4>
                <p className="text-sm">Basé sur la règle des 10% du RDU</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-600 mb-2">✓ Résultat instantané</h4>
                <p className="text-sm">Obtenez votre estimation en moins de 3 minutes</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-600 mb-2">✓ 100% gratuit</h4>
                <p className="text-sm">Aucun frais, aucune inscription requise</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-600 mb-2">✓ Totalement confidentiel</h4>
                <p className="text-sm">Vos données sont sécurisées et non partagées</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
