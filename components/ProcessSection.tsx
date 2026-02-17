'use client';

import { useEffect, useState, useRef } from 'react';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Remplissez le formulaire',
      description: 'Indiquez-nous votre situation en 2 minutes',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Analyse de votre dossier',
      description: 'Notre équipe évalue votre éligibilité',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Constitution du dossier',
      description: 'Nous préparons tous les documents nécessaires',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Dépôt et suivi',
      description: 'Nous soumettons votre demande et assurons le suivi',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-800 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Simple et efficace
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            4 étapes simples pour obtenir votre subside
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-300 to-green-200"></div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 150}ms`
                }}
              >
                {/* Number circle */}
                <div className="relative flex justify-center mb-6">
                  <div className="relative z-10">
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-green-600 group-hover:border-green-300 group-hover:bg-green-50 transition-all shadow-sm">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-xl">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-green-800 font-medium">
              Processus complet en moyenne 4-6 semaines
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
