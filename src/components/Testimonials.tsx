/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "../types";

const TESTIMONIALS = [
  { 
    id: '1', 
    name: 'Juliana Silva', 
    text: 'Os doces chegaram perfeitos e deliciosos! O capricho na embalagem é incrível.', 
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120'
  },
  { 
    id: '2', 
    name: 'Mariana Costa', 
    text: 'Todo mundo elogiou o bolo da festa. Além de lindo, estava super fofinho!', 
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120'
  },
  { 
    id: '3', 
    name: 'Ana Beatriz', 
    text: 'bolo maravilhoso super recomendo !', 
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120'
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="pt-8 pb-6 bg-brand-blue/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Veja o que nossos clientes dizem</h2>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} fill="#D4AF37" color="#D4AF37" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 relative"
            >
              <Quote className="absolute top-6 right-6 text-brand-pink-dark/20" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-pink shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <span className="font-bold text-gray-900">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
