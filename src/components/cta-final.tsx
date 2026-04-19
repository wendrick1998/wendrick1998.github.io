import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "./icons";

export function CtaFinal() {
  return (
    <section className="bg-gray-900 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Quer ver os modelos disponíveis agora?
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Fale com a gente e receba atendimento rápido, sem compromisso.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#075E54] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#128C7E] hover:shadow-xl hover:scale-105 active:scale-100"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Falar no WhatsApp agora
        </a>
      </div>
    </section>
  );
}
