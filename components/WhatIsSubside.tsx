export default function WhatIsSubside() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Titre principal */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                Guide complet
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Qu'est-ce qu'un subside d'assurance maladie ?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tout ce que vous devez savoir sur les subsides dans le Canton de Vaud
            </p>
          </div>

          {/* Contenu éducatif */}
          <div className="space-y-12">
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Définition officielle
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Le <strong className="text-blue-700">subside d'assurance maladie</strong> est une aide financière octroyée par le Canton de Vaud pour réduire le coût de votre prime d'assurance-maladie obligatoire (LAMal). Cette aide est calculée en fonction de votre revenu, de votre fortune et de la composition de votre ménage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Objectif du subside
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                L'objectif principal du système de subsides est de <strong>limiter la charge des primes d'assurance-maladie à 10% maximum du revenu déterminant</strong> de votre ménage. Cela garantit que personne ne soit contraint de payer une part disproportionnée de ses revenus pour son assurance santé obligatoire.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Comment fonctionne le subside ?
              </h3>
              <div className="bg-white border border-gray-200 p-8 rounded-xl">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1 font-semibold">
                      1
                    </div>
                    <div className="flex-1">
                      <strong className="text-gray-900 text-lg">Calcul automatique</strong>
                      <p className="text-gray-600 mt-1 leading-relaxed">Le Canton calcule votre droit au subside en fonction de votre dernière taxation fiscale entrée en force.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1 font-semibold">
                      2
                    </div>
                    <div className="flex-1">
                      <strong className="text-gray-900 text-lg">Versement direct</strong>
                      <p className="text-gray-600 mt-1 leading-relaxed">Le subside est versé directement à votre caisse maladie chaque mois, vous ne payez que le solde restant.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1 font-semibold">
                      3
                    </div>
                    <div className="flex-1">
                      <strong className="text-gray-900 text-lg">Renouvellement automatique</strong>
                      <p className="text-gray-600 mt-1 leading-relaxed">Si votre situation ne change pas, le subside est renouvelé automatiquement chaque année.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Types de subsides dans le Canton de Vaud
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Subside ordinaire
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Accordé aux ménages dont le revenu déterminant unifié (RDU) ne dépasse pas certains seuils fixés annuellement par le Canton.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <p className="text-gray-700 text-sm"><strong>Exemple :</strong> Pour une personne seule, seuil d'environ 35'000 CHF/an</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Subside complémentaire
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Attribué aux ménages dont la charge des primes représente encore plus de 10% du revenu après le subside ordinaire.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <p className="text-gray-700 text-sm"><strong>But :</strong> Garantir la limite des 10% pour tous</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Qu'est-ce que le Revenu Déterminant Unifié (RDU) ?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le <strong>RDU (Revenu Déterminant Unifié)</strong> est un montant calculé à partir de votre revenu net imposable et de votre fortune, selon les dispositions de la loi sur l'harmonisation et la coordination de prestations sociales cantonales (LHPS).
              </p>

              <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Éléments pris en compte dans le RDU :
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Revenu net selon la dernière taxation fiscale définitive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Fortune mobilière et immobilière</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Cotisations au 2ème pilier (déductions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Frais de garde d'enfants (déductions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Pensions alimentaires versées (déductions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Pensions alimentaires reçues (ajouts)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Montants indicatifs des subsides
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Composition du ménage
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Subside moyen/mois
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Économie annuelle
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b">
                      <td className="px-6 py-4 text-gray-700">Adulte seul</td>
                      <td className="px-6 py-4 text-gray-700">250 - 400 CHF</td>
                      <td className="px-6 py-4 font-semibold text-blue-600">3'000 - 4'800 CHF</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">Couple sans enfant</td>
                      <td className="px-6 py-4 text-gray-700">400 - 600 CHF</td>
                      <td className="px-6 py-4 font-semibold text-blue-600">4'800 - 7'200 CHF</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-gray-700">Famille avec 1 enfant</td>
                      <td className="px-6 py-4 text-gray-700">450 - 700 CHF</td>
                      <td className="px-6 py-4 font-semibold text-blue-600">5'400 - 8'400 CHF</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Famille avec 2+ enfants</td>
                      <td className="px-6 py-4 text-gray-700">550 - 850 CHF</td>
                      <td className="px-6 py-4 font-semibold text-blue-600">6'600 - 10'200 CHF</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                Important à savoir
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Le subside ne couvre <strong>QUE l'assurance de base obligatoire</strong> (LAMal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Les assurances complémentaires ne sont <strong>PAS</strong> subventionnées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Le montant varie selon votre région de domicile dans le Canton</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Vous devez annoncer tout changement de situation (revenus +20%, déménagement, etc.)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Délais et versement
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Prise d'effet du droit
                  </h4>
                  <p className="text-gray-700">
                    Le droit au subside prend effet le <strong>1er jour du 2ème mois</strong> suivant votre demande.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Exemple : Demande déposée le 20 mai → Subside dès le 1er juillet
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Modalités de versement
                  </h4>
                  <p className="text-gray-700">
                    Le subside est versé <strong>mensuellement et directement</strong> à votre caisse maladie par l'OVAM.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Vous payez uniquement la différence entre la prime totale et le subside
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
