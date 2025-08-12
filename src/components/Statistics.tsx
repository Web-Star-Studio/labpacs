import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

function useCountUp(activate: boolean, to: number, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!activate) return;
    let start: number | null = null;
    const from = 0;
    const diff = to - from;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(from + diff * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [activate, to, duration]);
  return value;
}

function StatItem({ s, delay = 0 }: { s: Stat; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(inView, s.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.7, delay }}
      className="flex flex-col items-center justify-center gap-2 text-center"
    >
      <div className="text-white font-hero font-semibold tracking-tight">
        <span className="text-3xl sm:text-5xl md:text-6xl">{s.prefix ?? "+"}{count.toLocaleString("pt-BR")}{s.suffix ?? ""}</span>
      </div>
      <div className="text-white text-xs sm:text-base md:text-lg">{s.label}</div>
    </motion.div>
  );
}

export default function Statistics() {
  const stats: Stat[] = [
    { value: 1800000, prefix: "+", suffix: "", label: "Exames / Ano" },
    { value: 100, prefix: "+", label: "Clientes no Brasil" },
    { value: 200, prefix: "+", label: "Radiologistas" },
  ];

  return (
    <section id="Estatisticas" className="relative w-full">
      {/* Fundo com imagem + overlay */}
      <div className="relative h-[14rem] sm:h-[16rem] md:h-[18rem] w-full overflow-hidden">
        <img src="/hero.png" alt="Imagem de fundo" className="absolute inset-0 w-full h-full object-cover object-[center_30%]" />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/20" aria-hidden="true" />

        {/* Conteúdo */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {stats.map((s, i) => (
              <div key={i} className="py-1 sm:py-0 sm:px-8">
                <StatItem s={s} delay={i * 0.05} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
