import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F2635] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        {/* Marca */}
        <div>
          <a
            href="/"
            className="inline-flex items-center text-2xl font-extrabold tracking-[-0.04em]"
          >
            <span className="text-white">Obba</span>
            <span className="ml-1 text-[#E06D8A]">Doces</span>
          </a>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Bolos, doces e encomendas artesanais preparados para aniversários,
            presentes e momentos especiais.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white/90">
            Navegação
          </h3>

          <nav className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <a href="/cardapio" className="transition hover:text-[#E06D8A]">
              Cardápio
            </a>

            <a href="#sobre" className="transition hover:text-[#E06D8A]">
              Diferenciais
            </a>

            <a href="#galeria" className="transition hover:text-[#E06D8A]">
              Galeria
            </a>

            <a
              href="#como-encomendar"
              className="transition hover:text-[#E06D8A]"
            >
              Como encomendar
            </a>

            <a
              href="#depoimentos"
              className="transition hover:text-[#E06D8A]"
            >
              Depoimentos
            </a>
          </nav>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white/90">
            Contato
          </h3>

          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>Seg a Sex: 08:30 às 20:00</p>
            <p>Sáb e Dom: 09:00 às 18:00</p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://instagram.com/obba_docess"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Obba Doces"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#E06D8A]"
            >
              <Instagram size={21} />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Obba%20Doces%20e%20gostaria%20de%20fazer%20uma%20encomenda."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Obba Doces"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] transition hover:bg-[#20BA5A]"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>© 2026 Obba Doces. Todos os direitos reservados.</p>

        <p>
          Site desenvolvido por{" "}
          <a
            href="https://ghzstudiooficial.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/80 transition hover:text-[#E06D8A]"
          >
            GHZ Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
