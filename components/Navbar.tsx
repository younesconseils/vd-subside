'use client';

import { useState, useEffect, useRef } from 'react';

const guideCategories = [
  {
    title: 'Démarches',
    icon: '📝',
    items: [
      { slug: 'comment-faire-demande-subside-vaud', title: 'Comment faire sa demande', icon: '📝' },
      { slug: 'documents-necessaires-subside-vaud', title: 'Documents nécessaires', icon: '📄' },
      { slug: 'delai-subside-vaud-combien-temps', title: 'Délais de traitement', icon: '⏳' },
      { slug: 'renouvellement-subside-vaud', title: 'Renouvellement automatique', icon: '🔄' },
      { slug: 'actualisation-financiere-subside-vaud', title: 'Actualisation financière', icon: '📊' },
      { slug: 'recours-refus-subside-vaud', title: 'En cas de refus', icon: '❌' },
    ],
  },
  {
    title: 'Calcul & Montants',
    icon: '🧮',
    items: [
      { slug: 'calculer-subside-vaud-rdu', title: 'Calculer son RDU', icon: '🧮' },
      { slug: 'bareme-subside-vaud-2026', title: 'Barèmes 2026', icon: '📋' },
      { slug: 'plafond-revenu-subside-vaud', title: 'Plafonds de revenus', icon: '📈' },
      { slug: 'fortune-subside-vaud-impact', title: 'Impact de la fortune', icon: '💰' },
      { slug: 'combien-subside-vaud-par-mois', title: 'Montant par mois', icon: '💵' },
      { slug: 'subside-vaud-region-1-region-2', title: 'Régions de primes', icon: '🗺️' },
    ],
  },
  {
    title: 'Situations de vie',
    icon: '👥',
    items: [
      { slug: 'subside-vaud-couple-marie', title: 'Couple marié', icon: '💑' },
      { slug: 'subside-vaud-nouveau-resident', title: 'Nouveau résident', icon: '🏠' },
      { slug: 'subside-vaud-perte-emploi', title: 'Perte d\'emploi', icon: '💼' },
      { slug: 'subside-vaud-divorce-separation', title: 'Divorce / séparation', icon: '💔' },
      { slug: 'subside-vaud-jeune-26-ans', title: 'Jeunes 18-25 ans', icon: '🎓' },
      { slug: 'subside-vaud-femme-enceinte-maternite', title: 'Grossesse / maternité', icon: '🤰' },
    ],
  },
  {
    title: 'Cas spéciaux',
    icon: '⭐',
    items: [
      { slug: 'subside-vaud-permis-b-c-etranger', title: 'Permis B/C étranger', icon: '🛂' },
      { slug: 'subside-vaud-travailleur-frontalier', title: 'Travailleur frontalier', icon: '🚗' },
      { slug: 'subside-vaud-invalide-ai', title: 'Invalidité / AI', icon: '♿' },
      { slug: 'subside-vaud-revenu-insertion-ri', title: 'Revenu d\'insertion', icon: '🤝' },
      { slug: 'subside-vaud-enfant-mineur', title: 'Enfants mineurs', icon: '👶' },
      { slug: 'subside-vaud-prestations-complementaires', title: 'Prestations complémentaires', icon: '➕' },
    ],
  },
  {
    title: 'Assurance & Primes',
    icon: '🏥',
    items: [
      { slug: 'changer-assurance-maladie-subside-vaud', title: 'Changer de caisse', icon: '🔄' },
      { slug: 'economiser-prime-assurance-maladie-vaud', title: 'Économiser sur les primes', icon: '💸' },
      { slug: 'hausse-primes-assurance-maladie-vaud-2026', title: 'Hausse des primes 2026', icon: '📈' },
      { slug: 'subside-vaud-vs-autres-cantons', title: 'Comparaison cantons', icon: '🏔️' },
      { slug: 'subside-vaud-remboursement-trop-percu', title: 'Remboursement trop-perçu', icon: '↩️' },
      { slug: 'ovam-contact-telephone-horaires', title: 'Contact OVAM', icon: '📞' },
    ],
  },
];

