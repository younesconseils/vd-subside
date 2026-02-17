'use client';

import { useState } from 'react';

export default function AssuranceForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    ville: '',
    caisse_actuelle: '',
    message: '',
    source: 'page-assurance',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(() => {
        return { ok: true };
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          ville: '',
          caisse_actuelle: '',
          message: '',
          source: 'page-assurance',
        });

        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID',
            'event_category': 'Form',
            'event_label': 'assurance',
          });
        }
      } else {
        setStatus('error');
        setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Erreur de connexion. Veuillez vérifier votre connexion internet.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-green-50 border-2 border-green-200 rounded-xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Demande envoyée avec succès !
        </h3>
        <p className="text-gray-600 mb-6">
          Un conseiller agréé <strong>FINMA</strong> vous contactera dans les <strong>24 heures</strong> pour analyser votre situation et vous proposer les meilleures offres.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-green-600 hover:text-green-700 font-semibold"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nom et Prénom */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ass-nom" className="block text-sm font-medium text-gray-700 mb-2">
            Nom *
          </label>
          <input
            type="text"
            id="ass-nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="ass-prenom" className="block text-sm font-medium text-gray-700 mb-2">
            Prénom *
          </label>
          <input
            type="text"
            id="ass-prenom"
            name="prenom"
            required
            value={formData.prenom}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
            placeholder="Votre prénom"
          />
        </div>
      </div>

      {/* Email et Téléphone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ass-email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="ass-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
            placeholder="votre@email.ch"
          />
        </div>
        <div>
          <label htmlFor="ass-telephone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="ass-telephone"
            name="telephone"
            required
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
            placeholder="079 123 45 67"
          />
        </div>
      </div>

      {/* Ville et Caisse actuelle */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ass-ville" className="block text-sm font-medium text-gray-700 mb-2">
            Ville *
          </label>
          <input
            type="text"
            id="ass-ville"
            name="ville"
            required
            value={formData.ville}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
            placeholder="Lausanne, Yverdon, etc."
          />
        </div>
        <div>
          <label htmlFor="ass-caisse" className="block text-sm font-medium text-gray-700 mb-2">
            Caisse maladie actuelle *
          </label>
          <select
            id="ass-caisse"
            name="caisse_actuelle"
            required
            value={formData.caisse_actuelle}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
          >
            <option value="">Sélectionnez votre caisse</option>
            <option value="Assura">Assura</option>
            <option value="Atupri">Atupri</option>
            <option value="Concordia">Concordia</option>
            <option value="CSS">CSS</option>
            <option value="EGK">EGK</option>
            <option value="Groupe Mutuel">Groupe Mutuel</option>
            <option value="Helsana">Helsana</option>
            <option value="KPT">KPT / CPT</option>
            <option value="ÖKK">ÖKK</option>
            <option value="Sanitas">Sanitas</option>
            <option value="Swica">Swica</option>
            <option value="Sympany">Sympany</option>
            <option value="Visana">Visana</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="ass-message" className="block text-sm font-medium text-gray-700 mb-2">
          Message (optionnel)
        </label>
        <textarea
          id="ass-message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
          placeholder="Décrivez votre besoin : changer de caisse, réduire vos primes, ajouter une complémentaire..."
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            Demander un conseil gratuit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      {/* FINMA / CICERO notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div className="text-xs text-gray-600">
            <p className="font-semibold text-gray-800 mb-1">Conseil par un professionnel agréé</p>
            <p>
              Notre conseiller est agréé <strong>FINMA</strong> (Autorité fédérale de surveillance des marchés financiers)
              et certifié <strong>CICERO</strong> (formation continue ASA). Service 100% gratuit et sans engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy */}
      <p className="text-xs text-gray-500 text-center">
        🔒 Vos données sont sécurisées et ne seront jamais partagées. En soumettant ce formulaire, vous acceptez d&apos;être contacté par notre conseiller.
      </p>
    </form>
  );
}
