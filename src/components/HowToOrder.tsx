import { FaWhatsapp } from "react-icons/fa";

const passos = [
  {
    numero: "01",
    titulo: "Conte o que você precisa",
    descricao:
      "Informe o produto, a quantidade, a data e os detalhes da sua comemoração.",
  },
  {
    numero: "02",
    titulo: "Receba o orçamento",
    descricao:
      "Confirmamos a disponibilidade, os valores e as opções de personalização.",
  },
  {
    numero: "03",
    titulo: "Confirme sua encomenda",
    descricao:
      "Após a confirmação do pedido, iniciamos a produção para a data combinada.",
  },
];

export default function HowToOrder() {
  return (
    <section
      id="como-encomendar"
      className="bg-[#FFFDF9] px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">

          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#1F2635] sm:text-4xl lg:text-5xl">
            Como fazer sua encomenda
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Um processo simples para você consultar a disponibilidade e
            organizar seu pedido pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {passos.map((passo) => (
            <article
              key={passo.numero}
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

              <h3 className="text-xl font-bold text-[#1F2635]">
                {passo.titulo}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {passo.descricao}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Obba%20Doces%20e%20gostaria%20de%20fazer%20uma%20encomenda."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              min-h-14
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#25D366]
              px-8
              py-4
              font-bold
              text-white
              shadow-lg
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#20BA5A]
              hover:shadow-xl
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