import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="bg-[#E06D8A] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
          Planejando uma comemoração especial?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Consulte a disponibilidade da data e solicite seu orçamento para
          bolos, doces e encomendas personalizadas.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Obba%20Doces%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              min-h-14
              items-center
              justify-center
              gap-2
              rounded-full
              bg-white
              px-8
              py-4
              font-bold
              text-[#E06D8A]
              shadow-lg
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#FFF8F1]
              hover:shadow-xl
              active:translate-y-0
            "
          >
            <FaWhatsapp size={21} />
            Pedir orçamento pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}