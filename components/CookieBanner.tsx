'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const savePreferences = (preferences: { analytics: boolean; marketing: boolean }) => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      ...preferences,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  if (showPreferences) {
    return (
      <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Paramètres des cookies</h2>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Cookies nécessaires */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Cookies nécessaires</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Ces cookies sont essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                      Toujours actifs
                    </span>
                  </div>
                </div>
                <details className="mt-3">
                  <summary className="text-sm text-green-600 cursor-pointer hover:text-green-700">
                    En savoir plus
                  </summary>
                  <p className="text-xs text-gray-600 mt-2">
                    Ces cookies permettent de mémoriser vos préférences de cookies et de sécuriser votre navigation.
                    Durée : 1 an.
                  </p>
                </details>
              </div>

              {/* Cookies analytiques */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Cookies analytiques</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Ces cookies nous aident à comprendre comment les visiteurs utilisent le site pour l'améliorer.
                    </p>
                  </div>
                  <div className="ml-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={false} id="analytics" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                </div>
                <details className="mt-3">
                  <summary className="text-sm text-green-600 cursor-pointer hover:text-green-700">
                    En savoir plus
                  </summary>
                  <p className="text-xs text-gray-600 mt-2">
                    Nous utilisons des cookies analytiques anonymes pour mesurer l'audience et améliorer l'expérience utilisateur.
                    Aucune donnée personnelle n'est collectée. Durée : 13 mois.
                  </p>
                </details>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={acceptNecessary}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Nécessaires uniquement
              </button>
              <button
                onClick={() => {
                  const analytics = (document.getElementById('analytics') as HTMLInputElement)?.checked || false;
                  savePreferences({ analytics, marketing: false });
                }}
                className="flex-1 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Enregistrer mes choix
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                🍪 Respect de votre vie privée
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic de manière anonyme.
                Vos données sont protégées conformément à la <strong>LPD suisse</strong> et au <strong>RGPD européen</strong>.
                {' '}
                <a href="/confidentialite" className="text-green-600 hover:text-green-700 underline">
                  En savoir plus
                </a>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Personnaliser
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-2.5 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors text-sm"
                >
                  Nécessaires uniquement
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm shadow-lg shadow-green-600/20"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
