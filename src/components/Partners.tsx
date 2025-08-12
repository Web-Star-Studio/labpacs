export default function Partners() {
  const partners = [
    {
      name: "AMCHAM Brasil",
      logo: "/amcham-brasil.webp",
      alt: "AMCHAM Brasil"
    },
    {
      name: "Casa Azul",
      logo: "/casa-azul.webp",
      alt: "Casa Azul"
    },
    {
      name: "Geeon",
      logo: "/geeon.webp",
      alt: "Geeon"
    },
    {
      name: "Prêmio VE",
      logo: "/premio-ve.webp",
      alt: "Prêmio VE"
    },
    {
      name: "Startup Acelerada",
      logo: "/startup-acelerada.webp",
      alt: "Startup Acelerada"
    },
    {
      name: "Startup CE",
      logo: "/startup-ce.webp",
      alt: "Startup CE"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-hero text-3xl sm:text-4xl text-gray-900 mb-4">
            Parceiros e Apoiadores
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Orgulhosamente apoiados por organizações que compartilham nossa visão de inovação em saúde digital.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}