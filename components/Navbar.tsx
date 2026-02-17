'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>

              {/* Logo badge */}
              <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-2.5 shadow-lg">
                <div className="flex items-center justify-center">
                  <span className="text-white font-bold text-xl tracking-tight">VD</span>
                </div>
                {/* Active indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-green-600"></div>
              </div>
            </div>

            <div>
              <div className="font-bold text-gray-900 text-lg tracking-tight">
                VD-Subside
              </div>
              <div className="text-xs text-gray-500 -mt-0.5">
                Canton de Vaud
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/situation" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Situations
            </a>
            <a href="#eligibilite" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
              Éligibilité
            </a>
            <a href="#comment-ca-marche" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
              Comment ça marche
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/demande"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30"
            >
              Demande de subside
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="/situation"
                className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors px-4 py-2 flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Situations
              </a>
              <a
                href="#eligibilite"
                className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Éligibilité
              </a>
              <a
                href="#comment-ca-marche"
                className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Comment ça marche
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="/demande"
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-lg mx-4 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demande de subside
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
