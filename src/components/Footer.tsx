/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Clock, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <span className="font-display font-bold text-3xl tracking-tight text-gray-900 mb-6 block">
            Obba <span className="text-brand-pink-dark">Doces</span>
          </span>
          <p className="text-gray-600 max-w-sm leading-relaxed mb-8">
            Doceria artesanal focada em levar doçura e amor para os seus momentos mais importantes. Visual clean, sabor premium e muito carinho em cada detalhe.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/obba_docess" className="w-12 h-12 bg-brand-pink/30 rounded-2xl flex items-center justify-center text-brand-pink-dark hover:bg-brand-pink transition-colors">
              <Instagram size={24} />
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda." 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors"
            >
              <WhatsAppIcon size={24} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-gray-600">
            <li><a href="#categorias" className="hover:text-brand-pink-dark transition-colors">Categorias</a></li>
            <li><a href="#sobre" className="hover:text-brand-pink-dark transition-colors">Por que escolher</a></li>
            <li><a href="#Instagram" className="hover:text-brand-pink-dark transition-colors">Instagram</a></li>
            <li><a href="#depoimentos" className="hover:text-brand-pink-dark transition-colors">Depoimentos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Informações</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-brand-pink-dark mt-1 flex-shrink-0" />
              <div className="flex flex-col text-sm">
                <span>Seg a Sex: 08:30 às 20:00</span>
                <span>Sáb e Dom: 09:00 às 18:00</span>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <MapPin size={18} className="text-brand-pink-dark mt-1 flex-shrink-0" />
              <div className="flex flex-col">
                <span>Rua Bernardo Correia Leitão, 651</span>
                <span>Parque Regina, São Paulo - SP</span>
              </div>
            </li>
            <li className="flex items-center gap-3 text-green-600 hover:text-green-700 font-bold underline">
              <WhatsAppIcon size={18} />
              <a 
                href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda." 
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Obba Doces. Todos os direitos reservados.</p>
        <p>Desenvolvido com ❤️ para os melhores momentos.</p>
      </div>
    </footer>
  );
}
