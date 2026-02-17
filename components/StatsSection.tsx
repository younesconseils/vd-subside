'use client';

import { useEffect, useState, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '85%', label: 'Demandes acceptées', color: 'from-green-500 to-emerald-600' },
    { value: '3.2M', label: 'CHF économisés en 2024', color: 'from-emerald-500 to-green-600' },
    { value: '12k+', label: 'Familles accompagnées', color: 'from-green-600 to-emerald-700' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Impact en chiffres
          </h2>
          <p className="text-xl text-gray-600">
            Notre accompagnement fait la différence
          </p>
        </div>

        {/* Animated stats cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 delay-${index * 100}`}
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
              }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}></div>

              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-200 transition-all hover:shadow-xl">
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>

                {/* Progress bar animation */}
                <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                    style={{ width: isVisible ? '100%' : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Graphique animé - bénéfices moyens */}
        <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Économies moyennes par type de ménage
          </h3>

          <div className="space-y-6">
            {[
              { label: 'Personne seule', amount: '3\'600 CHF/an', percentage: 70 },
              { label: 'Couple sans enfant', amount: '6\'000 CHF/an', percentage: 85 },
              { label: 'Famille avec enfants', amount: '8\'400 CHF/an', percentage: 100 },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">{item.label}</span>
                  <span className="text-green-600 font-semibold">{item.amount}</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105 origin-left"
                    style={{
                      width: isVisible ? `${item.percentage}%` : '0%',
                      transitionDelay: `${index * 200}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Note :</strong> Montants indicatifs basés sur nos dossiers traités en 2024. Le montant final dépend de votre situation personnelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
