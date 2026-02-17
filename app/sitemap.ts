import { MetadataRoute } from 'next';
import { guides } from '@/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vd-subside.ch';

  // Top 30 villes vaudoises par population - SEO local complet
  const cities = [
    // Grandes villes (>10k habitants) - Priorité maximale
    'lausanne', 'yverdon-les-bains', 'montreux', 'renens', 'nyon',
    'vevey', 'pully', 'morges', 'prilly', 'ecublens',

    // Villes moyennes (5k-10k habitants)
    'la-tour-de-peilz', 'aigle', 'gland', 'bussigny', 'crissier',
    'chavannes-pres-renens', 'villeneuve', 'epalinges', 'lutry', 'payerne',

    // Villes importantes (3k-5k habitants)
    'aubonne', 'orbe', 'saint-prex', 'rolle', 'moudon',
    'le-mont-sur-lausanne', 'cheseaux-sur-lausanne', 'romanel-sur-lausanne',
    'penthalaz', 'bex'
  ];

  // Pages de situations spécifiques
  const situations = [
    'etudiant', 'chomage', 'retraite', 'independant',
    'famille-monoparentale', 'couple-marie', 'nouveau-resident', 'apprenti'
  ];

  const cityPages = cities.map(city => ({
    url: `${baseUrl}/ville/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const situationPages = situations.map(situation => ({
    url: `${baseUrl}/situation/${situation}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Pages guides longue traîne SEO
  const guidePages = guides.map(guide => ({
    url: `${baseUrl}/guide/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/calculateur`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/demande`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/en-savoir-plus`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/situation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...guidePages,
    ...situationPages,
    ...cityPages,
  ];
}
