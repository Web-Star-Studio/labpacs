import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect, type FC } from "react";
import type { MouseEvent } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

// Heroicon components
const BeakerIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 01-6.23-.893L4.2 15.3m15.6 0-1.278 4.473a2.25 2.25 0 01-2.14 1.727H7.718a2.25 2.25 0 01-2.14-1.727L4.2 15.3m15.6 0a2.25 2.25 0 00-2.25-2.25H6.45a2.25 2.25 0 00-2.25 2.25m15.6 0h-15.6" />
  </svg>
);

const ShieldCheckIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

const CloudArrowUpIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
  </svg>
);

const ServerStackIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const ChartBarIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const CpuChipIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5M19.5 8.25H21M19.5 12H21m-3.75 3.75H21m-9-1.5h6m-6 3h6m-6-3h6m-6 3h6M12 6.75h.008v.008H12V6.75zm-3.75 0h.008v.008H8.25V6.75zm0 3.75h.008v.008H8.25v-.008zm0 3.75h.008v.008H8.25v-.008zm3.75 0h.008v.008H12v-.008zm0 3.75h.008v.008H12v-.008zm3.75-3.75h.008v.008h-.008v-.008zm0 3.75h.008v.008h-.008v-.008zm-3.75-3.75h.008v.008H12v-.008z" />
  </svg>
);

const ArrowTrendingUpIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625l-6.25 3.75" />
  </svg>
);


interface ProductItem {
  title: string;
  subtitle?: string;
  desc: string;
  image: FC;
  gradient: string;
  accent: string;
  tags: string[];
}

interface ProductCardProps {
  item: ProductItem;
  idx: number;
  hoveredCard: number | null;
  setHoveredCard: (idx: number | null) => void;
}

