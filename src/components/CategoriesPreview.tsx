import { Link } from "react-router-dom";const categorias = [
  {
    titulo: "Bolos artesanais",
    descricao:
      "Sabores clássicos, especiais, recheados e opções preparadas sob encomenda.",
    image: "/bolos-artesanais.webp",
  },
  {
    titulo: "Doces finos",
    descricao:
      "Camafeus, trufas, bombons e doces especiais para eventos e celebrações.",
    image: "/doces-para-festas.webp",
  },
  {
    titulo: "Doces para festas",
    descricao:
      "Brigadeiros, beijinhos, doces elaborados e opções para diferentes comemorações.",
     image: "/doces-finos.webp",
  },
];

export default function CategoriesPreview() {
  return (
    <section
      id="categorias"
      className="bg-[#FFFDF9] px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">

          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#1F2635] sm:text-4xl lg:text-5xl">
            Escolha o que combina com o seu momento
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Conheça algumas das nossas principais opções e acesse o cardápio
            completo para conferir sabores e valores.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categorias.map((categoria) => (
            <article
              key={categoria.titulo}
              className="group overflow-hidden rounded-[1.5rem] border border-[#E06D8A]/15 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F7E9DE]">
                <img
                  src={categoria.image}
                  alt={categoria.titulo}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1F2635]">
                  {categoria.titulo}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {categoria.descricao}
                </p>

                <Link
                  to="/cardapio"
                  className="mt-6 inline-flex items-center font-semibold text-[#E06D8A] transition hover:text-[#CF5C79]"
                >
                  Ver opções
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/cardapio"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#E06D8A] px-8 py-4 font-bold text-white shadow-lg shadow-[#E06D8A]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#CF5C79]"
          >
            Ver cardápio completo
          </Link>
        </div>
      </div>
    </section>
  );
}