import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#25D366] uppercase">
            Atendimento rápido &mdash; fale direto com um especialista
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            iPhones Originais com{" "}
            <span className="text-[#25D366]">Garantia</span> e Loja Física
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Atendimento rápido via WhatsApp &bull; Aparelhos revisados &bull;
            Compra segura
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#075E54] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#128C7E] hover:shadow-xl hover:scale-105 active:scale-100"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Ver iPhones disponíveis
            </a>
            <p className="text-sm text-gray-500">
              Resposta rápida &bull; Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
