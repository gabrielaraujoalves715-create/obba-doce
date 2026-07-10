import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phoneNumber = "5511946408023";
  const message =
    "Olá! Vim pelo site da Obba Doces e gostaria de fazer uma encomenda.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Obba Doces pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: [1, 1.04, 1],
      }}
      transition={{
        opacity: { duration: 0.4 },
        y: { duration: 0.4 },
        scale: {
          duration: 1.0,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="
        fixed
        bottom-4
        right-4
        z-[9999]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        shadow-xl
        sm:bottom-5
        sm:right-5
        sm:h-16
        sm:w-16
      "
    >
      <motion.span
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.22, 0.05, 0.22],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        animate={{
          rotate: [0, 0, -8, 8, -5, 5, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
      >
        <FaWhatsapp className="text-white" size={30} />
      </motion.div>
    </motion.a>
  );
}