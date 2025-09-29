import { useState } from "react";
import ContactDialog from "./ContactDialog";

export default function Hero() {
  const [trialOpen, setTrialOpen] = useState(false);
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
      <div className="relative z-10 flex flex-col justify-center items-start p-4 sm:p-6 lg:p-8 pt-24 md:pt-28 pb-12">
        <div className="max-w-7xl w-full mx-auto">
          <div className="inline-block p-2 sm:p-4">
            <h1 className="font-bold uppercase mt-64" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', lineHeight: '0.9' }}>
              <span className="block">Inovação</span>
              <span className="block">em Diagnóstico</span>
            </h1>
          </div>
        </div>
      </div>


      <ContactDialog open={trialOpen} onClose={() => setTrialOpen(false)} title="30 dias grátis" />
    </section>
  );
}