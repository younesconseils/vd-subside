import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { situations } from '@/data/situations';
import ContactForm from '@/components/ContactForm';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Générer les pages statiques pour toutes les situations
export async function generateStaticParams() {
  return situations.map((situation) => ({
    slug: situation.slug,
  }));
}

// Générer les métadonnées SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const situation = situations.find((s) => s.slug === resolvedParams.slug);

  if (!situation) {
    return {
      title: 'Situation non trouvée',
    };
  }

  return {
    title: situation.metaTitle,
    description: situation.metaDescription,
    openGraph: {
      title: situation.metaTitle,
      description: situation.metaDescription,
      type: 'website',
      locale: 'fr_CH',
      url: `https://vd-subside.ch/situation/${situation.slug}`,
    },
  };
}

export default async function SituationPage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const situation = situations.find((s) => s.slug === resolvedParams.slug);

  if (!situation) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Bouton Accueil */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-50 transition-all duration-300 hover:shadow-xl inline-flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Accueil
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{situation.icon}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {situation.h1}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              {situation.introduction}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#demande"
                className="btn-primary bg-white text-green-600 hover:bg-green-50 font-bold shadow-xl inline-block text-center"
              >
                {situation.cta}
              </Link>
              <Link
                href="#eligibilite"
                className="bg-white text-green-600 border-2 border-white font-bold py-4 px-10 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg inline-block text-center"
              >
                Conditions d'éligibilité
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Éligibilité */}
      <section id="eligibilite" className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {situation.eligibilite.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            {situation.eligibilite.description}
          </p>
          <div className="grid gap-4">
            {situation.eligibilite.criteres.map((critere, index) => (
              <div
                key={index}
                className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg"
              >
                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: critere.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-green-700 font-bold">$1</strong>'
                    ),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Montants */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {situation.montants.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            {situation.montants.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {situation.montants.details.map((detail, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100 hover:border-green-300 transition-all"
              >
                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: detail.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-green-700 font-bold">$1</strong>'
                    ),
                  }}
                />
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
            <p className="text-sm text-blue-900">
              <strong className="font-bold">📌 Source officielle :</strong> Montants
              2026 selon l'
              <a
                href="https://www.vd.ch/sante-soins-et-handicap/assurance-maladie/subside-a-lassurance-maladie"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-700"
              >
                Office Vaudois de l'Assurance-Maladie (OVAM)
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Section Documents */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {situation.documents.title}
          </h2>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
            <ul className="space-y-4">
              {situation.documents.liste.map((doc, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: doc.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-green-700 font-bold">$1</strong>'
                      ),
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {situation.process.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {situation.process.etapes.map((etape) => (
              <div
                key={etape.numero}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-green-100 hover:border-green-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {etape.numero}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {etape.titre}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {etape.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {situation.faq.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-green-600 flex-shrink-0">❓</span>
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-9">
                  {item.reponse}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formulaire */}
      <section id="demande" className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {situation.cta}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous. Notre équipe vous contactera par
              téléphone dans les 24 heures pour vous accompagner dans votre demande
              de subside.
            </p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
            <ContactForm source={`/situation/${situation.slug}`} />
          </div>
        </div>
      </section>

      {/* CTA Contact Direct */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'aide pour votre demande ?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Notre équipe d'experts est là pour vous accompagner gratuitement dans vos
            démarches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+41123456789"
              className="bg-white text-green-600 font-bold py-4 px-10 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg inline-block"
            >
              📞 Appeler maintenant
            </a>
            <a
              href="mailto:info@vd-subside.ch"
              className="bg-green-700 text-white font-bold py-4 px-10 rounded-xl hover:bg-green-800 transition-all duration-300 shadow-lg inline-block border-2 border-white"
            >
              ✉️ Envoyer un email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
