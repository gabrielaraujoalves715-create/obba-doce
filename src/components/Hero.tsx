import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Obba%20Doces%20e%20gostaria%20de%20fazer%20uma%20encomenda.";

export default function Hero() {
  return (
    <main className="w-full overflow-hidden bg-[#EAD8B4]">
      {/* =====================================================
          BANNER DESKTOP
      ====================================================== */}
      <section
        className="
          relative
          hidden
          w-full
          overflow-hidden
          bg-[#EAD8B4]
          lg:block
        "
        aria-label="Apresentação da Obba Doces"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="block h-auto w-full"
          aria-label="Bolos e doces artesanais da Obba Doces"
        >
          <source src="/banner-obba-desktop.mp4" type="video/mp4" />

          Seu navegador não suporta vídeos.
        </video>

        {/* Botões do desktop */}
        <div
          className="
            absolute
            bottom-[13%]
            left-[6.3%]
            z-20
            flex
            items-center
            gap-4
          "
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fazer uma encomenda pelo WhatsApp"
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
              gap-2
              whitespace-nowrap
              rounded-full
              bg-[#E06D8A]
              px-6
              py-3
              text-base
              font-bold
              text-white
              shadow-lg
              shadow-[#E06D8A]/25
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#CF5C79]
              hover:shadow-xl
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#E06D8A]
              focus-visible:ring-offset-2
              active:translate-y-0
            "
          >
            <FaWhatsapp size={20} aria-hidden="true" />
            <span>Fazer uma encomenda</span>
          </a>

          <Link
            to="/cardapio"
            aria-label="Ver o cardápio da Obba Doces"
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
              whitespace-nowrap
              rounded-full
              border
              border-[#E06D8A]
              bg-white
              px-6
              py-3
              text-base
              font-bold
              text-[#1F2635]
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#FFF6F8]
              hover:shadow-lg
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#E06D8A]
              focus-visible:ring-offset-2
              active:translate-y-0
            "
          >
            Ver cardápio
          </Link>
        </div>
      </section>

      {/* =====================================================
          BANNER MOBILE E TABLET
      ====================================================== */}
      <section
        className="
          relative
          block
          w-full
          overflow-hidden
          pt-16
          lg:hidden
        "
        aria-label="Apresentação da Obba Doces"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="block h-auto w-full"
          aria-label="Bolos e doces artesanais da Obba Doces"
        >
          <source src="/banner-obba-mobile.mp4" type="video/mp4" />

          Seu navegador não suporta vídeos.
        </video>

        {/* Somente botão do WhatsApp no mobile */}
        <div
          className="
            absolute
            inset-x-0
            bottom-[5%]
            z-20
            mx-auto
            flex
            w-full
            max-w-[285px]
            justify-center
            px-5
            sm:max-w-[300px]
          "
        >
        <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Fazer uma encomenda pelo WhatsApp"
  className="
    inline-flex
    min-h-11
    w-full
    items-center
    justify-center
    gap-2
    rounded-full
    border
    border-[#E06D8A]
    bg-white
    px-4
    py-2
    text-sm
    font-bold
    text-[#1F2635]
    shadow-md
    transition-all
    duration-300
    hover:bg-[#FFF6F8]
    hover:shadow-lg
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#E06D8A]
    focus-visible:ring-offset-2
    active:scale-[0.98]
    sm:min-h-12
    sm:text-[15px]
    "
>
  <FaWhatsapp
    size={19}
    className="shrink-0 text-[#25D366]"
    aria-hidden="true"
  />

  <span>Fazer uma encomenda</span>
</a>
        </div>
      </section>
    </main>
  );
}