"use client";

import { StarIcon, GoogleIcon } from "./icons";
import { STORE } from "@/lib/constants";
import { useInView } from "@/hooks/use-in-view";
import { useSpotlight } from "@/hooks/use-spotlight";

const testimonials = [
  {
    text: "Ótimo atendimento, o Rafael é um excelente profissional. Bons produtos!",
    author: "Matheus R.",
    time: "2 meses atrás",
  },
  {
    text: "Super recomendado, atenciosos, prestativos, e produto de qualidade.",
    author: "Camila S.",
    time: "3 meses atrás",
  },
  {
    text: "Lugar top, atendimento excelente, produto de qualidade! Vendedor Rafael.",
    author: "Lucas M.",
    time: "1 mês atrás",
  },
  {
    text: "Atendimento e assistência de qualidade e agilizada. Fui atendido pelo Daniel, ótimo profissional.",
    author: "Fernando P.",
    time: "4 meses atrás",
  },
];

const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

function Avatar({ name, index }: { name: string; index: number }) {
  const initials = name.split(" ").map(n => n[0]).join("");
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
      style={{ background: colors[index % colors.length] }}
    >
      {initials}
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4 text-amber-400 star-glow" />
      ))}
    </div>
  );
}

export function SocialProof() {
  const { ref, inView } = useInView();
  const { containerRef, handleMouseMove } = useSpotlight();

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #060B18 0%, #0a1a2e 50%, #060B18 100%)",
      }}
    >
      <div className="section-divider" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[200px]" style={{ background: "rgba(66,133,244,0.04)" }} />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`text-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A9BD9]">
            Avaliações Reais
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            O que dizem nossos clientes
          </h2>

          <div className="mt-6 google-badge inline-flex items-center gap-4 rounded-full px-6 py-3">
            <GoogleIcon className="h-5 w-5" />
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-amber-400 star-glow" />
              ))}
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                {STORE.rating}
              </span>
              <span className="text-sm text-blue-200/60">
                {STORE.reviews} avaliações
              </span>
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glow-card p-6 sm:p-7 ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: inView ? `${(i + 1) * 100}ms` : undefined }}
            >
              <div className="relative z-10">
                <Stars />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-blue-100/70">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <Avatar name={t.author} index={i} />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-blue-200/45">{t.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
