import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function CTA() {
  return (
    <section id="CTA" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background decor - aurora cyan */}
      <div className="absolute inset-0 -z-10">
        {/* Gradiente base leve para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-white" />

        {/* Blobs com blur e transparência */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(34,211,238,0.30), transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-10 h-[30rem] w-[30rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(8,145,178,0.20), transparent 70%)" }}
        />

        {/* Movimento sutil contínuo */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full blur-2xl mix-blend-screen"
          style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.18), transparent 70%)" }}
          animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          {/* Left: Content */}
          <div className="flex flex-col gap-6 md:gap-7">
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/60 bg-white/80 px-3 py-1.5 text-xs md:text-sm text-primary shadow-sm backdrop-blur"
            >
              • Soluções em nuvem para diagnóstico por imagem
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-hero text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-gray-900"
            >
              Atuando há mais de <span className="text-primary font-semibold">11 anos</span> no mercado, com
              <span className="text-primary font-semibold"> produtos validados</span>, e o
              <span className="text-primary font-semibold"> reconhecimento dos nossos clientes!</span>
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              className="font-hero text-primary text-2xl sm:text-3xl md:text-4xl font-semibold"
            >
              Transforme gargalos em Resultados!
            </motion.h3>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur px-5 py-5 md:px-6 md:py-6 shadow-md"
            >
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Radiologista, monte a sua central de laudos:
              </h4>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                É possível, sim, ter a própria central de laudos, onde você ou sua equipe de radiologistas podem
                acessar as imagens e a plataforma de laudos.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/60"
              >
                Fale com um especialista
              </a>
            </motion.div>
          </div>

          {/* Right: Illustration card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative"
          >
            {/* Glow behind */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-2xl" />

            {/* Gradient ring frame */}
            <div className="rounded-[1.75rem] bg-gradient-to-br from-primary/30 via-primary/20 to-transparent p-[1px] shadow-xl">
              <div className="overflow-hidden rounded-[1.65rem] border border-slate-200/60 bg-white/90 backdrop-blur">
                <img
                  src="/cta-img.png"
                  alt="Demonstração da plataforma em nuvem de laudos"
                  className="h-full w-full object-cover md:aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
