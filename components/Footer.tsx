import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      {/* Liens et infos */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 - À propos */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">VD-Subside.ch</h3>
            <p className="text-xs leading-relaxed">
              Service privé d&apos;accompagnement gratuit pour les demandes de subside d&apos;assurance maladie
              dans le Canton de Vaud. Nous ne sommes pas un service officiel du Canton.
            </p>
          </div>

          {/* Colonne 2 - Liens légaux */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Informations légales</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <a href="https://www.finma.ch/fr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  FINMA — Autorité de surveillance
                </a>
              </li>
              <li>
                <a href="https://www.cicero.ch/fr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  CICERO — Registre ASA
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Contact</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="mailto:info@vd-subside.ch" className="hover:text-white transition-colors">
                  info@vd-subside.ch
                </a>
              </li>
              <li>
                <Link href="/demande" className="hover:text-white transition-colors">
                  Faire une demande de subside
                </Link>
              </li>
              <li>
                <a href="https://www.vd.ch/themes/sante-social-et-handicap/assurances/assurance-maladie-obligatoire/subsides-pour-lassurance-maladie-obligatoire/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  OVAM — Site officiel du Canton
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre copyright + cadre réglementaire */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} VD-Subside.ch — Tous droits réservés
            </p>
            <p className="text-xs text-gray-500">
              LSA art. 40-45 &middot; OS &middot; LPD &middot; FINMA &middot; CICERO &middot; LAMal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
