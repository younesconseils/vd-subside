'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Qui a droit au subside d\'assurance maladie dans le canton de Vaud ?',
      answer: 'Toute personne domiciliée dans le canton de Vaud dont le revenu déterminant unifié (RDU) ne dépasse pas certaines limites peut bénéficier d\'un subside. Les limites varient selon la composition du ménage. Pour une personne seule, le seuil est d\'environ 35\'000 CHF par an, pour un couple sans enfant environ 52\'000 CHF, et pour une famille avec enfants les seuils augmentent progressivement.'
    },
    {
      question: 'Qu\'est-ce que le Revenu Déterminant Unifié (RDU) ?',
      answer: 'Le RDU est un montant calculé à partir de votre revenu net imposable et de votre fortune. Il prend en compte vos revenus professionnels, vos rentes, votre fortune mobilière et immobilière, ainsi que diverses déductions (cotisations 2ème pilier, frais de garde, pensions alimentaires versées). C\'est ce montant qui détermine votre éligibilité au subside.'
    },
    {
      question: 'Quel est le montant du subside que je peux obtenir ?',
      answer: 'Le montant du subside dépend de vos revenus, de la composition de votre ménage, de votre âge et de votre région de domicile. En moyenne, une personne seule peut recevoir 250-400 CHF par mois (3\'000-4\'800 CHF/an), un couple 400-600 CHF/mois, et une famille avec enfants peut atteindre 550-850 CHF/mois (6\'600-10\'200 CHF/an). Utilisez notre formulaire pour une estimation personnalisée.'
    },
    {
      question: 'Quels documents dois-je fournir pour ma demande de subside ?',
      answer: 'Documents obligatoires : dernière décision de taxation fiscale définitive, pièce d\'identité ou permis de séjour, attestation d\'assurance maladie. Documents complémentaires selon votre situation : attestations de salaire récentes si vos revenus ont changé (+20%), attestation de formation pour étudiants majeurs, justificatifs de fortune, justificatifs de frais de garde d\'enfants.'
    },
    {
      question: 'Combien de temps prend le traitement de ma demande ?',
      answer: 'Le droit au subside prend effet le 1er jour du 2ème mois suivant votre demande (exemple : demande déposée le 20 mai = subside dès le 1er juillet). Le délai de traitement administratif est actuellement de 4 à 8 semaines selon le volume de demandes. Les bénéficiaires du RI ou des PC AVS/AI bénéficient d\'un traitement prioritaire avec effet immédiat.'
    },
    {
      question: 'Comment le subside est-il versé ?',
      answer: 'Le subside est versé mensuellement et directement à votre caisse maladie par l\'Office vaudois de l\'assurance-maladie (OVAM). Vous ne recevez pas l\'argent directement, mais vous payez uniquement la différence entre votre prime totale et le montant du subside. Vous recevrez une facture mensuelle ajustée de votre assureur.'
    },
    {
      question: 'Le subside couvre-t-il les assurances complémentaires ?',
      answer: 'Non, le subside couvre UNIQUEMENT l\'assurance de base obligatoire (LAMal). Les assurances complémentaires (hospitalisation, médecines alternatives, dentaire, etc.) ne sont pas subventionnées par le Canton et restent entièrement à votre charge.'
    },
    {
      question: 'Dois-je refaire une demande chaque année ?',
      answer: 'Non, si votre situation financière et familiale ne change pas significativement, votre subside est automatiquement renouvelé chaque année. Vous recevrez une nouvelle attestation de droit confirmant le montant pour l\'année suivante. Vous devez uniquement signaler les changements importants (revenus +/-20%, déménagement, changement de situation familiale).'
    },
    {
      question: 'Que se passe-t-il si mes revenus changent en cours d\'année ?',
      answer: 'Vous devez annoncer tout changement de revenus de 20% ou plus dans les 30 jours. Si vos revenus diminuent (perte d\'emploi, réduction d\'activité), votre subside peut être augmenté rétroactivement. Si vos revenus augmentent significativement (promotion, nouvel emploi), votre subside peut être réduit ou supprimé. Non-déclaration = risque de devoir rembourser les subsides perçus indûment.'
    },
    {
      question: 'Le subside couvre-t-il aussi l\'assurance des enfants ?',
      answer: 'Oui, le subside peut couvrir toute la famille, y compris les enfants mineurs et les jeunes adultes en formation jusqu\'à 25 ans. Le montant du subside familial tient compte du nombre de personnes dans le ménage. Les enfants majeurs indépendants financièrement peuvent faire une demande séparée.'
    },
    {
      question: 'Puis-je obtenir un subside si je suis au chômage ?',
      answer: 'Oui, les indemnités de chômage sont prises en compte dans le calcul du RDU. Si votre perte d\'emploi a entraîné une baisse de revenus de plus de 20%, vous pouvez demander une réévaluation immédiate de votre droit au subside, sans attendre la prochaine taxation fiscale. Contactez l\'OVAM ou une agence d\'assurances sociales pour actualiser votre dossier.'
    },
    {
      question: 'Les étudiants ont-ils droit au subside ?',
      answer: 'Oui, les étudiants majeurs (18-25 ans) en formation peuvent faire une demande individuelle s\'ils ne vivent plus chez leurs parents et sont financièrement indépendants. Ils doivent fournir une attestation de formation en cours. Les étudiants vivant encore chez leurs parents sont inclus dans la demande familiale.'
    },
    {
      question: 'Puis-je obtenir un subside si je possède un bien immobilier ?',
      answer: 'Oui, la propriété d\'un bien immobilier n\'exclut pas automatiquement le droit au subside. La valeur locative et la fortune immobilière sont prises en compte dans le calcul du RDU. Si votre résidence principale a une valeur modeste et que vos revenus sont bas, vous pouvez quand même être éligible. C\'est l\'ensemble de votre situation qui compte.'
    },
    {
      question: 'Les frontaliers peuvent-ils obtenir un subside ?',
      answer: 'Non, les frontaliers domiciliés en France ou dans un autre pays limitrophe ne sont pas éligibles au subside vaudois, même s\'ils travaillent dans le Canton. Seules les personnes domiciliées de manière permanente dans le Canton de Vaud peuvent bénéficier du subside.'
    },
    {
      question: 'Que faire si ma demande est refusée ?',
      answer: 'Si votre demande est refusée, vous recevrez un courrier avec les motifs du refus. Contactez l\'OVAM au 021 557 45 45 pour comprendre la raison exacte. Vous pouvez ensuite déposer une nouvelle demande avec un dossier corrigé ou des documents actualisés. Notre service vous accompagne gratuitement pour refaire votre demande.'
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-800 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tout ce que vous devez savoir sur les subsides d'assurance maladie dans le canton de Vaud
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'shadow-sm border-2 border-green-500'
                    : 'border border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className={`font-medium pr-8 transition-colors ${
                    openIndex === index ? 'text-green-700' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-green-600 rotate-180'
                      : 'bg-gray-100'
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-colors ${
                        openIndex === index ? 'text-white' : 'text-gray-600'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-[600px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed bg-gray-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center bg-gray-50 border border-gray-200 rounded-xl p-10">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Vous avez d'autres questions ?
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Notre équipe est là pour vous aider gratuitement
              </p>

              {/* Notice - Volume élevé */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900 mb-1">Nombre élevé de demandes</p>
                    <p className="text-gray-700">
                      En raison du volume important de demandes, nous ne sommes actuellement pas disponibles par téléphone.
                      Merci de nous contacter par email ou via le formulaire de demande.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@vd-subside.ch"
                  className="inline-flex items-center justify-center gap-3 bg-green-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@vd-subside.ch
                </a>
                <a
                  href="/demande"
                  className="inline-flex items-center justify-center gap-3 bg-white text-gray-700 font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Formulaire de demande
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org FAQ markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
