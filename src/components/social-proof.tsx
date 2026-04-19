import { StarIcon } from "./icons";

const testimonials = [
  {
    text: "Comprei meu iPhone e fui muito bem atendido. Produto perfeito!",
    author: "Cliente verificado",
  },
  {
    text: "Loja confiável, atendimento rápido e direto no WhatsApp.",
    author: "Cliente verificado",
  },
  {
    text: "Excelente assistência técnica. Meu iPhone voltou como novo!",
    author: "Cliente verificado",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-5 w-5 text-amber-400" />
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Clientes que já compraram com a gente
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
          Atendemos diariamente clientes que buscam qualidade, segurança e bom
          atendimento.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <Stars />
              <p className="mt-4 text-gray-700 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-gray-500">
                &mdash; {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
