'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    commune: '',
    npa: '',
    nombrePersonnes: '1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demande envoyée:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20">
      {/* Animated background gradient - Vaud colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-green-50 via-emerald-50 to-transparent rounded-full blur-3xl opacity-60 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-green-100 via-white to-transparent rounded-full blur-3xl opacity-40"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        ></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">

          {/* Left - Content */}
          <div className="space-y-8">
            {/* Badge animé */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-800 text-sm font-medium animate-fade-in">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Canton de Vaud
            </div>

            {/* Title with gradient */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-gray-900">Subside</span>
                <br />
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                  assurance maladie
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Accompagnement personnalisé pour votre demande de subside.
                Gratuit, rapide et 100% confidentiel.
              </p>
            </div>

            {/* Stats animées */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="group">
                <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  24h
                </div>
                <div className="text-sm text-gray-600">Réponse rapide</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  0 CHF
                </div>
                <div className="text-sm text-gray-600">Service gratuit</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  100%
                </div>
                <div className="text-sm text-gray-600">Sécurisé</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#form"
                className="group inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 hover:scale-105"
              >
                Demande de subside
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#info"
                className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-green-600 text-gray-700 hover:text-green-600 px-8 py-4 rounded-xl font-medium transition-all"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Right - Form Card avec glassmorphism subtil */}
          <div className="relative">
            {/* Animated glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

            <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Demande de subside
                </h2>
                <p className="text-gray-600 text-sm">
                  Remplissez le formulaire ci-dessous
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nom & Prénom */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Nom"
                      className="w-full px-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="group">
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      placeholder="Prénom"
                      className="w-full px-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    required
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="Téléphone"
                    className="w-full px-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    required
                  />
                </div>

                {/* Commune & NPA */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="commune"
                      value={formData.commune}
                      onChange={handleChange}
                      placeholder="Commune"
                      className="w-full px-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="npa"
                      value={formData.npa}
                      onChange={handleChange}
                      placeholder="NPA"
                      className="w-full px-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Nombre de personnes */}
                <div>
                  <select
                    name="nombrePersonnes"
                    value={formData.nombrePersonnes}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-900 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all appearance-none"
                    required
                  >
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5">5+ personnes</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 rounded-xl transition-all shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 hover:scale-[1.02]"
                >
                  Envoyer ma demande
                </button>

                <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Données sécurisées et confidentielles
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
