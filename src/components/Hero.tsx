/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "./WhatsAppIcon";
import obbaDocesLogo from "../assets/images/obba_doces_logo_1779586898937.png";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-brand-pink/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-brand-pink-dark font-semibold text-sm mb-6 border border-brand-pink shadow-sm">
            <Heart size={16} fill="currentColor" />
            <span>Feito com amor, de forma artesanal</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Doces feitos com amor para deixar seus momentos ainda mais <span className="text-brand-pink-dark italic font-serif">especiais</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            Bolos, doces e churros artesanais feitos sob encomenda com ingredientes selecionados e muito carinho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-4 rounded-3xl hover:scale-105 active:scale-95 transition-all shadow-xl max-w-full"
            >
              <WhatsAppIcon size={24} className="flex-shrink-0" />
              <span className="text-center leading-tight">WhatsApp Encomendas</span>
            </a>
            <Link
              to="/cardapio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white text-gray-800 text-lg font-bold px-8 py-4 rounded-3xl border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
            >
              Ver Cardápio
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src={obbaDocesLogo}
              alt="Obba Doces Logo and Products" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating tags */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-pink-50"
          >
            <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center text-pink-500">
              🍰
            </div>
            <div>
              <p className="font-bold text-sm">Bolos Sob Medida</p>
              <p className="text-xs text-gray-500">Do jeitinho que você sonhou</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-blue-50"
          >
            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-blue-500">
              ✨
            </div>
            <div>
              <p className="font-bold text-sm">Gourmet Quality</p>
              <p className="text-xs text-gray-500">100% Artesanal</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
