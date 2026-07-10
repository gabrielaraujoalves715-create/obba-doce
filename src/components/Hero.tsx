import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-24 lg:pt-36">
      {/* Fundo decorativo */}
      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[radial-gradient(circle_at_15%_20%,rgba(224,109,138,0.12),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(105,183,196,0.10),transparent_32%)]
        "
        animate={{
          opacity: [0.65, 0.85, 0.65],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.28)_45%,transparent_70%)]
        "
        animate={{
          x: ["-15%", "15%", "-15%"],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Conteúdo */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-12
          px-5
          sm:px-8
          lg:grid-cols-2
          lg:gap-16
          lg:px-10
        "
      >
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex min-w-0 flex-col items-start"
        >

         <h1
         className="
         max-w-2xl
         text-[2.6rem]
         font-bold
         leading-[1.05]
         tracking-[-0.04em]
         text-[#111827]
        mb-6
       sm:text-5xl
       md:text-6xl
       lg:text-[4rem]
       xl:text-[4.6rem]
  "
>
            Bolos e doces feitos com carinho para deixar seus momentos{" "}
            <span className="font-serif italic text-[#E06D8A]">
              ainda mais especiais
            </span>
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-relaxed
              text-gray-600
              sm:text-lg
              lg:text-xl
            "
          >
            Bolos, doces e kits personalizados para aniversários, presentes e
            comemorações, preparados sob encomenda com cuidado em cada detalhe.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5511946408023&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Obba%20Doces%20e%20gostaria%20de%20fazer%20uma%20encomenda."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-14
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#E06D8A]
                px-7
                py-4
                text-center
                text-base
                font-bold
                text-white
                shadow-lg
                shadow-[#E06D8A]/20
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#CF5C79]
                hover:shadow-xl
                active:translate-y-0
                sm:w-auto
              "
            >
              <FaWhatsapp size={21} />
              Fazer uma encomenda
            </a>

            <Link
              to="/cardapio"
              className="
                inline-flex
                min-h-14
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-[#E06D8A]/45
                bg-white
                px-7
                py-4
                text-base
                font-bold
                text-[#1F2635]
                shadow-sm
                transition
                duration-300
                hover:-translate-y-0.5
                hover:border-[#E06D8A]
                hover:bg-[#FFF6F8]
                active:translate-y-0
                sm:w-auto
              "
            >
              Ver cardápio
            </Link>
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg lg:max-w-xl"
        >
          <div
            className="
              relative
              z-10
              aspect-square
              overflow-hidden
              rounded-[2rem]
              bg-[#EAD8B4]
              shadow-2xl
              sm:rounded-[2.5rem]
              lg:rotate-2
              lg:transition-transform
              lg:duration-500
              lg:hover:rotate-0
            "
          >
            <img
           src="/hero-obba-doces.jpg"
           alt="Doces artesanais da Obba Doces"
           className="h-full w-full object-cover"
/>
          </div>

          {/* Card superior — apenas tablet e desktop */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-3
              -top-5
              z-20
              hidden
              items-center
              gap-3
              rounded-2xl
              border
              border-pink-100
              bg-white
              p-4
              shadow-xl
              sm:flex
              lg:-right-6
            "
          >
          <div>
          <p className="text-sm font-bold text-[#1F2635]">
           Bolos sob medida
          </p>
          <p className="text-xs text-gray-500">
          Do jeitinho que você imaginou
          </p>
          </div>
          </motion.div>

          {/* Card inferior — somente desktop */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="
              absolute
              -bottom-7
              -left-6
              z-20
              hidden
              items-center
              gap-3
              rounded-2xl
              border
              border-cyan-100
              bg-white
              p-4
              shadow-xl
              lg:flex
            "
          >
            <div>
            <p className="text-sm font-bold text-[#1F2635]">
             Produção artesanal
             </p>
             <p className="text-xs text-gray-500">
             Cuidado em cada detalhe
             </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
