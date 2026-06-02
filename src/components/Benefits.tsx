/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Leaf, Award, Heart, Sparkles, Clock, Star } from "lucide-react";
import { Benefit } from "../types";

const BENEFITS: Benefit[] = [
  { id: '1', title: 'Feito à Mão', description: 'Cada doce é modelado de forma única e inteiramente manual. Não é uma linha de produção, é dedicação exclusiva para a sua comemoração.' },
  { id: '2', title: 'Ingredientes Premium', description: 'Usamos os melhores ingredientes – você sente a diferença na qualidade e no sabor logo na primeira mordida.' },
  { id: '3', title: 'Totalmente Personalizado', description: 'Suas cores favoritas, os sabores que você mais ama e o tema da sua festa. Criamos um projeto exclusivo para combinar perfeitamente com o seu momento.' },
  { id: '4', title: 'Feito com Amor', description: 'Carinho em cada detalhe. Colocamos paixão em cada fornada para que seus convidados sintam esse cuidado em forma de doce.' },
  { id: '5', title: 'Visual Encantador', description: 'Nossos doces são verdadeiras obras de arte que vão arrancar elogios de todo mundo e deixar a mesa da sua festa simplesmente irresistível.' },
  { id: '6', title: 'Produtos Frescos', description: 'Tudo feito sob encomenda para garantir o melhor sabor.' },
];

const ICONS = [<Award />, <Leaf />, <Sparkles />, <Heart />, <Star />, <Clock />];

export default function Benefits() {
  return (
    <section id="sobre" className="pt-12 pb-14 bg-white/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Por que a Obba Doces?</h2>
          <div className="w-20 h-1.5 bg-brand-pink-dark mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="w-14 h-14 bg-brand-pink shrink-0 rounded-2xl flex items-center justify-center text-brand-pink-dark shadow-sm">
                {ICONS[index]}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