// Minimalist and Professional Product Card
const ProductCard = ({ item, idx, hoveredCard, setHoveredCard }: ProductCardProps) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (hoveredCard !== idx) return;
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const rotateXValue = 15 * ((y / card.height) - 0.5);
    const rotateYValue = -15 * ((x / card.width) - 0.5);
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      onMouseEnter={() => setHoveredCard(idx)}
      onMouseLeave={() => {
        setHoveredCard(null);
        handleMouseLeave();
      }}
      onMouseMove={handleMouseMove}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`
        relative group cursor-pointer h-full
        ${idx === 0 || idx === 4 ? 'lg:col-span-2' : ''}
        ${idx === 8 ? 'md:col-span-2 lg:col-span-1' : ''}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl group-hover:from-slate-200 transition-colors duration-300" />
      <motion.div
        className="relative h-full bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-slate-200/80 overflow-hidden"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 mb-6">
            <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
              <item.image />
            </div>
          </div>

          <div className="flex-grow flex flex-col">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-sm text-primary font-medium mb-4">
                {item.subtitle}
              </p>
            )}
            <p className="text-slate-600 text-sm leading-relaxed flex-grow">
              {item.desc}
            </p>
          </div>

          <div className="flex-shrink-0 mt-6">
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string, tagIdx: number) => (
                <span
                  key={tagIdx}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-6 right-6 text-slate-400 group-hover:text-primary transition-colors duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};


// Main Products Component
export default function Products() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Enhanced product data with gradient colors
  const items: ProductItem[] = [
    {
      title: "Visualizador de Imagens DICOM",
      desc: "Visualize, manipule e analise imagens médicas com nossa ferramenta poderosa e intuitiva, compatível com todos os padrões DICOM.",
      image: BeakerIcon,
      gradient: "from-primary to-primary/70",
      accent: "#007BFF",
      tags: ["DICOM", "Visualização", "Análise"],
    },
    {
      title: "Armazenamento em Nuvem (PACS)",
      subtitle: "Segurança e Acessibilidade",
      desc: "Guarde seus exames em um ambiente seguro e totalmente em conformidade com a LGPD, acessível de qualquer lugar.",
      image: CloudArrowUpIcon,
      gradient: "from-emerald-500 to-emerald-400",
      accent: "#28a745",
      tags: ["Nuvem", "Segurança", "LGPD"],
    },
    {
      title: "Portal de Resultados Online",
      desc: "Disponibilize os resultados dos exames para médicos e pacientes de forma rápida, segura e com a identidade visual da sua clínica.",
      image: ServerStackIcon,
      gradient: "from-purple-500 to-purple-400",
      accent: "#6f42c1",
      tags: ["Portal Online", "Resultados", "Marca Branca"],
    },
    {
      title: "Laudos a Distância (Telerradiologia)",
      desc: "Conecte-se a uma rede de especialistas para laudar seus exames, otimizando o tempo e a qualidade do diagnóstico.",
      image: ArrowTrendingUpIcon,
      gradient: "from-sky-500 to-sky-400",
      accent: "#0dcaf0",
      tags: ["Telerradiologia", "Laudos", "Especialistas"],
    },
    {
      title: "Inteligência Artificial para Diagnóstico",
      subtitle: "Análise Preditiva",
      desc: "Utilize algoritmos de IA para auxiliar no diagnóstico, identificando padrões e anomalias com alta precisão e agilidade.",
      image: CpuChipIcon,
      gradient: "from-rose-500 to-rose-400",
      accent: "#dc3545",
      tags: ["IA", "Diagnóstico", "Precisão"],
    },
    {
      title: "Gestão de Clínicas e Hospitais",
      desc: "Sistema completo para gestão de agendamentos, faturamento, prontuários eletrônicos e mais, tudo integrado em uma única plataforma.",
      image: ChartBarIcon,
      gradient: "from-amber-500 to-amber-400",
      accent: "#ffc107",
      tags: ["Gestão", "ERP", "Integração"],
    },
    {
      title: "Compartilhamento Avançado",
      desc: "Compartilhe exames e laudos de forma segura com outros médicos ou instituições, utilizando links temporários e senhas.",
      image: ShieldCheckIcon,
      gradient: "from-indigo-500 to-indigo-400",
      accent: "#6610f2",
      tags: ["Compartilhamento", "Segurança", "Colaboração"],
    },
    {
      title: "Assinatura Digital e Validade Jurídica",
      desc: "Garanta a autenticidade e validade jurídica dos laudos com assinatura digital padrão ICP-Brasil.",
      image: ShieldCheckIcon,
      gradient: "from-teal-500 to-teal-400",
      accent: "#20c997",
      tags: ["Assinatura Digital", "ICP-Brasil", "Validade Jurídica"],
    },
    {
      title: "Relatórios e Dashboards",
      desc: "Monitore o desempenho da sua clínica com relatórios detalhados e dashboards intuitivos sobre produtividade, faturamento e mais.",
      image: ChartBarIcon,
      gradient: "from-orange-500 to-orange-400",
      accent: "#fd7e14",
      tags: ["Analytics", "Dashboards", "BI"],
    },
  ];

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startLeft: 0 });

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    dragRef.current.active = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.startLeft = el.scrollLeft;
    el.setPointerCapture?.(e.pointerId);
    (el.style as any).scrollSnapType = "none";
    el.classList.add("cursor-grabbing", "select-none");
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !dragRef.current.active) return;
    const x = e.clientX - dragRef.current.startX;
    el.scrollLeft = dragRef.current.startLeft - x;
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    dragRef.current.active = false;
    el.releasePointerCapture?.(e.pointerId);
    (el.style as any).scrollSnapType = "";
    el.classList.remove("cursor-grabbing", "select-none");
  };



  return (
    <section id="Produtos" className="relative w-full py-20 md:py-32 bg-slate-50 text-slate-800 overflow-hidden">


      <div className="relative mx-auto max-w-7xl px-6 md:px-10" ref={containerRef}>
        {/* Minimalist Title */}
        <motion.div
          className="mb-12 md:mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Soluções de Ponta para Diagnóstico
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Tecnologia, segurança e inovação para sua clínica ou hospital.
          </p>
        </motion.div>



        {/* Minimalist Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: 2000 }}>
          {items.map((item, idx) => (
            <ProductCard 
              key={idx} 
              item={item} 
              idx={idx} 
              hoveredCard={hoveredCard} 
              setHoveredCard={setHoveredCard} 

            />
          ))}
        </div>

        {/* Minimalist Mobile Scroll */}
        <div className="mt-16 lg:hidden">
          <div
            ref={scrollRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onPointerLeave={onPointerUp}
            className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 cursor-grab"
          >
            {items.map((item, idx) => (
              <motion.div
                key={`mobile-${idx}`}
                className="flex-none w-[85%] snap-center"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-slate-200/80 h-full">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <item.image />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
