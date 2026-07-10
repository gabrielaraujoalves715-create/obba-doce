import { FaWhatsapp } from "react-icons/fa";

const passos = [
  {
    titulo: "Conte o que você precisa",
    descricao:
      "Informe o produto, a quantidade, a data e os detalhes da sua comemoração.",
  },
  {
    titulo: "Receba o orçamento",
    descricao:
      "Confirmamos a disponibilidade, os valores e as opções de personalização.",
  },
  {
    titulo: "Confirme sua encomenda",
    descricao:
      "Após a confirmação do pedido, iniciamos a produção para a data combinada.",
  },
];

export default function HowToOrder() {
  return (
    <section
      id="como-encomendar"
      className="bg-[#FFFDF9] px-5 py-14 sm:px-8 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-[#1F2635] sm:text-4xl lg:text-5xl">
            Como fazer sua encomenda
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Um processo simples para consultar a disponibilidade e organizar
            seu pedido pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6">
          {passos.map((passo) => (
            <article
              key={passo.titulo}
              className="
                flex
                min-h-0
                flex-col
                rounded-2xl
                border
                border-[#E06D8A]/15
                bg-white
                p-5
                shadow-sm
                sm:p-6
                lg:min-h-[210px]
                lg:p-8
              "
            >
              <h3 className="text-xl font-bold leading-snug text-[#1F2635]">
                {passo.titulo}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {passo.descricao}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-9 flex justify-center sm:mt-10">
          <a
            href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Obba%20Doces%20e%20gostaria%20de%20fazer%20uma%20encomenda."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              min-h-14
              w-full
              max-w-sm
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#25D366]
              px-6
              py-4
              text-center
              text-base
              font-bold
              text-white
              shadow-lg
              transition
              duration-300
              hover:bg-[#20BA5A]
              sm:w-auto
              sm:px-8
            "
          >
            <FaWhatsapp size={21} />
            Fazer pedido pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}