import type { Metadata } from 'next';
import CampaignForm from './CampaignForm';

export const metadata: Metadata = {
  title: 'Votre Subside Assurance Maladie 2026 — Vérifiez votre éligibilité',
  description: 'Vérifiez en 30 secondes si vous avez droit au subside assurance maladie dans le Canton de Vaud. Accompagnement gratuit, réponse sous 24h.',
  robots: { index: false, follow: false },
};

export default function CampaignPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Top bar */}
      <div className="bg-green-700 text-white text-center py-2.5 px-4 text-sm font-medium">
        Places limitées — Accompagnement gratuit pour votre demande de subside 2026
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3">
            <div className="bg-green-600 text-white font-black text-xl w-11 h-11 rounded-xl flex items-center justify-center">
              VD
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg leading-tight">VD-Subside</div>
              <div className="text-xs text-green-600 font-medium">Canton de Vaud</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Content */}
          <div className="lg:pt-4">
            <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Subside 2026 — Canton de Vaud
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-tight mb-5">
              Vous payez trop cher<br />
              <span className="text-green-600">votre assurance maladie ?</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Chaque année, des milliers de Vaudois passent à côté de leur subside.
              Vérifiez votre éligibilité en 30 secondes et laissez-nous nous occuper de votre dossier.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-green-600">8 400</div>
                <div className="text-xs text-gray-500 mt-1">CHF/an d'économie max.</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-green-600">24h</div>
                <div className="text-xs text-gray-500 mt-1">Réponse garantie</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-green-600">0.-</div>
                <div className="text-xs text-gray-500 mt-1">Service gratuit</div>
              </div>
            </div>

            {/* Social proof */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 mt-0.5 shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Le saviez-vous ?</strong> En 2026, les barèmes ont été revus à la hausse.
                    Même si votre demande a été refusée par le passé, vous pourriez désormais y avoir droit.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Données sécurisées
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Agréé FINMA
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                +500 Vaudois accompagnés
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-green-600 px-6 py-5 text-center">
                <h2 className="text-xl font-bold text-white">
                  Vérifiez votre éligibilité
                </h2>
                <p className="text-green-100 text-sm mt-1">
                  Réponse personnalisée sous 24h — 100% gratuit
                </p>
              </div>
              <div className="p-6 md:p-8">
                <CampaignForm />
              </div>
            </div>

            {/* Micro-testimonial */}
            <div className="mt-5 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-green-600 text-white font-bold text-sm w-9 h-9 rounded-full flex items-center justify-center shrink-0">
                  ML
                </div>
                <div>
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    &quot;Je ne pensais pas y avoir droit. Grâce à VD-Subside, j'économise 320 CHF par mois sur ma prime.&quot;
                  </p>
                  <p className="text-xs text-gray-400 mt-1.5 font-medium">Marie L. — Nyon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: How it works */}
        <div className="mt-16 mb-8">
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-10">Comment ça marche ?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-700 font-extrabold text-xl rounded-2xl mb-4">
                1
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Remplissez le formulaire</h4>
              <p className="text-sm text-gray-500">30 secondes suffisent. Aucun document requis à ce stade.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-700 font-extrabold text-xl rounded-2xl mb-4">
                2
              </div>
              <h4 className="font-bold text-gray-900 mb-2">On analyse votre dossier</h4>
              <p className="text-sm text-gray-500">Notre expert vérifie votre éligibilité et calcule votre subside potentiel.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-700 font-extrabold text-xl rounded-2xl mb-4">
                3
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Vous économisez</h4>
              <p className="text-sm text-gray-500">On s'occupe de tout. Vous recevez votre subside, sans stress.</p>
            </div>
          </div>
        </div>

        {/* Footer minimal */}
        <div className="border-t border-gray-200 pt-6 mt-8 text-center text-xs text-gray-400">
          <p>VD-Subside — Intermédiaire d'assurance agréé FINMA (LSA, art. 40-45)</p>
          <p className="mt-1">Canton de Vaud, Suisse</p>
        </div>
      </div>
    </main>
  );
}
