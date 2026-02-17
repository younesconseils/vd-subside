export default function InlineCTA() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Besoin d'aide pour votre demande de subside ?
              </h3>
              <p className="text-lg text-gray-600">
                Notre service d'accompagnement est gratuit et sans engagement
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#formulaire"
                className="inline-block bg-green-600 text-white font-semibold py-4 px-8 rounded-md hover:bg-green-700 transition-colors shadow-md"
              >
                Demande de subside
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
