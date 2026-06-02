/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Gift } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function CTA() {
  return (
    <section className="pt-4 pb-8 px-6">
      <div className="max-w-4xl mx-auto glass-card p-10 md:p-12 text-center relative overflow-hidden">
        {/* Decor */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-pink/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-2xl" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="w-20 h-20 bg-brand-pink mx-auto rounded-3xl flex items-center justify-center text-brand-pink-dark mb-6 shadow-lg">
            <Gift size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronta para adoçar o seu dia?
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-lg mx-auto">
            Faça sua encomenda agora mesmo e garanta os melhores doces e bolos artesanais para sua festa ou momento especial.
          </p>
          
          <a 
            href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg sm:text-xl font-bold px-6 sm:px-12 py-4 sm:py-5 rounded-[2rem] hover:scale-105 active:scale-95 transition-all shadow-xl max-w-full"
          >
            <WhatsAppIcon size={28} className="flex-shrink-0" />
            <span className="text-center leading-tight">WhatsApp Encomendas</span>
          </a>
          
          <div className="mt-8 text-sm text-gray-500 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center">
            <span>Seg a Sex: 08:30 às 20:00</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span>Sáb e Dom: 09:00 às 18:00</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
