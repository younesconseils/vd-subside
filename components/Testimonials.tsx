export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie Dubois',
      city: 'Lausanne',
      rating: 5,
      text: 'Grâce à VD Subside, j\'économise 450 CHF par mois sur mon assurance maladie ! Le processus était ultra simple et rapide.',
      avatar: 'MD'
    },
    {
      name: 'Jean-Pierre Martin',
      city: 'Vevey',
      rating: 5,
      text: 'J\'hésitais à faire la démarche, mais en 10 minutes j\'avais ma réponse. Je touche maintenant 5\'200 CHF de subside par an.',
      avatar: 'JP'
    },
    {
      name: 'Sophie Leroy',
      city: 'Montreux',
      rating: 5,
      text: 'Service impeccable ! L\'équipe m\'a aidé à rassembler tous les documents. Tout s\'est fait en ligne, c\'est génial.',
      avatar: 'SL'
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ils ont obtenu leur subside avec VD Subside
          </h2>
          <p className="text-xl text-green-50 max-w-2xl mx-auto">
            Plus de 15'000 Vaudois nous font confiance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-green-100">{testimonial.city}</div>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-green-50 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4">
            <div>
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-sm text-green-100">Note moyenne</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <div className="text-3xl font-bold">15k+</div>
              <div className="text-sm text-green-100">Subsides calculés</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-green-100">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
