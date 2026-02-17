import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guides } from '@/data/guides';
import ContactForm from '@/components/ContactForm';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const guide = guides.find((g) => g.slug === resolvedParams.slug);

  if (!guide) {
    return { title: 'Guide non trouvé' };
  }

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: 'article',
      locale: 'fr_CH',
      url: `https://vd-subside.ch/guide/${guide.slug}`,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const guide = guides.find((g) => g.slug === resolvedParams.slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = guide.relatedSlugs
    .map((slug) => guides.find((g) => g.slug === slug))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Bouton Accueil */}
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

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 pt-24 pb-4">
        <div className="container-custom">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-green-600 transition-colors">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/guide" className="hover:text-green-600 transition-colors">Guides</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900 font-medium">{guide.h1.substring(0, 50)}...</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-6">{guide.icon}</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {guide.h1}
            </h1>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed mb-8">
              {guide.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#formulaire"
                className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Faire ma demande
              </a>
              <Link
                href="/en-savoir-plus"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Indicateurs de confiance */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <span className="text-sm text-gray-700 font-medium">Données officielles OVAM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <span className="text-sm text-gray-700 font-medium">Mis à jour 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <span className="text-sm text-gray-700 font-medium">Accompagnement gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <span className="text-sm text-gray-700 font-medium">Réponse sous 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <article className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {guide.sections.map((section, index) => (
              <section key={index} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-start gap-3">
                  <span className="bg-green-100 text-green-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div
                  className="text-gray-700 leading-relaxed text-lg mb-6"
                  dangerouslySetInnerHTML={{
                    __html: section.content.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-green-700 font-bold">$1</strong>'
                    ),
                  }}
                />
                {section.liste && (
                  <ul className="space-y-3">
                    {section.liste.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span
                          className="text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: item.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-green-700 font-bold">$1</strong>'
                            ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Source officielle */}
          <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
            <p className="text-sm text-blue-900">
              <strong className="font-bold">📌 Sources officielles :</strong> Informations basées sur les données de l&apos;
              <a
                href="https://www.vd.ch/sante-soins-et-handicap/assurance-maladie/subside-a-lassurance-maladie"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-700"
              >
                Office Vaudois de l&apos;Assurance-Maladie (OVAM)
              </a>
              {' '}et l&apos;
              <a
                href="https://www.vd.ch/fileadmin/user_upload/themes/social/Prestations__assurance_et_soutien/Assurance_maladie/Subside/Arr%C3%AAt%C3%A9_subsides_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-700"
              >
                arrêté subsides 2026
              </a>.
            </p>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {guide.faq.map((item, index) => (
              <details
                key={index}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-green-300 transition-all group"
              >
                <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between gap-4">
                  <span className="flex items-start gap-3">
                    <span className="text-green-600 flex-shrink-0">❓</span>
                    {item.question}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-9">
                  {item.reponse}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire ou CTA vers /assurance */}
      {guide.ctaLink ? (
        <section id="formulaire" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {guide.cta}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Un conseiller agréé <strong>FINMA</strong> et certifié <strong>CICERO</strong> analyse votre situation et vous propose la meilleure offre. 100% gratuit et sans engagement.
            </p>
            <Link
              href={guide.ctaLink}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 text-lg"
            >
              Demander un conseil gratuit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="text-2xl mb-1">🏛️</div>
                <div className="text-xs text-gray-600 font-medium">Agréé FINMA</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="text-2xl mb-1">💰</div>
                <div className="text-xs text-gray-600 font-medium">100% gratuit</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="text-2xl mb-1">🤝</div>
                <div className="text-xs text-gray-600 font-medium">Sans engagement</div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="formulaire" className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {guide.cta}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Remplissez le formulaire ci-dessous. Notre équipe vous contactera sous 24h pour vous accompagner <strong>gratuitement</strong> dans votre demande de subside.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-2xl opacity-15"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-200">
                <ContactForm source={`guide/${guide.slug}`} />
              </div>
            </div>

            {/* Réassurance sous formulaire */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="text-2xl mb-1">🔒</div>
                <div className="text-xs text-gray-600 font-medium">Données sécurisées</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="text-2xl mb-1">⏱️</div>
                <div className="text-xs text-gray-600 font-medium">Réponse 24h</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="text-2xl mb-1">💚</div>
                <div className="text-xs text-gray-600 font-medium">100% gratuit</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Guides liés */}
      {relatedGuides.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Guides recommandés
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedGuides.map((related) => related && (
                <Link
                  key={related.slug}
                  href={`/guide/${related.slug}`}
                  className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-green-400 hover:shadow-lg transition-all group"
                >
                  <div className="text-3xl mb-3">{related.icon}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                    {related.h1.substring(0, 60)}...
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{related.metaDescription}</p>
                  <span className="inline-flex items-center gap-1 text-green-600 font-medium text-sm mt-3">
                    Lire le guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d&apos;aide pour votre subside ?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Notre équipe vous accompagne gratuitement dans toutes vos démarches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demande"
              className="bg-white text-green-600 font-bold py-4 px-10 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg inline-block"
            >
              Faire ma demande
            </Link>
            <Link
              href="/en-savoir-plus"
              className="bg-green-700 text-white font-bold py-4 px-10 rounded-xl hover:bg-green-800 transition-all duration-300 shadow-lg inline-block border-2 border-white"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
