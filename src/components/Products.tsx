import { motion } from "framer-motion";
import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
 

// Removidos ícones não utilizados do layout atual dos cards

export default function Products() {
  // Adicione opcionalmente `image` por item para definir uma imagem específica por card
  const items = [
    {
      title: "Sistema PACS",
      desc: "Banco de dados em DICOM que armazena os exames, proporcionando segurança e velocidade para localizar os pacientes e as suas imagens.",
      image: "https://www.labpacs.com.br/img/products/database.webp",
      bg: "https://source.unsplash.com/1200x800/?pacs,dicom,server",
    },
    {
      title: "Work List - Segurança no fluxo da imagem",
      desc: "Solução que integra os dados do paciente nos equipamentos de imagem de forma automatica. Gerando mais segurança e volocidade ao fluxo dos exames por imagem.",
      image: "https://www.labpacs.com.br/img/products/worklist.webp",
      bg: "https://source.unsplash.com/1200x800/?workflow,medical,imaging",
    },
    {
      title: "Robô de integração para sistemas legados",
      desc: "Utilizando um modelo ágil em computação, efetuamos a integração do sistema gestor da CLINICA/HOSPITAL com as soluções de imagem da LABPACS.",
      image: "https://www.labpacs.com.br/img/products/integration.webp",
      bg: "https://source.unsplash.com/1200x800/?integration,automation,api",
    },
    {
      title: "Impressão    sob demanda",
      desc: "Solução para imprimir os exames por imagem no momento da entrega ao paciente, evitando acúmulos e gastos.",
      image: "https://www.labpacs.com.br/img/products/print.webp",
      bg: "https://source.unsplash.com/1200x800/?printer,printing,office",
    },
    {
      title: "Laudo Remoto Plataforma em nuvem",
      desc: "Solução que integra clínicas, médicos e pacientes, facilitando o acesso a exames de imagem e laudos pela internet.",
      image: "https://www.labpacs.com.br/img/products/cloud.webp",
      bg: "https://source.unsplash.com/1200x800/?cloud,healthcare",
    },
    {
      title: "Servidor de impressão DICOM",
      desc: "Solução que permite a impressão de exames em papel, gerando economia, praticidade, com muita qualidade.",
      image: "https://www.labpacs.com.br/img/products/server.webp",
      bg: "https://source.unsplash.com/1200x800/?server,printer,datacenter",
    },
    {
      title: "Visualização de exames",
      desc: "Visualizador DICOM, que permite abrir o exame local ou web, otimizando o processo, gerando velocidade, economia, e mais segurança para a CLINICA/HOSPITAL, médicos e pacientes.",
      image: "https://www.labpacs.com.br/img/products/responsive.webp",
      bg: "https://source.unsplash.com/1200x800/?radiology,monitor",
    },
    {
      title: "Gravação de exames em CD/DVD",
      desc: "Solução que permite o envio dos exames para uma gravadora num computador windows.",
      image: "https://www.labpacs.com.br/img/products/record.webp",
      bg: "https://source.unsplash.com/1200x800/?cd,dvd,disc,computer",
    },
    {
      title: "Estação de trabalho DICOM",
      desc: "Solução que simula uma WORK-STATION, tendo as seguintes funcionalidade: MINI-PACS, Gravação CD-DVD, Visualizador de Exames, Impressão em Pepel Películas!",
      image: "https://www.labpacs.com.br/img/products/network.webp",
      bg: "https://source.unsplash.com/1200x800/?workstation,medical,computer",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startLeft: 0 });

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    dragRef.current.active = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.startLeft = el.scrollLeft;
    el.setPointerCapture?.(e.pointerId);
    // desativa snap durante o arrasto para uma experiência suave
    (el.style as any).scrollSnapType = "none";
    el.classList.add("cursor-grabbing", "select-none");
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const el = scrollRef.current;
    if (!el) return;
    const dx = e.clientX - dragRef.current.startX;
    el.scrollLeft = dragRef.current.startLeft - dx;
    e.preventDefault();
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    dragRef.current.active = false;
    el.releasePointerCapture?.(e.pointerId);
    // reativa snap (snap-x snap-mandatory via classes)
    (el.style as any).scrollSnapType = "";
    el.classList.remove("cursor-grabbing", "select-none");
  };

  return (
    <section id="Produtos" className="relative w-full py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Título assimétrico */}
        <div className="mb-10 md:mb-14">
          <h2 className="font-hero uppercase tracking-tight leading-[0.95]">
            <span className="block text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] text-primary font-light">LAUDO</span>
            <span className="block -mt-2 text-[3.25rem] sm:text-[4rem] md:text-[4.75rem] text-primary font-semibold">REMOTO</span>
          </h2>
        </div>

        {/* Descrição */}
        <p className="max-w-3xl text-lg md:text-xl text-foreground/80 mb-12 md:mb-16">
          Tenha mais flexibilidade com a nossa plataforma de laudos. Mais segurança numa plataforma
          centralizada dos exames para o médico radiologista e conforto para o paciente que acessará os laudos
          e imagens pela internet
        </p>

        {/* Carousel horizontal com snap e setas */}
        <div className="relative">
          

          <div
            ref={scrollRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onPointerLeave={onPointerUp}
            className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-6 -mx-6 px-6 md:-mx-10 md:px-10 cursor-grab"
          >
            {items.map(({ title, desc, image }, idx) => (
              <motion.div
                key={idx}
                data-slide="true"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.7, delay: 0.04 * idx }}
                className="flex-none w-[85%] sm:w-[60%] lg:w-[40%] xl:w-[32%] 2xl:w-[28%] snap-center"
              >
                <div
                  tabIndex={0}
                  className="group relative h-72 sm:h-[20rem] md:h-[22rem] lg:h-[24rem] w-full overflow-hidden rounded-[2rem] bg-white p-6 shadow-md ring-1 ring-black/5 transition-all duration-300 ease-out hover:shadow-xl hover:ring-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {/* Ícone no canto superior esquerdo */}
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="absolute top-6 left-6 h-16 w-16 md:h-20 md:w-20 object-contain rounded-md ring-1 ring-primary/30 bg-white/60"
                  />
                  {/* Conteúdo frontal (título abaixo do ícone) */}
                  <div className="relative z-10 flex h-full flex-col justify-start transition-opacity duration-500 group-hover:opacity-0 pt-28 md:pt-32 pr-6">
                    <h3 className="font-sans text-2xl md:text-3xl font-bold text-primary leading-tight text-left uppercase">{title}</h3>
                  </div>

                  {/* Overlay com cor primária + descrição (aparece no hover) */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                    <div className="absolute inset-0 bg-primary" />
                    <div className="relative z-10 flex h-full flex-col justify-end p-6">
                      <h3 className="text-white text-lg md:text-xl font-bold leading-tight text-left uppercase font-sans">{title}</h3>
                      <p className="mt-2 text-white/90 text-sm md:text-base leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}
