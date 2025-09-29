import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactDialog from "./ContactDialog";

const navLinks = [
  { href: "#Produtos", label: "Produtos" },
  { href: "#parceiros", label: "Clientes" },
  { href: "#CTA", label: "Empresa" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [trialOpen, setTrialOpen] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);

  const easeIn: [number, number, number, number] = [0.12, 0, 0.39, 0];
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const menuVars = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { duration: 0.4, ease: easeIn } },
    exit: { x: "100%", transition: { duration: 0.4, ease: easeOut } },
  };

  // Variantes para animação de entrada dos itens
  const listVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 12, filter: "blur(2px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: easeOut } },
  };

  const buttonColorClass = scrolled || open ? 'text-slate-800 border-2 border-slate-400 hover:bg-cyan-500 hover:text-white transition-colors border-cyan-200 hover:border-cyan-500' : 'text-white border-2 border-white/80 hover:bg-white/10 transition-colors';

  return (
    <>
      <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled || open ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto flex h-20 md:h-24 items-center justify-between px-4 sm:px-6">
          <a href="#" className="block">
            <img src="/logo.webp" alt="LABPACS" className="h-8 sm:h-9 lg:h-14 w-auto" />
          </a>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMenu}
              className={`px-4 py-2 text-xs md:text-sm lg:text-sm font-semibold uppercase tracking-wider border rounded-full transition-colors hover:cursor-pointer ${buttonColorClass}`}
            >
              Menu
            </button>
            <a
              href="#contato"
              className={`hidden md:block px-4 py-2 text-xs md:text-sm lg:text-sm font-semibold uppercase tracking-wider border rounded-full transition-colors ${buttonColorClass}`}
            >
              Fale Conosco
            </a>
            <button
              onClick={() => setTrialOpen(true)}
              className="hidden md:block px-4 py-2 text-xs md:text-sm lg:text-sm font-semibold uppercase tracking-wider rounded-full bg-cyan-500 text-white border-2 border-cyan-400 hover:bg-cyan-400 transition-colors"
            >
              30 dias grátis
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 text-white origin-right overflow-hidden"
          >
            {/* Camadas de fundo "aurora" com blur e blend modes */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -top-24 -left-16 w-[60vmax] h-[60vmax] rounded-full blur-3xl"
                   style={{ background: "radial-gradient(closest-side, rgba(34,211,238,0.35), transparent 70%)" }} />
              <div className="absolute top-1/3 -right-24 w-[50vmax] h-[50vmax] rounded-full blur-3xl"
                   style={{ background: "radial-gradient(closest-side, rgba(8,145,178,0.35), transparent 70%)" }} />
              <motion.div
                className="absolute bottom-0 left-1/4 w-[40vmax] h-[40vmax] rounded-full blur-2xl mix-blend-screen"
                style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.22), transparent 70%)" }}
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Gradiente base para profundidade */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-slate-900 to-cyan-800/80" />

            <div className="relative container mx-auto flex h-full flex-col justify-center p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <nav className="text-left">
                    <motion.ul
                      variants={listVars}
                      initial="hidden"
                      animate="show"
                    >
                      {navLinks.map((link) => (
                        <motion.li key={link.label} variants={itemVars} className="mb-2">
                          <a
                            href={link.href}
                            onClick={toggleMenu}
                            className="group relative text-4xl md:text-7xl font-extrabold tracking-tighter inline-block"
                          >
                            <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
                              {link.label}
                            </span>
                            <span className="absolute left-0 -bottom-1 h-1 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                          </a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </nav>
                </div>
                <div className="text-left flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-4">Contato</h3>
                    <a href="mailto:contato@labpacs.com.br" className="text-lg text-cyan-400 hover:text-white">contato@labpacs.com.br</a>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-4">Redes Sociais</h3>
                    <div className="flex gap-4">
                      <a href="https://www.instagram.com/labpacs/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">Instagram</a>
                      <a href="https://www.facebook.com/Labpacs" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">Facebook</a>
                    </div>
                  </div>
                  {/* Ações rápidas */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://meuexameonline.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-white font-semibold uppercase tracking-wider shadow-sm hover:bg-cyan-400 transition-colors"
                    >
                      Acesse o Portal
                    </a>
                    <a
                      href="https://meuexameonline.com.br/assets/Manual_de_Uso_do_LAUDOREMOTO-LABPACS_V1.0_assinado_assinado.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-white font-semibold uppercase tracking-wider backdrop-blur-md hover:bg-white/20 transition-colors"
                    >
                      Download do manual
                    </a>
                  </div>
                </div>
              </div>
              {/* Botão fechar com efeito glass */}
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactDialog open={trialOpen} onClose={() => setTrialOpen(false)} title="30 dias grátis" />
    </>
  );
}