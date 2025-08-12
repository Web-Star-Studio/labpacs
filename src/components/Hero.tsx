export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] md:min-h-screen bg-slate-900 text-white">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        src="/hero.png"
        alt="Equipe colaborando em um ambiente de escritório moderno"
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10 lg:top-0 top-64 h-full flex flex-col justify-center items-start p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-widest lg:mt-80 px-3 py-1.5">
              Labpacs
            </span>
          </div>
          <div className="inline-blockp-2 sm:p-4 lg:mt-20">
            <h1 className="font-bold uppercase" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', lineHeight: '0.9' }}>
              <span className="block">Inovação</span>
              <span className="block">em Diagnóstico</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 z-20 w-full p-4 sm:p-6 lg:p-8 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/50 border border-white/20 backdrop-blur-sm p-4">
          <div className="flex items-center gap-4">
            <a href="#contato" className="text-sm font-semibold uppercase tracking-wider hover:text-cyan-400 transition-colors">Fale Conosco</a>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm uppercase tracking-wider">
            <a href="https://www.instagram.com/labpacs/#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Instagram</a>
            <a href="https://www.facebook.com/Labpacs" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Facebook</a>
          </div>
          <a href="#Produtos" className="text-sm font-semibold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors">
            Nossos Produtos &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}