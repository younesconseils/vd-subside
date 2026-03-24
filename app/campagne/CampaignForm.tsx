'use client';

import { useState } from 'react';

export default function CampaignForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    ville: '',
    dateNaissance: '',
    optimiserPrime: '',
    source: 'campagne-mail',
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => ({ ok: true }));

      if (response.ok) {
        setStatus('success');
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          ville: '',
          dateNaissance: '',
          optimiserPrime: '',
          source: 'campagne-mail',
        });

        if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
            event_category: 'Form',
            event_label: 'campagne-mail',
          });
        }
      } else {
        setStatus('error');
        setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Erreur de connexion. Veuillez vérifier votre connexion internet.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="text-center py-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Demande envoyée !
        </h3>
        <p className="text-gray-600 text-sm">
          Notre équipe vous contactera par <strong>téléphone</strong> dans les <strong>24 heures</strong> pour analyser votre éligibilité.
        </p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all text-sm";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Nom / Prénom */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="nom" className={labelClass}>Nom *</label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className={inputClass}
            placeholder="Dupont"
          />
        </div>
        <div>
          <label htmlFor="prenom" className={labelClass}>Prénom *</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            value={formData.prenom}
            onChange={handleChange}
            className={inputClass}
            placeholder="Marie"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="marie.dupont@email.ch"
        />
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="telephone" className={labelClass}>Téléphone *</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          required
          value={formData.telephone}
          onChange={handleChange}
          className={inputClass}
          placeholder="079 123 45 67"
        />
      </div>

      {/* Commune / Date de naissance */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="ville" className={labelClass}>Commune *</label>
          <input
            type="text"
            id="ville"
            name="ville"
            required
            value={formData.ville}
            onChange={handleChange}
            className={inputClass}
            placeholder="Lausanne"
          />
        </div>
        <div>
          <label htmlFor="dateNaissance" className={labelClass}>Date de naissance *</label>
          <input
            type="date"
            id="dateNaissance"
            name="dateNaissance"
            required
            value={formData.dateNaissance}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Optimiser prime */}
      <div>
        <label className={labelClass}>
          Souhaitez-vous aussi optimiser votre prime d'assurance ? *
        </label>
        <div className="grid grid-cols-2 gap-3 mt-1">
          <label
            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all text-sm font-medium ${
              formData.optimiserPrime === 'oui'
                ? 'border-green-600 bg-green-50 text-green-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-600'
            }`}
          >
            <input
              type="radio"
              name="optimiserPrime"
              value="oui"
              required
              checked={formData.optimiserPrime === 'oui'}
              onChange={handleChange}
              className="sr-only"
            />
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Oui, je veux économiser
          </label>
          <label
            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all text-sm font-medium ${
              formData.optimiserPrime === 'non'
                ? 'border-green-600 bg-green-50 text-green-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-600'
            }`}
          >
            <input
              type="radio"
              name="optimiserPrime"
              value="non"
              checked={formData.optimiserPrime === 'non'}
              onChange={handleChange}
              className="sr-only"
            />
            Non merci
          </label>
        </div>
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            Vérifier mon éligibilité
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>

      {/* Privacy */}
      <p className="text-xs text-gray-400 text-center leading-relaxed">
        Vos données sont protégées et ne seront jamais partagées à des tiers.
        En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
      </p>
    </form>
  );
}
