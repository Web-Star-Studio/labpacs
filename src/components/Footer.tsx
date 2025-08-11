import type { SVGProps } from "react";

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M6.94 9.75v7.31" />
      <path d="M6.94 6.94v.01" strokeLinecap="round" />
      <path d="M11.62 17.06v-4.44a2.31 2.31 0 0 1 4.62 0v4.44" />
      <path d="M11.62 14.25h4.62" />
    </svg>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconYouTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2.5" y="6.5" width="19" height="11" rx="3" />
      <path d="M11 10.5v3l3-1.5-3-1.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 bg-teal-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
        {/* Top promo panel */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/50 bg-primary/70 p-8 md:p-12">
          {/* decorative geometry (hidden on mobile) */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5" />
            {/* diagonal bars (refined to match reference) */}
            <div className="absolute right-6 top-6 h-28 w-3 rotate-45 bg-primary/70 rounded-full" />
            <div className="absolute right-28 top-10 h-44 w-3 rotate-45 bg-primary/60 rounded-full" />
            <div className="absolute right-16 top-32 h-40 w-3 rotate-45 bg-primary/50 rounded-full" />
            <div className="absolute right-44 top-20 h-56 w-3 rotate-45 bg-primary/40 rounded-full" />
            {/* center bar */}
            <div className="absolute right-[22%] top-1/2 h-2 w-56 -translate-y-1/2 bg-primary/50 rounded-full" />
            {/* accent bar (primary) */}
            <div className="absolute right-10 top-6 h-9 w-28 rotate-45 rounded-full bg-primary" />
          </div>

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-hero text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
                Vamos construir sua operação de diagnóstico em nuvem
                <span className="text-teal-900"> hoje.</span>
              </h3>
            </div>
            <div className="flex md:justify-end">
              <a
                href="#contato"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/60"
              >
                Fale conosco
              </a>
            </div>
          </div>
        </div>

        {/* Link area */}
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-3">
            <div className="inline-flex select-none items-baseline gap-1">
              <span className="font-hero text-2xl tracking-tight">lab</span>
              <span className="font-hero text-2xl tracking-tight text-primary">PACS</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white">
              Plataforma em nuvem para telerradiologia, laudos e gestão de imagens médicas.
            </p>
          </div>

          {/* Columns */}
          <nav className="md:col-span-9 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold text-white">Produtos</h4>
              <ul className="mt-3 space-y-2 text-white/90">
                <li><a className="hover:text-white" href="#produtos">Laudo Remoto</a></li>
                <li><a className="hover:text-white" href="#produtos">PACS em Nuvem</a></li>
                <li><a className="hover:text-white" href="#produtos">Visor Web</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Soluções</h4>
              <ul className="mt-3 space-y-2 text-white/90">
                <li><a className="hover:text-white" href="#solucoes">Integração RIS/PACS</a></li>
                <li><a className="hover:text-white" href="#solucoes">Teleradiologia</a></li>
                <li><a className="hover:text-white" href="#solucoes">Hospitais e Clínicas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Empresa</h4>
              <ul className="mt-3 space-y-2 text-white/90">
                <li><a className="hover:text-white" href="#sobre">Sobre nós</a></li>
                <li><a className="hover:text-white" href="#carreiras">Carreiras</a></li>
                <li><a className="hover:text-white" href="#contato">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Recursos</h4>
              <ul className="mt-3 space-y-2 text-white/90">
                <li><a className="hover:text-white" href="#recursos">Documentação</a></li>
                <li><a className="hover:text-white" href="#parceiros">Parceiros</a></li>
                <li><a className="hover:text-white" href="#news">Notícias</a></li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 text-sm text-white md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <a aria-label="LinkedIn" href="#" className="rounded-lg p-2 text-white hover:text-white">
              <IconLinkedIn className="h-5 w-5" />
            </a>
            <a aria-label="Instagram" href="#" className="rounded-lg p-2 text-white hover:text-white">
              <IconInstagram className="h-5 w-5" />
            </a>
            <a aria-label="YouTube" href="#" className="rounded-lg p-2 text-white hover:text-white">
              <IconYouTube className="h-5 w-5" />
            </a>
            <a aria-label="X" href="#" className="rounded-lg p-2 text-white hover:text-white">
              <IconX className="h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:ml-auto">
            <span className="text-white/90">Copyright © {year} labPACS</span>
            <a className="hover:text-white" href="#termos">Termos & condições</a>
            <a className="hover:text-white" href="#privacidade">Política de privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
