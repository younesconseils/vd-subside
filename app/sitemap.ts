import { MetadataRoute } from 'next';

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

  const cityPages = cities.map(city => ({
    url: `${baseUrl}/ville/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
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
      url: `${baseUrl}/eligibilite`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/demande`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/communes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...cityPages,
  ];
}
