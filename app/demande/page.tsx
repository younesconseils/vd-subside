import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Demande de Subside Assurance Maladie Vaud | VD-Subside',
  description: 'Faites votre demande de subside assurance maladie pour le Canton de Vaud. Formulaire sécurisé, accompagnement gratuit, réponse sous 24h.',
  keywords: [
    'demande subside vaud',
    'formulaire subside vaud',
    'demande subside assurance maladie',
    'faire demande subside vaud',
    'dossier subside vaud',
  ],
};

export default function DemandePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-green-600 text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Demande de Subside
          </h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous. Notre équipe vous contactera dans les 24 heures.
          </p>
        </div>
      </div>

      {/* Trust indicators */}
      <section className="section-padding bg-white border-b">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Gratuit</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">Réponse rapide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Taux d'acceptation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">🔒</div>
              <div className="text-sm text-gray-600">100% sécurisé</div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Formulaire de demande
              </h2>
              <p className="text-gray-600">
                Remplissez tous les champs ci-dessous. Nos experts analyseront votre situation et vous contacteront rapidement pour vous accompagner dans votre demande de subside.
              </p>
            </div>

            <ContactForm source="page-demande" />
          </div>

          {/* Informations complémentaires */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">✅ Après votre demande</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Réception confirmée par email</li>
                <li>• Analyse de votre dossier (24h)</li>
                <li>• Contact par téléphone ou email</li>
                <li>• Accompagnement jusqu'à l'obtention</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">📋 Documents à préparer</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Dernière déclaration d'impôt</li>
                <li>• Attestations de salaire</li>
                <li>• Polices d'assurance maladie</li>
                <li>• Permis de séjour (si étranger)</li>
              </ul>
            </div>
          </div>

          {/* FAQ rapide */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h3>

            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-xl p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Combien de temps prend le traitement de ma demande ?
                </summary>
                <p className="mt-3 text-gray-600 text-sm">
                  Notre équipe vous contacte sous 24h. Le traitement complet par l'OVAM prend généralement 4-6 semaines une fois le dossier complet déposé.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Le service est-il vraiment gratuit ?
                </summary>
                <p className="mt-3 text-gray-600 text-sm">
                  Oui, notre accompagnement est 100% gratuit. Aucun frais caché, aucun engagement. Nous vous aidons à constituer votre dossier sans contrepartie.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Mes données sont-elles sécurisées ?
                </summary>
                <p className="mt-3 text-gray-600 text-sm">
                  Absolument. Vos données sont chiffrées (SSL), stockées de manière sécurisée et ne sont jamais partagées avec des tiers. Nous respectons strictement la législation suisse sur la protection des données.
                </p>
              </details>
            </div>
          </div>

          {/* Retour accueil */}
          <div className="mt-12 text-center">
            <Link href="/" className="text-green-600 hover:text-green-700 font-semibold">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
