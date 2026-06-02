/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import {
  Cake,
  Sparkles,
  Instagram,
  Heart,
  Info,
} from "lucide-react";

export default function CardapioObbaDoces() {
  const [abaAtiva, setAbaAtiva] = useState<"bolos" | "doces">("bolos");
  const [filtroDoces, setFiltroDoces] = useState<string>("Todos");

  const dadosBolos = [
    {
      categoria: "Clássicos",
      precoBase: "R$ 25,00",
      itens: [
        "Banana c/ Canela",
        "Fofinho Chocolate",
        "Fofinho Fubá c/ Laranja",
        "Fubá",
        "Iogurte",
        "Cenoura",
      ],
    },
    {
      categoria: "Tradicionais",
      precoBase: "R$ 26,00",
      itens: [
        "Chocolate",
        "Coco",
        "Formigueiro",
        "Laranja",
        "Limão",
        "Maracujá",
        "Mesclado",
        "Queijo",
        "Trigo",
      ],
    },
    {
      categoria: "Especiais",
      precoBase: "R$ 28,00",
      itens: [
        "Ameixa",
        "Fubá c/ Goiabada",
        "Fubá c/ Limão Siciliano",
        "Fubá Cremoso",
        "Iogurte c/ Limão",
      ],
    },
    {
      categoria: "Caseirinhos",
      precoBase: "R$ 30,00",
      itens: ["Cenoura c/ Gotas de Chocolate", "Milho"],
    },
    {
      categoria: "Artesanais",
      precoBase: "R$ 32,00",
      itens: ["Maçã c/ Castanha", "Mandioca"],
    },
    {
      categoria: "Gourmet",
      itensPersonalizados: [
        { nome: "Queijadinha", preco: "R$ 42,00" },
        { nome: "Luiz Felipe", preco: "R$ 44,00" },
        { nome: "Iogurte c/ Pistache", preco: "R$ 45,00" },
        { nome: "Leitinho", preco: "R$ 50,00" },
        { nome: "Bolo Pudim", preco: "R$ 55,00" },
        { nome: "Amizade (contém nozes)", preco: "R$ 60,00" },
      ],
    },
    {
      categoria: "Recheados (Linha Piscina)",
      itensPersonalizados: [
        { nome: "Piscina de Cenoura c/ Creme de Avelã", preco: "R$ 37,00" },
        { nome: "Piscina de Milho c/ Curau", preco: "R$ 37,00" },
        { nome: "Piscina Romeu e Julieta", preco: "R$ 37,00" },
        { nome: "Piscina de Chocolate c/ Leitinho", preco: "R$ 42,00" },
        {
          nome: "Piscina de Chocolate c/ Leitinho e Pistache",
          preco: "R$ 55,00",
        },
      ],
    },
    {
      categoria: "Demais Sabores",
      itensPersonalizados: [
        { nome: "Amendoim", preco: "R$ 38,00" },
        { nome: "Milho c/ Requeijão", preco: "R$ 40,00" },
        { nome: "Prestígio", preco: "R$ 40,00" },
      ],
    },
  ];

  const dadosDoces = [
    {
      categoria: "Doces Clássicos",
      itens: [
        { nome: "Beijinho Tradicional (Açúcar ou Coco)", preco: "R$ 1,70" },
        { nome: "Brigadeiro Tradicional", preco: "R$ 1,70" },
        { nome: "Casadinho", preco: "R$ 2,20" },
        { nome: "Brigadeiro de Morango", preco: "R$ 2,00" },
        { nome: "Cajuzinho", preco: "R$ 2,20" },
      ],
    },
    {
      categoria: "Doces Elaborados",
      itens: [
        { nome: "Delicatesse de Coco c/ Cereja", preco: "R$ 3,80" },
        { nome: "Copinho de Choc. Trufado c/ Cereja", preco: "R$ 3,60" },
        { nome: "Copinho de Choc. Trufado c/ Uva", preco: "R$ 3,00" },
        { nome: "Copinho de Choc. Trufado c/ Physalis", preco: "R$ 5,00" },
        { nome: "Copinho de Choc. de Limão", preco: "R$ 2,50" },
        { nome: "Tortinha de Frutas Vermelhas", preco: "R$ 5,30" },
        { nome: "Gota com Morango (Fruta)", preco: "R$ 5,30" },
        { nome: "Coração Branco Trufado Maracujá", preco: "R$ 2,50" },
        { nome: "Tortinha - Limão ou Maracujá", preco: "R$ 4,50" },
      ],
    },
    {
      categoria: "Novidades & Especiais",
      itens: [
        { nome: "Brigadeiro Brulee", preco: "R$ 2,50" },
        { nome: "Brigadeiro Romeu e Julieta", preco: "R$ 3,20" },
        { nome: "Mini Bolo Bombom", preco: "R$ 5,00" },
        { nome: "Conchinha de Choc. Branco e Pérolas", preco: "R$ 3,00" },
        { nome: "Brigadeiro de Pistache", preco: "R$ 4,50" },
        { nome: "Pirâmide Trufada / Caramelo Flor de Sal", preco: "R$ 4,15" },
        { nome: "Bombom Tipo Ferrero Rocher", preco: "R$ 4,00" },
        { nome: "Bombom Tipo Rafaello", preco: "R$ 3,25" },
        { nome: "Crocante de Uva", preco: "R$ 3,00" },
      ],
    },
    {
      categoria: "Doces com Café",
      itens: [
        { nome: "Brigadeiro de Café", preco: "R$ 2,40" },
        { nome: "Mini Trufa de Café", preco: "R$ 2,90" },
        { nome: "Copinho Trufado de Café", preco: "R$ 2,90" },
      ],
    },
    {
      categoria: "Camafeu",
      itens: [
        { nome: "Camafeu no Fondant", preco: "R$ 3,60" },
        { nome: "Camafeu ao Chocolate Branco", preco: "R$ 3,60" },
        { nome: "Camafeu ao Chocolate", preco: "R$ 3,60" },
      ],
    },
    {
      categoria: "Doces Gourmet (Variedades de Brigadeiros Belgas e Especiais)",
      itens: [
        { nome: "Brigadeiro c/ Blossoms Belga / Meio Amargo", preco: "R$ 4,95" },
        { nome: "Brigadeiro ao Leite Belga", preco: "R$ 5,10" },
        {
          nome: "Brigadeiro Tradicional (Confeito ao Leite/Meio Amargo)",
          preco: "R$ 3,00",
        },
        { nome: "Brigadeiro Recheado c/ Doce de Leite", preco: "R$ 2,10" },
        {
          nome: "Brigadeiro Recheado c/ Nutella / Ninho com Nutella",
          preco: "R$ 2,70",
        },
        { nome: "Brigadeiro de Ninho / Churros / Paçoquita", preco: "R$ 1,90" },
        { nome: "Bombom de Uva / Prestígio / Ovomaltine", preco: "R$ 2,90" },
        {
          nome: "Olho de Sogra (Ameixa) / Olho de Sogro (Damasco)",
          preco: "R$ 3,30",
        },
        { nome: "Camafeu (Fondant / Choc. Branco / Chocolate)", preco: "R$ 3,60" },
      ],
    },
    {
      categoria: "Lembrancinhas & Casamento",
      itens: [
        { nome: "Bem Casado (Tradicional Doce de Leite)", preco: "R$ 5,35" },
        { nome: "Bem Casado c/ Nozes", preco: "R$ 6,35" },
        { nome: "Palha Italiana", preco: "R$ 5,00" },
        { nome: "Caixinha Trufada Noivinhos", preco: "R$ 3,40" },
      ],
    },
    {
      categoria: "Mini Trufas e Caixinhas Trufadas",
      itens: [
        { nome: "Mini Trufa (Vários Recheios)", preco: "R$ 2,60" },
        { nome: "Caixinha Trufada Noivinhos de Chocolate", preco: "R$ 3,40" },
        { nome: "Caixinha Trufada Noivinhos Branca", preco: "R$ 3,40" },
        { nome: "Caixinha Trufada - Plaquha Noivinhos", preco: "R$ 3,70" },
        { nome: "Caixinha Trufada c/ Nutella e Pérolas", preco: "R$ 4,40" },
        { nome: "Caixinha Trufada com Pérolas", preco: "R$ 3,30" },
      ],
    },
  ];

  const tabBase =
    "flex items-center justify-center gap-2 px-5 py-3 rounded-full font-display font-semibold text-sm transition-all shadow-sm border min-w-0";

  return (
    <section
      id="categorias"
      className="bg-brand-beige text-gray-800 pt-12 pb-16 px-6 sm:px-10 scroll-mt-28"
    >
      {/* Cabeçalho */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-sm font-medium text-brand-pink-dark uppercase tracking-wide mb-2">
          Obba Doces · confeitaria artesanal
        </p>
        <h2 className="text-4xl font-bold mb-3">Nossas Delícias</h2>
        <p className="text-gray-600 mb-8">
          Escolha o cardápio e confira sabores — feitos com carinho, fofinhos e
          cheios de sabor.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setAbaAtiva("bolos")}
            className={`${tabBase} sm:px-8 ${
              abaAtiva === "bolos"
                ? "bg-brand-pink-dark text-gray-900 border-brand-pink-dark scale-[1.02]"
                : "bg-white border-brand-pink-dark/35 text-gray-700 hover:bg-brand-pink hover:border-brand-pink-dark/50"
            }`}
          >
            <Cake size={18} className="shrink-0" />
            Cardápio de bolos
          </button>
          <button
            type="button"
            onClick={() => setAbaAtiva("doces")}
            className={`${tabBase} sm:px-8 ${
              abaAtiva === "doces"
                ? "bg-brand-pink-dark text-gray-900 border-brand-pink-dark scale-[1.02]"
                : "bg-white border-brand-pink-dark/35 text-gray-700 hover:bg-brand-pink hover:border-brand-pink-dark/50"
            }`}
          >
            <Sparkles size={18} className="shrink-0" />
            Doces finos & gourmet
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {abaAtiva === "bolos" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dadosBolos.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[12px] p-6 sm:p-7 border border-brand-pink-dark/25 shadow-soft hover:shadow-[0_12px_36px_-12px_rgba(0,0,0,0.08)] transition-shadow"
              >
                <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4 pb-3 border-b border-brand-pink/80">
                  <h3 className="text-xl font-bold text-gray-900 font-display">
                    {cat.categoria}
                  </h3>
                  {"precoBase" in cat && cat.precoBase ? (
                    <span className="text-sm font-bold bg-brand-blue text-teal-800 px-3 py-1 rounded-full shrink-0">
                      {cat.precoBase}
                    </span>
                  ) : null}
                </div>
                {"itens" in cat && cat.itens ? (
                  <ul className="space-y-2.5 text-gray-600">
                    {cat.itens.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[15px]">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-pink-dark shrink-0"
                          aria-hidden
                        />
                        <span className="text-gray-700 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-3">
                    {cat.itensPersonalizados.map((item, i) => (
                      <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-sm">
                        <span className="font-semibold text-gray-900">{item.nome}</span>
                        <span className="font-bold text-gray-900 tabular-nums sm:text-base">
                          {item.preco}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="mb-6 flex items-center justify-start gap-2 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
              {[
                "Todos",
                ...dadosDoces.map((c) => c.categoria),
              ].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFiltroDoces(cat)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    filtroDoces === cat
                      ? "bg-brand-pink-dark text-gray-900 border-brand-pink-dark"
                      : "bg-white text-gray-700 border-brand-pink-dark/25 hover:bg-brand-pink"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dadosDoces
                .filter((c) => filtroDoces === "Todos" || c.categoria === filtroDoces)
                .map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[12px] p-6 sm:p-7 border border-brand-pink-dark/25 shadow-soft"
                >
                  <h3 className="text-xl font-bold text-gray-900 font-display mb-4 pb-3 border-b border-brand-pink flex items-center gap-2">
                    <Heart size={18} className="text-brand-pink-dark shrink-0" />
                    {cat.categoria}
                  </h3>
                  <div className="space-y-2">
                    {cat.itens.map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-wrap sm:flex-nowrap items-baseline gap-x-3 gap-y-1 py-2 rounded-[8px] px-2 -mx-2 hover:bg-brand-beige transition-colors group"
                      >
                        <span className="text-gray-700 group-hover:text-gray-900 text-[15px] leading-snug min-w-[40%] flex-1">
                          {item.nome}
                        </span>
                        <span
                          className="hidden sm:block grow min-w-[1rem] border-b border-dotted border-gray-300 self-center mx-1"
                          aria-hidden
                        />
                        <span className="font-bold text-gray-900 whitespace-nowrap tabular-nums text-[15px]">
                          {item.preco}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[12px] bg-brand-pink border border-brand-pink-dark/30 p-6 sm:p-8 max-w-3xl mx-auto shadow-soft">
              <h4 className="font-display font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                <Info size={18} className="text-gray-900 shrink-0" />
                Guia de planejamento para o seu evento
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>
                  <span className="mr-2" aria-hidden>
                    ✨
                  </span>
                  <strong>Quantidade ideal:</strong> de 6 a 8 doces finos por
                  convidado para garantir fartura na mesa.
                </li>
                <li>
                  <span className="mr-2" aria-hidden>
                    ✨
                  </span>
                  <strong>Lembrancinhas:</strong> para bem-casados e palhas,
                  estimamos 2 unidades por pessoa (conforme a exposição no
                  espaço).
                </li>
                <li>
                  <span className="mr-2" aria-hidden>
                    ✨
                  </span>
                  <strong>Degustação:</strong> Box com 16 doces variados + 1 bem
                  casado por R$ 70,00 — consulte disponibilidade.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* CTA */}
        <footer className="mt-14 text-center max-w-2xl mx-auto px-2">
          <h3 className="text-xl font-bold text-gray-900 font-display mb-2">
            Encomende o seu e adoce seu dia!
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Fale conosco e monte seu pedido personalizado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20os%20bolos%20e%20doces%20e%20fazer%20uma%20encomenda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" className="inline-block">
                <path
                  fill="#fff"
                  d="M12.004 2c-5.51 0-9.996 4.486-9.996 9.998 0 1.763.461 3.42 1.267 4.873l-1.274 4.656 4.773-1.253c1.412.766 3.012 1.201 4.717 1.201 5.51 0 9.996-4.486 9.996-9.998C22 6.486 17.514 2 12.004 2zm3.763 13.7c-.24.68-.1.94-.39 1.22-.3.29-.69.43-1.14.45-.46.02-.92-.08-2.12-.57-2.61-1.07-4.31-3.73-4.44-3.91-.13-.18-1.03-1.37-1.01-2.62.02-1.25.66-1.86.9-2.11.24-.25.53-.31.68-.31h.43c.13 0 .3.01.46.38.17.39.58 1.42.63 1.53.05.11.08.24.01.38-.07.14-.15.24-.25.36-.11.12-.22.24-.31.35-.11.12-.12.25-.01.44.47.81 1.05 1.48 1.81 2.02.77.53 1.51.81 1.73.92.22.11.35.09.48-.06.13-.15.55-.64.7-.86.15-.22.3-.18.5-.11.2.07 1.27.6 1.49.71.22.11.37.17.42.26.06.09.06.52-.18 1.2z"
                />
              </svg>
              WhatsApp (11) 94640-8023
            </a>
            <a
              href="https://instagram.com/obba_docess"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:opacity-95 transition-all hover:-translate-y-0.5"
            >
              <Instagram size={20} />
              @obba_docess
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
