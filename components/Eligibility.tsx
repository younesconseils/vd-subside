export default function Eligibility() {
  return (
    <section id="eligibilite" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Titre principal */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-800 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Critères d'admission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Conditions d'éligibilité au subside
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Qui a droit au subside d'assurance maladie dans le Canton de Vaud ?
            </p>
          </div>

          {/* Contenu */}
          <div className="space-y-10">
            {/* Conditions générales */}
            <div className="bg-white rounded-xl border border-gray-200 p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Conditions générales d'octroi
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                      1. Domicile dans le Canton de Vaud
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Vous devez être domicilié dans le Canton de Vaud de manière permanente. Les frontaliers et les personnes en séjour temporaire ne sont généralement pas éligibles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                      2. Assurance maladie obligatoire valide
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Vous devez être affilié à une caisse maladie reconnue en Suisse pour l'assurance de base obligatoire (LAMal). Le subside ne couvre pas les assurances complémentaires.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                      3. Revenu Déterminant Unifié (RDU) sous les seuils
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Votre RDU ne doit pas dépasser les limites fixées annuellement par le Canton. Ces limites varient selon la composition de votre ménage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calcul du RDU et éligibilité */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Comment est calculé le Revenu Déterminant Unifié (RDU) ?
              </h3>

              <div className="bg-green-50 border border-green-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Objectif du subside :</strong> Limiter la charge des primes d'assurance-maladie à <strong>10% de votre RDU</strong>. Le montant du subside dépend de votre situation familiale et financière.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                    Déductions forfaitaires pour primes d'assurance-maladie
                  </h4>
                  <div className="ml-10 space-y-2 text-gray-700">
                    <p>• Ménage d'un adulte : <strong>CHF 2'200</strong></p>
                    <p>• Ménage de deux adultes : <strong>CHF 4'400</strong></p>
                    <p>• Par enfant à charge mineur ou majeur : <strong>CHF 1'300</strong></p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    Déductions selon le nombre d'enfants à charge
                  </h4>
                  <div className="ml-10 space-y-2 text-gray-700">
                    <p>• 1 enfant : <strong>CHF 6'000</strong></p>
                    <p>• 2 enfants : <strong>CHF 13'000</strong></p>
                    <p>• Chaque enfant supplémentaire : <strong>+ CHF 7'000</strong></p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    Prise en compte de la fortune
                  </h4>
                  <div className="ml-10 space-y-2 text-gray-700">
                    <p>Un supplément de <strong>1/15 (6,7%)</strong> de la fortune est ajouté au RDU pour :</p>
                    <p>• Fortune dépassant <strong>CHF 59'000</strong> (personne seule ou famille monoparentale)</p>
                    <p>• Fortune dépassant <strong>CHF 118'000</strong> (couple avec ou sans enfants)</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Important :</strong> Le calcul exact du RDU prend en compte votre déclaration fiscale la plus récente. Pour une estimation personnalisée, utilisez notre formulaire de demande.
                </p>
              </div>
            </div>

            {/* Cas particuliers */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Cas particuliers et situations spécifiques
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-6 py-2">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Bénéficiaires du revenu d'insertion (RI)
                  </h4>
                  <p className="text-gray-700">
                    Les bénéficiaires du RI ont automatiquement droit au subside maximum. La demande est traitée en priorité et le droit prend effet immédiatement (pas de délai de 2 mois).
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6 py-2">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Bénéficiaires de prestations complémentaires (PC AVS/AI)
                  </h4>
                  <p className="text-gray-700">
                    Les personnes touchant des PC bénéficient également du droit immédiat au subside maximum, calculé selon des barèmes spécifiques.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6 py-2">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Étudiants majeurs (18-25 ans)
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Les jeunes adultes en formation peuvent faire une demande individuelle s'ils remplissent les conditions suivantes :
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Ne vivent plus chez leurs parents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Sont financièrement indépendants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Fournissent une attestation de formation</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-600 pl-6 py-2">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Personnes au chômage
                  </h4>
                  <p className="text-gray-700">
                    Les indemnités de chômage sont comptabilisées dans le RDU. Si vos revenus ont baissé de plus de 20% suite à une perte d'emploi, vous pouvez demander une réévaluation de votre droit.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6 py-2">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Frontaliers et permis de travail
                  </h4>
                  <p className="text-gray-700">
                    Les frontaliers travaillant en Suisse mais domiciliés à l'étranger ne sont généralement pas éligibles. Les personnes avec permis B ou C domiciliées dans le Canton peuvent faire une demande.
                  </p>
                </div>
              </div>
            </div>

            {/* Situations qui affectent l'éligibilité */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Situations qui affectent votre éligibilité
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Augmentent vos chances
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Famille nombreuse (3+ enfants)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Parent seul avec enfants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Revenus modestes stables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Frais de garde élevés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Formation professionnelle</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Réduisent l'éligibilité
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Fortune importante (&gt;100&apos;000 CHF)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Revenus élevés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Propriété immobilière de valeur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Augmentation salariale +20%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Héritage récent</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-green-600 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Êtes-vous éligible ?
              </h3>
              <p className="text-green-100 mb-6 text-lg">
                Remplissez notre formulaire pour une évaluation personnalisée de votre droit au subside
              </p>
              <a
                href="#formulaire"
                className="inline-block bg-white text-green-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Vérifier mon éligibilité
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
