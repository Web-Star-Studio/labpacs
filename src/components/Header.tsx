import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="w-full bg-white/90 fixed top-0 left-0 z-50 py-5 flex items-center justify-evenly text-lg">
                <img className="w-20 h-12" src="/logo.webp" alt="Logo" />
                <nav className="">
                    <ul className="flex gap-10 font-light">
                        <li className="hover:underline"><a href="#Produtos">Produtos</a></li>
                        <li className="hover:underline"><a href="#Clientes">Clientes</a></li>
                        <li className="hover:underline"><a href="#Empresa">Empresa</a></li>
                    </ul>
                </nav> 
                <Button variant={"default"} className="bg-primary text-white font-bold rounded-full p-5 hover:cursor-pointer hover:bg-primary/90 text-lg">Fale Conosco</Button>
        </header>
    )
}