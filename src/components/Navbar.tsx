/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-2"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-8 py-2">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-xl tracking-tight text-gray-900">
            Obba <span className="text-brand-pink-dark">Doces</span>
          </span>
        </div>
        
       <div className="hidden md:flex items-center gap-8 text-sm font-medium">
  <a href="/cardapio" className="hover:text-brand-pink-dark transition-colors">
    Cardápio
  </a>

  <a href="#sobre" className="hover:text-brand-pink-dark transition-colors">
    Diferenciais
  </a>

  <a href="#galeria" className="hover:text-brand-pink-dark transition-colors">
    Galeria
  </a>

  <a href="#depoimentos" className="hover:text-brand-pink-dark transition-colors">
    Clientes
  </a>
</div>

        <div className="flex items-center gap-4">
          <a 
            href="https://instagram.com/obba_docess" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 hover:bg-brand-pink rounded-full transition-colors"
          >
            <Instagram size={20} className="text-gray-700" />
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda." 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <WhatsAppIcon size={18} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
