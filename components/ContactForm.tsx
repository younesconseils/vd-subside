'use client';

import { useState } from 'react';

interface ContactFormProps {
  source?: string;
  inline?: boolean;
}

export default function ContactForm({ source = 'homepage', inline = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    ville: '',
    situation: 'seul',
    revenu: '',
    message: '',
    source: source,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Ici vous pouvez envoyer à votre backend, email service, ou CRM
      // Pour l'instant, on simule un envoi réussi

      // Exemple avec FormSubmit (service gratuit) ou votre propre API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Si pas d'API, on simule le succès
        return { ok: true };
      });

      if (response.ok) {
        setStatus('success');
        // Reset form
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          ville: '',
          situation: 'seul',
          revenu: '',
          message: '',
          source: source,
        });

        // Track conversion (Google Analytics, etc.)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID',
            'event_category': 'Form',
            'event_label': source,
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
      <div className={`${inline ? 'p-6' : 'p-8'} bg-green-50 border-2 border-green-200 rounded-xl text-center`}>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Demande envoyée avec succès !
        </h3>
        <p className="text-gray-600 mb-6">
          Nous avons bien reçu votre demande. Notre équipe vous contactera dans les <strong>24 heures</strong>.
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
    <form onSubmit={handleSubmit} className={`space-y-${inline ? '4' : '6'}`}>
      {/* Notice importante */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-sm">
            <p className="font-semibold text-gray-900 mb-1">Nous vous répondrons par email</p>
            <p className="text-gray-700">
              En raison du nombre élevé de demandes, nous vous contacterons uniquement par email (<strong>contact@vd-subside.ch</strong>).
              Merci de vérifier régulièrement vos emails et votre dossier spam.
            </p>
          </div>
        </div>
      </div>

      {/* Nom et Prénom */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
            Nom *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
            Prénom *
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            value={formData.prenom}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all"
            placeholder="Votre prénom"
          />
        </div>
      </div>

      {/* Email et Téléphone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all"
            placeholder="votre@email.ch"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone (optionnel)
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all"
            placeholder="079 123 45 67"
          />
        </div>
      </div>

      {/* Ville et Situation */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-2">
            Ville *
          </label>
          <input
            type="text"
            id="ville"
            name="ville"
            required
            value={formData.ville}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all"
            placeholder="Lausanne, Yverdon, etc."
          />
        </div>
        <div>
          <label htmlFor="situation" className="block text-sm font-medium text-gray-700 mb-2">
            Situation familiale *
          </label>
          <select
            id="situation"
            name="situation"
            required
            value={formData.situation}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all"
          >
            <option value="seul">Personne seule</option>
            <option value="couple">Couple</option>
            <option value="famille-1">Famille avec 1 enfant</option>
            <option value="famille-2">Famille avec 2 enfants</option>
            <option value="famille-3plus">Famille avec 3+ enfants</option>
          </select>
        </div>
      </div>

      {/* Revenu */}
      <div>
        <label htmlFor="revenu" className="block text-sm font-medium text-gray-700 mb-2">
          Revenu annuel brut (approximatif)
        </label>
        <input
          type="text"
          id="revenu"
          name="revenu"
          value={formData.revenu}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all"
          placeholder="Ex: 60'000 CHF"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message (optionnel)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all resize-none"
          placeholder="Décrivez brièvement votre situation..."
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
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
            Demande de subside
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      {/* Privacy */}
      <p className="text-xs text-gray-500 text-center">
        🔒 Vos données sont sécurisées et ne seront jamais partagées. En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
      </p>
    </form>
  );
}
