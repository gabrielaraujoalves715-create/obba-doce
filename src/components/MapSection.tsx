import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Navigation, Copy, Check } from "lucide-react";

export default function MapSection() {
  const [copied, setCopied] = useState(false);
  const fullAddress = "Rua Bernardo Correia Leitão, 651 - Parque Regina, São Paulo - SP, 05763-000";

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="localizacao" className="pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Onde Estamos</h2>
          <div className="w-20 h-1.5 bg-brand-pink-dark mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-md mx-auto">
            Venha retirar as suas encomendas artesanais fresquinhas no nosso espaço!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Card com Detalhes */}
          <div className="lg:col-span-4 flex flex-col justify-between glass-card p-8 md:p-10 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/20 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-pink rounded-2xl flex items-center justify-center text-brand-pink-dark mb-6 shadow-sm">
                <MapPin size={28} />
              </div>
              
              <p className="text-gray-750 leading-relaxed mb-6 font-medium mt-2">
                {fullAddress}
              </p>

              <div className="space-y-3 text-sm text-gray-650 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Atendimento com Hora Marcada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-pink-dark" />
                  <span>Fácil acesso e estacionamento no local</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 relative z-10 mt-auto">
              <button
                onClick={handleCopy}
                className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-brand-pink hover:bg-brand-pink/10 text-gray-700 font-bold py-3 px-4 rounded-xl transition-all text-sm cursor-pointer"
              >
                {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                {copied ? "Copiado!" : "Copiar Endereço"}
              </button>
              
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+Bernardo+Correia+Leit%C3%A3o%2C+651+-+Parque+Regina%2C+S%C3%A3o+Paulo+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-pink-dark text-gray-900 font-bold py-3 px-4 rounded-xl transition-all text-sm shadow-sm"
              >
                <Navigation size={16} />
                Como Chegar
              </a>
            </div>
          </div>

          {/* Iframe do Google Maps */}
          <div className="lg:col-span-8 glass-card p-3 overflow-hidden h-[400px] lg:h-auto min-h-[350px]">
            <iframe
              title="Google Maps - Obba Doces"
              src="https://maps.google.com/maps?q=Rua%20Bernardo%20Correia%20Leit%C3%A3o%2C%20651%20-%20Parque%20Regina%2C%20S%C3%A3o%20Paulo%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="rounded-2xl border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
