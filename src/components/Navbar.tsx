/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Search, X } from "lucide-react";
import logoObba from "../assets/images/logo-obba.webp";export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div
        className="
          relative
          flex
          min-h-20
          w-full
          items-center
          justify-between
          border-b
          border-black/5
          bg-white
          px-5
          shadow-sm
          sm:px-8
          lg:px-12
        "
      >
        {/* Menu à esquerda */}
        <button
          type="button"
          onClick={() => setMenuAberto((estadoAtual) => !estadoAtual)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          className="
            flex
            min-h-11
            items-center
            gap-2
            text-sm
            font-medium
            text-[#1F2635]
            transition-colors
            hover:text-[#E06D8A]
          "
        >
          {menuAberto ? <X size={21} /> : <Menu size={21} />}

        </button>

        {/* Logo centralizada */}
        <a
         href="/"
         aria-label="Página inicial da Obba Doces"
         className="
         absolute
         left-1/2
         -translate-x-1/2
         "
         >
         <img
         src={logoObba}
         alt="Obba Doces"
         className="h-16 w-auto object-contain sm:h-20"
         />
         </a>

        {/* Link à direita */}
        <a
       href="/cardapio"
        aria-label="Pesquisar no cardápio"
       className="
       flex
       h-11
       w-11
       items-center
       justify-center
       text-[#1F2635]
       transition-colors
       hover:text-[#E06D8A]
       "
       >
       <Search size={21} />
       </a>
        </div>

      {/* Menu suspenso */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="
              border-b
              border-black/5
              bg-white
              px-5
              py-5
              shadow-md
              sm:px-8
              lg:px-12
            "
          >
            <div
              className="
                mx-auto
                flex
                max-w-7xl
                flex-col
                gap-4
                text-sm
                font-medium
                text-[#1F2635]
                sm:flex-row
                sm:items-center
                sm:justify-center
                sm:gap-8
              "
            >
              <a
                href="/cardapio"
                onClick={fecharMenu}
                className="transition-colors hover:text-[#E06D8A]"
              >
                Cardápio
              </a>

              <a
                href="#sobre"
                onClick={fecharMenu}
                className="transition-colors hover:text-[#E06D8A]"
              >
                Diferenciais
              </a>

              <a
                href="#galeria"
                onClick={fecharMenu}
                className="transition-colors hover:text-[#E06D8A]"
              >
                Instagram
              </a>

              <a
                href="#depoimentos"
                onClick={fecharMenu}
                className="transition-colors hover:text-[#E06D8A]"
              >
                Clientes
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}