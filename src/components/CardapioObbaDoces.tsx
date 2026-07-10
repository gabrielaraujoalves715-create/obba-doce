import { useState } from "react";
import { Cake, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type Aba = "bolos" | "doces";

type Categoria = {
  categoria: string;
  itens: string[];
};

const dadosBolos: Categoria[] = [
  {
    categoria: "Clássicos",
    itens: [
      "Banana com canela",
      "Fofinho de chocolate",
      "Fofinho de fubá com laranja",
      "Fubá",
      "Iogurte",
      "Cenoura",
    ],
  },
  {
    categoria: "Tradicionais",
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
    itens: [
      "Ameixa",
      "Fubá com goiabada",
      "Fubá com limão-siciliano",
      "Fubá cremoso",
      "Iogurte com limão",
    ],
  },
  {
    categoria: "Caseirinhos",
    itens: ["Cenoura com gotas de chocolate", "Milho"],
  },
  {
    categoria: "Artesanais",
    itens: ["Maçã com castanha", "Mandioca"],
  },
  {
    categoria: "Gourmet",
    itens: [
      "Queijadinha",
      "Luiz Felipe",
      "Iogurte com pistache",
      "Leitinho",
      "Bolo pudim",
      "Amizade com nozes",
    ],
  },
  {
    categoria: "Linha Piscina",
    itens: [
      "Cenoura com creme de avelã",
      "Milho com curau",
      "Romeu e Julieta",
      "Chocolate com leitinho",
      "Chocolate com leitinho e pistache",
    ],
  },
  {
    categoria: "Outros sabores",
    itens: ["Amendoim", "Milho com requeijão", "Prestígio"],
  },
];

const dadosDoces: Categoria[] = [
  {
    categoria: "Doces clássicos",
    itens: [
      "Beijinho tradicional",
      "Brigadeiro tradicional",
      "Casadinho",
      "Brigadeiro de morango",
      "Cajuzinho",
    ],
  },
  {
    categoria: "Doces elaborados",
    itens: [
      "Delicatesse de coco com cereja",
      "Copinho de chocolate trufado com cereja",
      "Copinho de chocolate trufado com uva",
      "Copinho de chocolate trufado com physalis",
      "Copinho de chocolate com limão",
      "Tortinha de frutas vermelhas",
      "Gota com morango",
      "Coração branco trufado de maracujá",
      "Tortinha de limão ou maracujá",
    ],
  },
  {
    categoria: "Novidades e especiais",
    itens: [
      "Brigadeiro brûlée",
      "Brigadeiro Romeu e Julieta",
      "Mini bolo bombom",
      "Conchinha de chocolate branco com pérolas",
      "Brigadeiro de pistache",
      "Pirâmide trufada com caramelo e flor de sal",
      "Bombom tipo Ferrero Rocher",
      "Bombom tipo Raffaello",
      "Crocante de uva",
    ],
  },
  {
    categoria: "Doces com café",
    itens: [
      "Brigadeiro de café",
      "Mini trufa de café",
      "Copinho trufado de café",
    ],
  },
  {
    categoria: "Camafeus",
    itens: [
      "Camafeu no fondant",
      "Camafeu com chocolate branco",
      "Camafeu com chocolate",
    ],
  },
  {
    categoria: "Doces gourmet",
    itens: [
      "Brigadeiro com blossoms belga",
      "Brigadeiro ao leite belga",
      "Brigadeiro tradicional com confeito",
      "Brigadeiro recheado com doce de leite",
      "Brigadeiro recheado com creme de avelã",
      "Brigadeiro de leite em pó",
      "Brigadeiro de churros",
      "Brigadeiro de paçoca",
      "Bombom de uva",
      "Bombom de prestígio",
      "Bombom de Ovomaltine",
      "Olho de sogra",
      "Olho de sogro",
    ],
  },
  {
    categoria: "Lembrancinhas e casamento",
    itens: [
      "Bem-casado tradicional",
      "Bem-casado com nozes",
      "Palha italiana",
      "Caixinha trufada para casamento",
    ],
  },
  {
    categoria: "Mini trufas e caixinhas",
    itens: [
      "Mini trufas em vários sabores",
      "Caixinha trufada de chocolate",
      "Caixinha trufada branca",
      "Caixinha trufada com placa decorativa",
      "Caixinha trufada com creme de avelã",
      "Caixinha trufada com pérolas",
    ],
  },
];

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Obba%20Doces%20e%20gostaria%20de%20fazer%20uma%20encomenda.";

export default function CardapioObbaDoces() {
  const [abaAtiva, setAbaAtiva] = useState<Aba>("bolos");
  const [filtroDoces, setFiltroDoces] = useState("Todos");

  const docesFiltrados =
    filtroDoces === "Todos"
      ? dadosDoces
      : dadosDoces.filter((categoria) => categoria.categoria === filtroDoces);

  const categoriasAtivas = abaAtiva === "bolos" ? dadosBolos : docesFiltrados;

  return (
    <section
      id="categorias"
      className="scroll-mt-24 bg-[#FFF8F1] px-5 py-14 text-[#1F2635] sm:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            Cardápio Obba Doces
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Escolha uma categoria para conhecer os sabores disponíveis.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setAbaAtiva("bolos")}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold ${
                abaAtiva === "bolos"
                  ? "border-[#E06D8A] bg-[#E06D8A] text-white"
                  : "border-[#E06D8A]/25 bg-white text-[#1F2635]"
              }`}
            >
              <Cake size={18} />
              Bolos
            </button>

            <button
              type="button"
              onClick={() => setAbaAtiva("doces")}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold ${
                abaAtiva === "doces"
                  ? "border-[#E06D8A] bg-[#E06D8A] text-white"
                  : "border-[#E06D8A]/25 bg-white text-[#1F2635]"
              }`}
            >
              <Sparkles size={18} />
              Doces finos e gourmet
            </button>
          </div>
        </header>

        {abaAtiva === "doces" && (
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {["Todos", ...dadosDoces.map((categoria) => categoria.categoria)].map(
              (categoria) => (
                <button
                  key={categoria}
                  type="button"
                  onClick={() => setFiltroDoces(categoria)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold ${
                    filtroDoces === categoria
                      ? "border-[#E06D8A] bg-[#E06D8A] text-white"
                      : "border-[#E06D8A]/20 bg-white text-[#1F2635]"
                  }`}
                >
                  {categoria}
                </button>
              ),
            )}
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categoriasAtivas.map((categoria) => (
            <article
              key={categoria.categoria}
              className="rounded-2xl border border-[#E06D8A]/15 bg-white p-6 shadow-sm"
            >
              <h2 className="border-b border-[#E06D8A]/15 pb-4 text-xl font-bold">
                {categoria.categoria}
              </h2>

              <ul className="mt-4 space-y-3">
                {categoria.itens.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-gray-700"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E06D8A]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[#E06D8A]/15 bg-white p-6 text-center sm:p-8">
          <h2 className="text-2xl font-bold">Consulte disponibilidade e valores</h2>

          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Os pedidos são preparados sob encomenda. Entre em contato para
            confirmar prazo, quantidade e opções de personalização.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-bold text-white sm:w-auto"
          >
            <FaWhatsapp size={21} />
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
