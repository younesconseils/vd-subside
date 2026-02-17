'use client';

import { useState } from 'react';

export default function Calculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    revenue: '',
    householdSize: '1',
    age: '',
    hasChildren: 'no',
    city: '',
  });
  const [result, setResult] = useState<number | null>(null);

  const calculateSubside = () => {
    /**
     * AVERTISSEMENT : Ce calculateur fournit une ESTIMATION indicative.
     * Le calcul réel du subside est complexe et dépend de nombreux facteurs :
     * - Revenu Déterminant Unifié (RDU) calculé sur la base fiscale
     * - Fortune (avec seuils de CHF 59'000 ou CHF 118'000)
     * - Déductions selon composition du ménage
     * - Prime de référence selon la région et l'âge
     *
     * Pour un calcul précis, contactez l'OVAM ou utilisez leur calculateur officiel.
     */

    const revenue = parseInt(formData.revenue);
    const size = parseInt(formData.householdSize);

    // L'objectif du subside est de limiter la charge à 10% du RDU
    // Estimation très approximative (ne tient pas compte de tous les paramètres)

    // Estimation de la prime moyenne par personne dans le canton de Vaud (2026)
    const avgPremium = 400; // CHF/mois environ
    const yearlyPremium = avgPremium * 12 * size;

    // Calcul du plafond de charge (10% du revenu)
    const maxCharge = revenue * 0.10;

    // Si la prime dépasse 10% du revenu, le subside compense la différence
    const potentialSubside = Math.max(0, yearlyPremium - maxCharge);

    // Limite de subside maximum (plafond réaliste)
    const maxSubside = size * 5000; // environ CHF 5000 max par personne

    const finalSubside = Math.min(potentialSubside, maxSubside);

    // Si le résultat est très bas (< 500 CHF/an), considérer non éligible
    if (finalSubside < 500) {
      setResult(0);
    } else {
      setResult(Math.round(finalSubside));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      calculateSubside();
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <section id="calculateur" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculateur de subside instantané
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Répondez à quelques questions pour connaître le montant exact de votre subside
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {result === null ? (
            <div className="card">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`flex-1 text-center ${s <= step ? 'text-green-600 font-semibold' : 'text-gray-400'}`}>
                      Étape {s}/3
                    </div>
                  ))}
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-600 transition-all duration-500"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Informations de base</h3>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Revenu annuel brut du ménage (CHF)
                      </label>
                      <input
                        type="number"
                        value={formData.revenue}
                        onChange={(e) => updateFormData('revenue', e.target.value)}
                        placeholder="Ex: 45000"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all"
                        required
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        💡 Incluez tous les revenus du ménage (salaires, rentes, etc.)
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre de personnes dans le ménage
                      </label>
                      <select
                        value={formData.householdSize}
                        onChange={(e) => updateFormData('householdSize', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all"
                      >
                        <option value="1">1 personne</option>
                        <option value="2">2 personnes</option>
                        <option value="3">3 personnes</option>
                        <option value="4">4 personnes</option>
                        <option value="5">5 personnes ou plus</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Situation personnelle</h3>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Votre âge
                      </label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => updateFormData('age', e.target.value)}
                        placeholder="Ex: 35"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Avez-vous des enfants à charge ?
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => updateFormData('hasChildren', 'yes')}
                          className={`py-3 px-6 rounded-lg border-2 font-semibold transition-all ${
                            formData.hasChildren === 'yes'
                              ? 'border-green-600 bg-green-600 text-white'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-green-600'
                          }`}
                        >
                          Oui
                        </button>
                        <button
                          type="button"
                          onClick={() => updateFormData('hasChildren', 'no')}
                          className={`py-3 px-6 rounded-lg border-2 font-semibold transition-all ${
                            formData.hasChildren === 'no'
                              ? 'border-green-600 bg-green-600 text-white'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-green-600'
                          }`}
                        >
                          Non
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Localisation</h3>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Votre commune dans le canton de Vaud
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => updateFormData('city', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all"
                        required
                      >
                        <option value="">Sélectionnez votre commune</option>
                        <option value="lausanne">Lausanne</option>
                        <option value="montreux">Montreux</option>
                        <option value="vevey">Vevey</option>
                        <option value="yverdon">Yverdon-les-Bains</option>
                        <option value="nyon">Nyon</option>
                        <option value="morges">Morges</option>
                        <option value="renens">Renens</option>
                        <option value="pully">Pully</option>
                        <option value="prilly">Prilly</option>
                        <option value="ecublens">Écublens</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-6">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="flex-1 btn-secondary"
                    >
                      Retour
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex-1 btn-primary"
                  >
                    {step < 3 ? 'Continuer' : 'Calculer mon subside'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="card text-center">
              {result > 0 ? (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Félicitations ! 🎉
                    </h3>
                    <p className="text-xl text-gray-600">
                      Vous êtes éligible à un subside d'environ
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-xl p-8 mb-6">
                    <div className="text-sm opacity-75 mb-3">Estimation indicative</div>
                    <div className="text-5xl md:text-6xl font-bold mb-2">
                      {result.toLocaleString('fr-CH')} CHF
                    </div>
                    <div className="text-xl opacity-90">
                      par an
                    </div>
                    <div className="mt-4 text-lg opacity-80">
                      Soit environ {Math.round(result / 12)} CHF par mois
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 text-left">
                    <p className="text-sm text-gray-700">
                      <strong>⚠️ Important :</strong> Ce montant est une estimation indicative. Le calcul réel du subside dépend de nombreux facteurs (RDU exact, fortune, déductions fiscales, etc.). Seul l'OVAM peut calculer le montant définitif.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a href="/demande" className="block w-full btn-primary">
                      Faire ma demande maintenant
                    </a>
                    <button
                      onClick={() => { setResult(null); setStep(1); }}
                      className="block w-full btn-secondary"
                    >
                      Calculer à nouveau
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Non éligible actuellement
                    </h3>
                    <p className="text-lg text-gray-600">
                      Selon vos revenus actuels, vous ne semblez pas éligible au subside.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 text-left">
                    <h4 className="font-semibold text-gray-900 mb-3">💡 Bon à savoir :</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Votre situation peut changer (baisse de revenus, augmentation de famille)</li>
                      <li>• Les barèmes sont révisés chaque année</li>
                      <li>• Vous pouvez faire une nouvelle demande à tout moment</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => { setResult(null); setStep(1); }}
                    className="block w-full btn-primary"
                  >
                    Calculer à nouveau
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
