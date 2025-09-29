import type { SVGProps } from "react";

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v5h3v-5h2.1l.4-3H14v-1.5a.5.5 0 0 1 .5-.5H17V8h-2Z" />
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


        {/* ANVISA registry */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
          <img
            src="https://aprendizagem.anvisa.gov.br/theme/mb2nl/assets/img/logo-anvisa-branco.png"
            alt="Anvisa"
            className="h-5 sm:h-6 w-auto"
            loading="lazy"
          />
          <span className="text-white/90 text-sm leading-snug break-words">
            Registro ANVISA nº 83011080001 - LABPACS-LAUDOREMOTO
          </span>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 text-sm text-white md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <a aria-label="Instagram" href="https://www.instagram.com/labpacs/" target="_blank" rel="noopener noreferrer" className="rounded-full p-3 md:p-2 text-white hover:text-white">
              <IconInstagram className="h-5 w-5" />
            </a>
            <a aria-label="Facebook" href="https://www.facebook.com/Labpacs" target="_blank" rel="noopener noreferrer" className="rounded-full p-3 md:p-2 text-white hover:text-white">
              <IconFacebook className="h-5 w-5" />
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
