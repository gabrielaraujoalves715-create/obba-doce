/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import chocolateStrawberryCake from "../assets/images/chocolate_strawberry_cake_1779651046602.png";
import eggFilled from "../assets/images/egg_filled_1779649001334.png";
import eggCollection from "../assets/images/egg_collection_1779649017247.png";
import chocolateCake from "../assets/images/chocolate_cake_1779649032721.png";

const IMAGES = [
  {
    url: chocolateStrawberryCake,
    alt: "Bolo de chocolate com morangos da Obba Doces",
    size: "",
  },
  {
    url: eggFilled,
    alt: "Ovos de Páscoa recheados artesanais",
    size: "",
  },
  {
    url: eggCollection,
    alt: "Coleção de ovos de Páscoa decorados",
    size: "",
  },
  {
    url: chocolateCake,
    alt: "Bolo de chocolate artesanal",
    size: "",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="pt-10 pb-6 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Acompanhe nossos bastidores</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-[2rem] overflow-hidden ${img.size}`}
            >
              <img 
                src={img.url} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={img.alt}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-pink-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <Instagram size={24} className="text-brand-pink-dark" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-8 w-full text-center">
          <p className="text-gray-600 mb-4 text-base sm:text-lg max-w-xl">
            Clique aqui e siga nosso perfil para acompanhar as novidades e encomendas do dia a dia!
          </p>
          <motion.a
            href="https://instagram.com/obba_docess"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center text-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white text-base sm:text-lg font-bold px-6 sm:px-10 py-3.5 rounded-full transition-all shadow-xl hover:shadow-2xl max-w-full"
          >
            <Instagram size={24} className="flex-shrink-0" />
            <span className="text-center leading-tight">Seguir nosso Instagram</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
