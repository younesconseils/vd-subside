export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bénéficiez d'un accompagnement personnalisé
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre équipe vous aide gratuitement à constituer votre dossier et maximiser vos chances d'obtenir votre subside d'assurance maladie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#formulaire"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-md transition-colors shadow-md"
              >
                Demande de subside
              </a>

              <a
                href="tel:+41215551234"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-4 px-8 rounded-md hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                021 555 12 34
              </a>
            </div>

            {/* Value props */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900 mb-1">Réponse sous 24h</div>
                <div className="text-sm text-gray-600">Contact rapide garanti</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900 mb-1">100% sécurisé</div>
                <div className="text-sm text-gray-600">Données protégées</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900 mb-1">Service gratuit</div>
                <div className="text-sm text-gray-600">Sans frais cachés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
