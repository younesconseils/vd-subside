'use client';

import { useState, useEffect, useCallback } from 'react';

interface Lead {
  id: number;
  created_at: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  ville: string;
  date_naissance: string;
  optimiser_prime: string;
  source: string;
  page_origine: string;
}

export default function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('all');

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/leads?key=${encodeURIComponent(password)}`);
      const data = await res.json();
      if (res.ok) {
        setLeads(data.leads);
        setIsAuthenticated(true);
      } else {
        setError(data.error || 'Erreur');
      }
    } catch {
      setError('Erreur de connexion');
    }
    setLoading(false);
  }, [password]);

  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(fetchLeads, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated, fetchLeads]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchLeads();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-600 text-white font-black text-xl rounded-xl mb-3">
              VD
            </div>
            <h1 className="text-xl font-bold text-gray-900">Admin VD-Subside</h1>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 outline-none mb-3"
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all"
          >
            {loading ? 'Chargement...' : 'Accéder'}
          </button>
        </form>
      </div>
    );
  }

  const sources = [...new Set(leads.map(l => l.source).filter(Boolean))];

  const filteredLeads = leads.filter(lead => {
    const matchesText = !filter ||
      `${lead.nom} ${lead.prenom} ${lead.email} ${lead.telephone} ${lead.ville}`.toLowerCase().includes(filter.toLowerCase());
    const matchesSource = sourceFilter === 'all' || lead.source === sourceFilter;
    return matchesText && matchesSource;
  });

  const today = new Date().toISOString().split('T')[0];
  const leadsToday = leads.filter(l => l.created_at?.startsWith(today)).length;
  const leadsThisWeek = leads.filter(l => {
    const d = new Date(l.created_at);
    const now = new Date();
    const diff = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);
    return diff <= 7;
  }).length;
  const leadsOptimiser = leads.filter(l => l.optimiser_prime === 'oui').length;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-CH', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const getSourceBadge = (source: string) => {
    if (source === 'campagne-mail') return { label: 'Campagne', color: 'bg-purple-100 text-purple-700' };
    if (source?.startsWith('/ville/')) return { label: source.replace('/ville/', ''), color: 'bg-blue-100 text-blue-700' };
    if (source?.startsWith('/guide/')) return { label: 'Guide', color: 'bg-yellow-100 text-yellow-700' };
    if (source === '/' || source === 'homepage') return { label: 'Homepage', color: 'bg-green-100 text-green-700' };
    return { label: source || 'Direct', color: 'bg-gray-100 text-gray-700' };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 text-white font-black text-lg w-10 h-10 rounded-xl flex items-center justify-center">
              VD
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-lg">Tableau de bord</h1>
              <p className="text-xs text-gray-500">VD-Subside — Leads</p>
            </div>
          </div>
          <button
            onClick={fetchLeads}
            className="text-sm bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-lg transition-all"
          >
            Rafraîchir
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="text-3xl font-extrabold text-green-600">{leads.length}</div>
            <div className="text-sm text-gray-500 mt-1">Total leads</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="text-3xl font-extrabold text-green-600">{leadsToday}</div>
            <div className="text-sm text-gray-500 mt-1">Aujourd&apos;hui</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="text-3xl font-extrabold text-green-600">{leadsThisWeek}</div>
            <div className="text-sm text-gray-500 mt-1">Cette semaine</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="text-3xl font-extrabold text-green-600">{leadsOptimiser}</div>
            <div className="text-sm text-gray-500 mt-1">Veulent optimiser</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-6 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Rechercher un lead (nom, email, ville...)"
            className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:border-green-600 outline-none text-sm"
          />
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:border-green-600 outline-none text-sm bg-white"
          >
            <option value="all">Toutes les sources</option>
            {sources.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <div className="text-sm text-gray-500 flex items-center px-2">
            {filteredLeads.length} résultat{filteredLeads.length > 1 ? 's' : ''}
          </div>
        </div>

        {/* Leads list */}
        <div className="space-y-3">
          {filteredLeads.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400">
              Aucun lead trouvé
            </div>
          ) : (
            filteredLeads.map((lead) => {
              const badge = getSourceBadge(lead.source);
              return (
                <div key={lead.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-900 text-lg">
                          {lead.prenom} {lead.nom}
                        </h3>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badge.color}`}>
                          {badge.label}
                        </span>
                        {lead.optimiser_prime === 'oui' && (
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-orange-100 text-orange-700">
                            Optimiser prime
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600">
                        <a href={`tel:${lead.telephone}`} className="hover:text-green-600 transition-colors">
                          {lead.telephone}
                        </a>
                        <a href={`mailto:${lead.email}`} className="hover:text-green-600 transition-colors">
                          {lead.email}
                        </a>
                        {lead.ville && <span>{lead.ville}</span>}
                        {lead.date_naissance && <span>Né(e) le {lead.date_naissance}</span>}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 whitespace-nowrap">
                      {formatDate(lead.created_at)}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
