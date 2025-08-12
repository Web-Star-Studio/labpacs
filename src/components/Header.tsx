import { Button } from "./ui/button";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur border-b border-slate-200/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
                <img className="w-16 h-10 sm:w-20 sm:h-12" src="/logo.webp" alt="Logo" />

                {/* Desktop nav */}
                <nav className="hidden md:block">
                    <ul className="flex gap-10 font-light text-lg">
                        <li className="hover:underline"><a href="#Produtos">Produtos</a></li>
                        <li className="hover:underline"><a href="#Estatisticas">Clientes</a></li>
                        <li className="hover:underline"><a href="#CTA">Empresa</a></li>
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <a href="#contato">
                    <Button
                        variant={"default"}
                        className="hidden md:inline-flex bg-primary text-white font-bold rounded-full px-5 py-3 hover:cursor-pointer hover:bg-primary/90 text-lg"
                    >
                        Fale Conosco
                    </Button>
                </a>

                {/* Mobile menu toggle */}
                <button
                    aria-label="Abrir menu"
                    className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
                    onClick={() => setOpen(v => !v)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M3 12h18M3 18h18" />
                    </svg>
                </button>
            </div>

            {/* Mobile panel */}
            {open && (
                <div className="md:hidden absolute inset-x-0 top-full bg-white/95 backdrop-blur border-b border-slate-200/60 shadow-sm">
                    <nav className="px-4 py-4">
                        <ul className="flex flex-col gap-3 text-base">
                            <li><a className="block px-2 py-2 rounded-lg hover:bg-slate-100" href="#Produtos" onClick={() => setOpen(false)}>Produtos</a></li>
                            <li><a className="block px-2 py-2 rounded-lg hover:bg-slate-100" href="#Estatisticas" onClick={() => setOpen(false)}>Clientes</a></li>
                            <li><a className="block px-2 py-2 rounded-lg hover:bg-slate-100" href="#CTA" onClick={() => setOpen(false)}>Empresa</a></li>
                        </ul>
                        <a
                            href="#contato"
                            className="mt-4 block w-full text-center rounded-xl bg-primary px-5 py-3 text-white shadow-sm hover:bg-primary/90"
                            onClick={() => setOpen(false)}
                        >
                            Fale Conosco
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}