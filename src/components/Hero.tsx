export default function Hero() {
    return (
        <section className="relative w-full h-[48rem]">
            {/* Vídeo de fundo */}
            <video
                className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
                src="/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
            />
            {/* Overlay para melhorar contraste do texto */}
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            {/* Conteúdo do hero sobre a imagem */}
            <div className="relative z-10 h-full top-20 flex flex-col justify-center gap-2 px-6 md:px-12">
                <h2 className="text-white font-hero text-5xl sm:text-6xl md:text-5xl uppercase font-semibold max-w-[55%]">Exames integrados em <span>nuvem</span></h2>
                <h2 className="text-white font-hero text-6xl sm:text-7xl md:text-6xl uppercase font-semibold max-w-[80%]">de fácil acesso, simples assim!</h2>
            </div>
        </section>
    )
}