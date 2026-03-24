import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Subside Assurance Maladie Vaud | OVAM, Téléphone, Email',
  description: 'Contact subside assurance maladie Vaud : téléphone, email, formulaire. Réponse sous 24h. Contact OVAM (021 557 47 47) et accompagnement gratuit pour votre demande de subside dans le Canton de Vaud.',
  keywords: [
    'subside assurance maladie vaud contact',
    'contact subside vaud',
    'contacter OVAM',
    'OVAM telephone',
    'OVAM formulaire de contact',
    'aide subside vaud',
    'téléphone subside vaud',
    'office vaudois assurance maladie contact',
  ],
  alternates: {
    canonical: 'https://vd-subside.ch/nous-contacter',
  },
};

export default function NousContacterPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar spacer */}
      <div className="h-20"></div>

      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-12 md:py-16">
          <nav className="mb-6 text-sm text-gray-500">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-green-700 transition-colors">Accueil</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Nous contacter</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Contact Subside Assurance Maladie Vaud
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Une question sur le subside assurance maladie dans le Canton de Vaud ? Contactez notre équipe ou l'OVAM. Réponse sous 24 heures.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left — Infos de contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Comment nous joindre
                </h2>
                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a href="mailto:info@vd-subside.ch" className="text-green-700 hover:underline">info@vd-subside.ch</a>
                      <p className="text-sm text-gray-500 mt-1">Réponse sous 24 heures, du lundi au vendredi</p>
                    </div>
                  </div>

                  {/* Localisation */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Zone d'activité</h3>
                      <p className="text-gray-700">Canton de Vaud, Suisse</p>
                      <p className="text-sm text-gray-500 mt-1">Accompagnement à distance dans tout le canton</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2">
                  {[
                    { jour: 'Lundi – Vendredi', horaire: '9h00 – 18h00' },
                    { jour: 'Samedi', horaire: 'Fermé' },
                    { jour: 'Dimanche', horaire: 'Fermé' },
                  ].map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-gray-700">{h.jour}</span>
                      <span className={`text-sm font-medium ${h.horaire === 'Fermé' ? 'text-gray-400' : 'text-gray-900'}`}>{h.horaire}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">Les demandes envoyées en dehors des horaires seront traitées le jour ouvrable suivant.</p>
              </div>

              {/* Lien OVAM */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Contact OVAM (Office Vaudois de l'Assurance Maladie)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Pour toute question officielle sur votre dossier de subside en cours, vous pouvez également contacter directement l'OVAM.
                </p>
                <a
                  href="/guide/ovam-contact-telephone-horaires"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
                >
                  Voir les coordonnées OVAM
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — Formulaire */}
            <div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Remplissez le formulaire ci-dessous. Notre équipe vous répondra dans les 24 heures.
                  </p>
                </div>
                <ContactForm source="page-nous-contacter" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs liens internes */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Vous pouvez aussi</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/demande" className="bg-green-50 border-2 border-green-200 rounded-xl p-5 hover:border-green-400 transition-all group text-center">
              <div className="text-2xl mb-2">📝</div>
              <h3 className="font-semibold text-green-700 group-hover:text-green-800 text-sm">Faire une demande de subside</h3>
            </Link>
            <Link href="/calculateur" className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 hover:border-blue-400 transition-all group text-center">
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-semibold text-blue-700 group-hover:text-blue-800 text-sm">Calculer votre subside</h3>
            </Link>
            <Link href="/en-savoir-plus" className="bg-gray-50 border-2 border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-all group text-center">
              <div className="text-2xl mb-2">📖</div>
              <h3 className="font-semibold text-gray-700 group-hover:text-gray-800 text-sm">En savoir plus sur les subsides</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-3">
            <details className="bg-white border border-gray-200 rounded-xl">
              <summary className="p-5 cursor-pointer font-semibold text-gray-900 hover:text-green-700 transition-colors">
                En combien de temps recevrai-je une réponse ?
              </summary>
              <div className="px-5 pb-5">
                <p className="text-gray-600 text-sm">Notre équipe répond à toutes les demandes sous 24 heures ouvrables. Les messages envoyés le week-end sont traités le lundi suivant.</p>
              </div>
            </details>
            <details className="bg-white border border-gray-200 rounded-xl">
              <summary className="p-5 cursor-pointer font-semibold text-gray-900 hover:text-green-700 transition-colors">
                Le service est-il gratuit ?
              </summary>
              <div className="px-5 pb-5">
                <p className="text-gray-600 text-sm">Oui, notre accompagnement pour la demande de subside assurance maladie est entièrement gratuit. Aucun frais caché, aucun engagement.</p>
              </div>
            </details>
            <details className="bg-white border border-gray-200 rounded-xl">
              <summary className="p-5 cursor-pointer font-semibold text-gray-900 hover:text-green-700 transition-colors">
                Êtes-vous affiliés à l'État de Vaud ?
              </summary>
              <div className="px-5 pb-5">
                <p className="text-gray-600 text-sm">Non, VD-Subside est un service indépendant d'information et d'accompagnement. Nous ne sommes pas affiliés à l'État de Vaud ni à l'OVAM. Nous aidons les résidents vaudois dans leurs démarches de demande de subside.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://vd-subside.ch' },
                  { '@type': 'ListItem', position: 2, name: 'Nous contacter', item: 'https://vd-subside.ch/nous-contacter' },
                ],
              },
              {
                '@type': 'ContactPage',
                url: 'https://vd-subside.ch/nous-contacter',
                name: 'Nous Contacter – VD-Subside',
                description: 'Contactez notre équipe pour toute question sur le subside assurance maladie dans le Canton de Vaud.',
                mainEntity: {
                  '@type': 'Organization',
                  name: 'VD Subside',
                  email: 'info@vd-subside.ch',
                  areaServed: {
                    '@type': 'AdministrativeArea',
                    name: 'Canton de Vaud',
                  },
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
