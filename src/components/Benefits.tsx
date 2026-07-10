const diferenciais = [
  {
    titulo: "Produção artesanal",
    descricao:
      "Cada encomenda é modelado de forma única feito a mão e inteiramente manual."
  },
  {
    titulo: "Ingredientes selecionados",
    descricao:
      "Usamos os melhores ingredientes – você sente a diferença na qualidade e no sabor logo na primeira mordida.",
  },
  {
    titulo: "Personalização",
    descricao:
      "Suas cores favoritas, os sabores que você mais ama e o tema da sua festa. Criamos um projeto exclusivo para combinar perfeitamente com o seu momento.",
  },
  {
    titulo: "Feito sob encomenda",
    descricao:
      "A produção é planejada para que os produtos sejam entregues frescos na data combinada.",
  },
];

export default function Benefits() {
  return (
    <section
      id="sobre"
      className="bg-[#FFF8F1] px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">

          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#1F2635] sm:text-4xl lg:text-5xl">
            Por que escolher a Obba Doces?
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Cuidado na produção, atenção aos detalhes e opções preparadas para
            diferentes momentos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {diferenciais.map((item) => (
            <article
              key={item.titulo}
              className="
                rounded-[1.5rem]
                border
                border-[#E06D8A]/15
                bg-white
                p-6
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                sm:p-8
              "
            >

              <h3 className="text-xl font-bold text-[#1F2635] sm:text-2xl">
                {item.titulo}
              </h3>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-600">
                {item.descricao}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}