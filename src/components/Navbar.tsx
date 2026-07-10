/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
   <motion.nav
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="fixed left-0 right-0 top-0 z-50"
>
  <div
    className="
      flex
      w-full
      items-center
      justify-between
      border-b
      border-black/5
      bg-white
      px-5
      py-4
      shadow-sm
      sm:px-8
      lg:px-12
    "
  >
        {/* Nome da marca */}
        <a
          href="/"
          aria-label="Página inicial da Obba Doces"
          className="
            flex
            shrink-0
            items-center
            text-xl
            font-extrabold
            tracking-[-0.04em]
            sm:text-2xl
          "
        >
          <span className="text-[#1F2635]">Obba</span>
          <span className="ml-1 text-[#E06D8A]">Doces</span>
        </a>

        {/* Links do menu — desktop */}
        <div className="hidden items-center gap-8 text-sm font-medium text-[#1F2635] lg:flex">
          <a
            href="/cardapio"
            className="transition-colors hover:text-[#E06D8A]"
          >
            Cardápio
          </a>

          <a
            href="#sobre"
            className="transition-colors hover:text-[#E06D8A]"
          >
            Diferenciais
          </a>

          <a
            href="#galeria"
            className="transition-colors hover:text-[#E06D8A]"
          >
            Instagram
          </a>

          <a
            href="#depoimentos"
            className="transition-colors hover:text-[#E06D8A]"
          >
            Clientes
          </a>
        </div>

        {/* Redes sociais e WhatsApp */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="https://instagram.com/obba_docess"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Obba Doces"
            className="
              hidden
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-[#1F2635]
              transition
              hover:bg-[#E06D8A]/10
              hover:text-[#E06D8A]
              sm:flex
            "
          >
            <Instagram size={21} />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Obba%20Doces%20e%20gostaria%20de%20fazer%20uma%20encomenda."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fazer encomenda pelo WhatsApp"
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#25D366]
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-md
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#20BA5A]
              hover:shadow-lg
              active:translate-y-0
              sm:px-5
            "
          >
            <FaWhatsapp size={20} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