const situationItems = [
  { slug: 'etudiant', title: 'Étudiant', icon: '🎓', desc: 'Subsides pour étudiants et jeunes en formation' },
  { slug: 'chomage', title: 'Chômage', icon: '💼', desc: 'Vos droits en cas de perte d\'emploi' },
  { slug: 'retraite', title: 'Retraité', icon: '👴', desc: 'Subsides après la retraite AVS' },
  { slug: 'famille-monoparentale', title: 'Famille monoparentale', icon: '👨‍👧', desc: 'Déductions renforcées pour parents seuls' },
  { slug: 'apprenti', title: 'Apprenti', icon: '🔧', desc: 'Apprentis avec revenus modestes' },
  { slug: 'independant', title: 'Indépendant', icon: '💼', desc: 'Calcul basé sur le revenu net' },
  { slug: 'temps-partiel', title: 'Temps partiel', icon: '⏰', desc: 'Travail à temps réduit' },
  { slug: 'famille-nombreuse', title: 'Famille nombreuse', icon: '👨‍👩‍👧‍👦', desc: 'Familles avec 3 enfants ou plus' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-2.5 shadow-lg">
                <div className="flex items-center justify-center">
                  <span className="text-white font-bold text-xl tracking-tight">VD</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-green-600"></div>
              </div>
            </div>
            <div className={isScrolled || isMobileMenuOpen ? '' : 'text-white'}>
              <div className="font-bold text-lg tracking-tight">VD-Subside</div>
              <div className="text-xs -mt-0.5 opacity-80">Canton de Vaud</div>
            </div>
          </a>

          {/* ═══════════════ DESKTOP NAV ═══════════════ */}
          <div className="hidden lg:flex items-center gap-1">

            {/* GUIDES */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('guides')} onMouseLeave={handleMouseLeave}>
              <a href="/guide" className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeDropdown === 'guides' ? 'text-green-700 bg-green-50' : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                Guides
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'guides' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>

              {activeDropdown === 'guides' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg">30 Guides Complets</h3>
                      <p className="text-green-100 text-sm">Tout savoir sur les subsides dans le Canton de Vaud</p>
                    </div>
                    <a href="/guide" className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors">
                      Voir tous les guides
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                  <div className="grid grid-cols-3 gap-0 p-2">
                    {guideCategories.map((cat, i) => (
                      <div key={i} className="p-3">
                        <div className="flex items-center gap-2 mb-3 px-2">
                          <span className="text-base">{cat.icon}</span>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{cat.title}</span>
                        </div>
                        <div className="space-y-0.5">
                          {cat.items.map((item) => (
                            <a key={item.slug} href={`/guide/${item.slug}`} className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-green-50 transition-all group">
                              <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                              <span className="text-sm text-gray-700 group-hover:text-green-700 font-medium transition-colors leading-tight">{item.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="p-3">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 h-full flex flex-col justify-center">
                        <div className="text-3xl mb-2">🧮</div>
                        <h4 className="font-bold text-gray-900 mb-1">Calculateur de subside</h4>
                        <p className="text-xs text-gray-600 mb-3">Estimez votre subside en 2 minutes</p>
                        <a href="/calculateur" className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors">
                          Calculer maintenant
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SITUATIONS */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('situations')} onMouseLeave={handleMouseLeave}>
              <a href="/situation" className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeDropdown === 'situations' ? 'text-green-700 bg-green-50' : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Situations
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'situations' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>

              {activeDropdown === 'situations' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg">Votre situation</h3>
                      <p className="text-blue-100 text-sm">Trouvez les informations adaptées à votre profil</p>
                    </div>
                    <a href="/situation" className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors">
                      Voir tout
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {situationItems.map((item) => (
                      <a key={item.slug} href={`/situation/${item.slug}`} className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all group">
                        <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <div>
                          <div className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">{item.title}</div>
                          <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
                    <a href="/demande" className="flex items-center justify-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      Faire ma demande de subside maintenant
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* ASSURANCE */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('assurance')} onMouseLeave={handleMouseLeave}>
              <a href="/assurance" className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeDropdown === 'assurance' ? 'text-blue-700 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                Assurance
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'assurance' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>

              {activeDropdown === 'assurance' && (
                <div className="absolute top-full right-0 mt-2 w-[340px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3">
                    <h3 className="text-white font-bold">Conseil Assurance Maladie</h3>
                    <p className="text-blue-100 text-xs">Conseiller agréé FINMA &bull; Gratuit</p>
                  </div>
                  <div className="p-2">
                    <a href="/assurance" className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all group">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900 group-hover:text-blue-700">Demander un conseil gratuit</div>
                        <div className="text-xs text-gray-500 mt-0.5">Analyse personnalisée par un conseiller certifié FINMA et CICERO</div>
                      </div>
                    </a>
                    <a href="/guide/changer-assurance-maladie-subside-vaud" className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all group">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                        <span className="text-lg">🔄</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900 group-hover:text-blue-700">Changer de caisse</div>
                        <div className="text-xs text-gray-500 mt-0.5">Guide pour changer d&apos;assurance maladie</div>
                      </div>
                    </a>
                    <a href="/guide/economiser-prime-assurance-maladie-vaud" className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all group">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                        <span className="text-lg">💸</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900 group-hover:text-blue-700">Économiser sur les primes</div>
                        <div className="text-xs text-gray-500 mt-0.5">Réduisez vos primes jusqu&apos;à 40%</div>
                      </div>
                    </a>
                  </div>
                  <div className="border-t border-gray-100 px-4 py-2.5 bg-gray-50 flex items-center gap-2 justify-center">
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <span className="text-xs text-gray-500">Agréé <strong className="text-gray-700">FINMA</strong> &bull; Certifié <strong className="text-gray-700">CICERO</strong></span>
                  </div>
                </div>
              )}
            </div>

            {/* Calculateur */}
            <a href="/calculateur" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-all flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              Calculateur
            </a>

            <a href="#faq" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-all">FAQ</a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="/demande" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30">
              Demande de subside
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg shadow-lg border-2 border-gray-200 relative z-50" aria-label="Menu" type="button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ═══════════════ MOBILE MENU ═══════════════ */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">

              {/* Guides expandable */}
              <div>
                <button onClick={() => setMobileExpanded(mobileExpanded === 'guides' ? null : 'guides')} className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    Guides
                    <span className="text-xs text-gray-400 font-normal">30 guides</span>
                  </span>
                  <svg className={`w-4 h-4 transition-transform ${mobileExpanded === 'guides' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileExpanded === 'guides' && (
                  <div className="pl-4 pr-2 pb-2 space-y-3">
                    {guideCategories.map((cat, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2 px-2 py-1.5">
                          <span className="text-sm">{cat.icon}</span>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{cat.title}</span>
                        </div>
                        {cat.items.map((item) => (
                          <a key={item.slug} href={`/guide/${item.slug}`} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-xs">{item.icon}</span>
                            {item.title}
                          </a>
                        ))}
                      </div>
                    ))}
                    <a href="/guide" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Voir tous les guides →
                    </a>
                  </div>
                )}
              </div>

              {/* Situations expandable */}
              <div>
                <button onClick={() => setMobileExpanded(mobileExpanded === 'situations' ? null : 'situations')} className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Situations
                    <span className="text-xs text-gray-400 font-normal">8 profils</span>
                  </span>
                  <svg className={`w-4 h-4 transition-transform ${mobileExpanded === 'situations' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileExpanded === 'situations' && (
                  <div className="pl-4 pr-2 pb-2">
                    {situationItems.map((item) => (
                      <a key={item.slug} href={`/situation/${item.slug}`} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <span>{item.icon}</span>
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-xs text-gray-400">{item.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Assurance */}
              <a href="/assurance" className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                Conseil Assurance
                <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">FINMA</span>
              </a>

              {/* Calculateur */}
              <a href="/calculateur" className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                Calculateur
              </a>

              {/* FAQ */}
              <a href="#faq" className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>

              {/* CTA */}
              <div className="mt-2 px-4">
                <a href="/demande" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-lg text-center w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  Demande de subside
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
