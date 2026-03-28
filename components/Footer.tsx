import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      {/* Liens et infos */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonne 1 - À propos */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">VD-Subside.ch</h3>
            <p className="text-xs leading-relaxed mb-3">
              Service privé d&apos;accompagnement gratuit pour les demandes de subside d&apos;assurance maladie
              dans le Canton de Vaud. Conseillers certifiés FINMA et CICERO.
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/nous-contacter" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
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

          {/* Colonne 3 - Autres cantons */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Autres cantons</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://ge-subside.ch" className="hover:text-white transition-colors">
                  Subside assurance maladie Genève
                </a>
              </li>
              <li>
                <a href="https://vs-subside.ch" className="hover:text-white transition-colors">
                  Subside assurance maladie Valais
                </a>
              </li>
              <li>
                <a href="https://vs-subside.ch/calculateur" className="hover:text-white transition-colors">
                  Calculateur subside Valais
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
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

      {/* Disclaimer entité privée */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <p className="text-[11px] text-gray-500 leading-relaxed text-center">
            <strong>Entité privée indépendante.</strong> VD-Subside.ch n&apos;est ni affilié ni mandaté par le Canton de Vaud,
            l&apos;OVAM ou toute autre autorité publique. Les informations publiées sont fournies à titre indicatif
            et ne se substituent pas aux communications officielles. Intermédiaire d&apos;assurance agréé FINMA —
            LSA art. 40-45 &middot; Certifié CICERO (registre ASA).
          </p>
        </div>
      </div>

      {/* Barre copyright */}
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
