import { CheckCircleIcon } from "./icons";

const items = [
  "Aparelhos testados e prontos para uso",
  "Garantia de funcionamento",
  "Atendimento rápido e direto",
  "Compra segura com suporte real",
  "Loja física para sua tranquilidade",
];

export function Differentials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Por que comprar com a gente?
        </h2>

        <div className="mx-auto mt-10 max-w-xl space-y-4">
          {items.map((text) => (
            <div
              key={text}
              className="flex items-center gap-3 rounded-xl bg-gray-50 px-5 py-4"
            >
              <CheckCircleIcon className="h-6 w-6 text-[#25D366] shrink-0" />
              <span className="text-gray-800 font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
