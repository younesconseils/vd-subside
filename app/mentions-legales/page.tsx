import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales | VD-Subside',
  description: 'Mentions légales, conditions d\'utilisation et informations juridiques de VD-Subside.ch',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-4xl">
        <Link href="/" className="text-green-600 hover:text-green-700 font-semibold mb-8 inline-block">
          ← Retour à l'accueil
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : {new Date().toLocaleDateString('fr-CH')}</p>

            {/* Identification */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Identification du site</h2>
              <p className="text-gray-700">
                <strong>Nom du site :</strong> VD-Subside<br />
                <strong>URL :</strong> <a href="https://vd-subside.ch" className="text-green-600">https://vd-subside.ch</a><br />
                <strong>Email de contact :</strong> <a href="mailto:contact@vd-subside.ch" className="text-green-600">contact@vd-subside.ch</a><br />
                <strong>Hébergeur :</strong> Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
              </p>
            </section>

            {/* Disclaimer service cantonal */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Nature du service - Disclaimer important</h2>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg my-6">
                <h3 className="font-bold text-red-900 mb-3">⚠️ AVERTISSEMENT JURIDIQUE IMPORTANT</h3>
                <div className="text-sm text-gray-800 space-y-3">
                  <p>
                    <strong>VD-Subside.ch est un service privé d'accompagnement et d'information.</strong>
                  </p>
                  <p>
                    Nous ne sommes PAS :<br />
                    • Un service officiel du Canton de Vaud<br />
                    • L'Office Vaudois de l'Assurance Maladie (OVAM)<br />
                    • Une autorité cantonale ou fédérale<br />
                    • Un service gouvernemental
                  </p>
                  <p>
                    <strong>Nous sommes :</strong><br />
                    • Un service privé d'accompagnement GRATUIT<br />
                    • Un outil d'information et d'aide au remplissage de formulaires<br />
                    • Un intermédiaire entre les demandeurs et les services officiels
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Compétence exclusive du Canton</h3>
              <p className="text-gray-700">
                Les subsides d'assurance maladie sont un <strong>service cantonal exclusif</strong> géré par l'<strong>Office Vaudois de l'Assurance Maladie (OVAM)</strong>.
                Seul l'OVAM a le pouvoir de :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
                <li>Examiner et traiter les demandes de subside</li>
                <li>Calculer le montant exact du subside</li>
                <li>Prendre des décisions d'attribution ou de refus</li>
                <li>Verser les subsides aux caisses maladie</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Notre rôle</h3>
              <p className="text-gray-700">
                VD-Subside.ch fournit uniquement :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
                <li><strong>Information</strong> : Explications sur le système de subside vaudois</li>
                <li><strong>Estimation indicative</strong> : Calculateur basé sur la règle des 10% (non contractuel)</li>
                <li><strong>Accompagnement gratuit</strong> : Aide à la préparation du dossier</li>
                <li><strong>Transmission</strong> : Facilitation de la communication avec l'OVAM</li>
              </ul>

              <p className="text-gray-700 mt-4">
                <strong>Nous ne pouvons PAS :</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
                <li>Garantir l'obtention d'un subside</li>
                <li>Calculer le montant exact de votre subside (seul l'OVAM le peut)</li>
                <li>Influencer les décisions de l'OVAM</li>
                <li>Traiter les demandes à la place de l'OVAM</li>
                <li>Verser des subsides</li>
              </ul>
            </section>

            {/* Responsabilité */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Limitation de responsabilité</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Exactitude des informations</h3>
              <p className="text-gray-700">
                Les informations sur ce site sont fournies à titre indicatif et peuvent contenir des inexactitudes.
                Nous nous efforçons de maintenir les informations à jour, mais la législation peut changer.
              </p>
              <p className="text-gray-700 mt-3">
                <strong>Seules les informations officielles de l'OVAM et du Canton de Vaud font foi.</strong>
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Calculateur</h3>
              <p className="text-gray-700">
                Le calculateur de subside fournit une <strong>estimation indicative non contractuelle</strong>.
                Le calcul réel est effectué par l'OVAM selon des critères complexes.
                Nous déclinons toute responsabilité en cas de différence entre notre estimation et le montant réel.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Résultat des demandes</h3>
              <p className="text-gray-700">
                Nous ne garantissons pas l'acceptation de votre demande de subside.
                La décision finale appartient exclusivement à l'OVAM.
              </p>
            </section>

            {/* Protection des données */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Protection des données personnelles</h2>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
                <h3 className="font-bold text-blue-900 mb-3">🔒 Conformité LPD & RGPD</h3>
                <p className="text-sm text-gray-800">
                  Vos données sont protégées conformément à la <strong>Loi fédérale sur la protection des données (LPD suisse)</strong>
                  et au <strong>Règlement Général sur la Protection des Données (RGPD européen)</strong>.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Données collectées</h3>
              <p className="text-gray-700">
                Nous collectons uniquement les données nécessaires au traitement de votre demande :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
                <li>Nom, prénom</li>
                <li>Email, téléphone</li>
                <li>Ville de résidence</li>
                <li>Situation familiale</li>
                <li>Revenu approximatif (optionnel)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Utilisation des données</h3>
              <p className="text-gray-700">
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
                <li>Vous contacter concernant votre demande</li>
                <li>Préparer votre dossier de subside</li>
                <li>Statistiques anonymisées (nombre de demandes, taux d'acceptation)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Non-partage</h3>
              <p className="text-gray-700">
                <strong>Nous ne vendons JAMAIS vos données.</strong><br />
                Vos données ne sont partagées qu'avec votre consentement explicite et uniquement avec l'OVAM
                dans le cadre de votre demande de subside.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Vos droits</h3>
              <p className="text-gray-700">
                Conformément à la LPD et au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
                <li><strong>Droit d'accès</strong> : Consulter vos données</li>
                <li><strong>Droit de rectification</strong> : Corriger vos données</li>
                <li><strong>Droit à l'effacement</strong> : Supprimer vos données</li>
                <li><strong>Droit d'opposition</strong> : Refuser le traitement</li>
                <li><strong>Droit à la portabilité</strong> : Récupérer vos données</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Pour exercer ces droits : <a href="mailto:contact@vd-subside.ch" className="text-green-600 underline">contact@vd-subside.ch</a>
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-700">
                Nous utilisons uniquement des cookies essentiels et analytiques :
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
                <li><strong>Cookies nécessaires</strong> : Mémorisation de vos préférences de cookies (1 an)</li>
                <li><strong>Cookies analytiques</strong> : Mesure d'audience anonyme (avec votre consentement)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau qui apparaît lors de votre première visite.
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Propriété intellectuelle</h2>
              <p className="text-gray-700">
                Le contenu de ce site (textes, images, logos, structure) est protégé par le droit d'auteur suisse.
                Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </section>

            {/* Droit applicable */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Droit applicable et juridiction</h2>
              <p className="text-gray-700">
                Les présentes mentions légales sont régies par le <strong>droit suisse</strong>.
                En cas de litige, les tribunaux du Canton de Vaud seront seuls compétents.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
              <p className="text-gray-700">
                Pour toute question concernant ces mentions légales ou vos données personnelles :<br />
                <a href="mailto:contact@vd-subside.ch" className="text-green-600 underline font-semibold">contact@vd-subside.ch</a>
              </p>
            </section>

            {/* Liens externes */}
            <div className="bg-gray-100 rounded-lg p-6 mt-12">
              <h3 className="font-bold text-gray-900 mb-3">Liens utiles</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.vd.ch/themes/sante-social-et-handicap/assurances/assurance-maladie-obligatoire/subsides-pour-lassurance-maladie-obligatoire/"
                     className="text-green-600 hover:text-green-700 underline"
                     target="_blank"
                     rel="noopener noreferrer">
                    OVAM - Site officiel Canton de Vaud
                  </a>
                </li>
                <li>
                  <Link href="/confidentialite" className="text-green-600 hover:text-green-700 underline">
                    Politique de confidentialité complète
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-green-600 hover:text-green-700 underline">
                    Retour à l'accueil
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
