import React, { useEffect, useRef } from "react";

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
};

export default function ContactDialog({ open, onClose, title = "Solicite 30 dias grátis" }: ContactDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  function onBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder de envio: aqui poderemos integrar com API/email posteriormente
    onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-center justify-center px-4"
      onMouseDown={onBackdropClick}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        ref={dialogRef}
        className="relative z-[61] w-full max-w-3xl rounded-2xl bg-white p-8 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            <p className="mt-1 text-sm sm:text-base text-gray-600">Preencha os dados e entraremos em contato.</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="cd-nome" className="mb-1 block text-sm font-medium text-gray-700">Nome</label>
              <input
                id="cd-nome"
                name="nome"
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="cd-email" className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input
                id="cd-email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cd-telefone" className="mb-1 block text-sm font-medium text-gray-700">Telefone</label>
            <input
              id="cd-telefone"
              name="telefone"
              type="tel"
              pattern="[0-9()+\-\s]{8,}"
              title="Informe um telefone válido"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label htmlFor="cd-mensagem" className="mb-1 block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea
              id="cd-mensagem"
              name="mensagem"
              rows={4}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              placeholder="Conte um pouco sobre sua necessidade"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-500"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
